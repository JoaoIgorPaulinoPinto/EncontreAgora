'use client';
import React, {
  useImperativeHandle,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import maplibregl from 'maplibre-gl';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import styles from './MapSelector.module.css';


interface MapSelectorProps {
  OnClicked: (endereco: string) => void;
  showMap: boolean;
  onCloseMap: () => void;
}

const MapSelector = forwardRef(function MapSelector(
  { OnClicked, showMap, onCloseMap }: MapSelectorProps,
  ref
) {
  const [localSelecionado, setLocalSelecionado] = useState<{ lng: number; lat: number } | null>(null);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null);
  const [enederco, SetEndereco] = useState('');

  useImperativeHandle(ref, () => ({
    value: localSelecionado,
  }));

  useEffect(() => {
    if (!mapContainer.current || map) return;

    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=NvrMIAXt7aMgks5V7Nmg',
      center: [-47.702042, -23.127497],
      zoom: 10,
    });

    mapInstance.addControl(new maplibregl.NavigationControl(), 'top-right');

    mapInstance.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      if (marker) marker.remove();

      const newMarker = new maplibregl.Marker()
        .setLngLat([lng, lat])
        .addTo(mapInstance);

      setMarker(newMarker);
      setLocalSelecionado({ lng, lat });

      fetch(`/api/geocode?lat=${lat}&lng=${lng}`)
        .then((res) => res.json())
        .then((data) => {
          const endereco = data.results?.[0]?.formatted;
          console.log('Dados da API:', data);
          SetEndereco(data); // se quiser guardar o dado para outro uso
          OnClicked(endereco); // usando diretamente o campo retornado
        })
        .catch((err) => {
          console.error('Erro ao buscar localização:', err);
        });
    });
    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, [showMap]);

  return showMap ? (
    <div className={styles.MapWrapper}>
      <button className={styles.FecharMapa} onClick={onCloseMap}>
        <span className="material-symbols-outlined">tab_close</span>
      </button>
      <div className={styles.Map} ref={mapContainer} />
    </div>
  ) : null;
});

export default MapSelector;
