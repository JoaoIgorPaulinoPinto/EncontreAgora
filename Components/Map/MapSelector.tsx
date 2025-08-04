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
  const [endereco, setEndereco] = useState('');

  useImperativeHandle(ref, () => ({
    value: localSelecionado,
  }));

  useEffect(() => {
    if (!mapContainer.current || map || !showMap) return;

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
          const enderecoEncontrado = data.results?.[0]?.formatted;
          setEndereco(enderecoEncontrado);
          OnClicked(enderecoEncontrado);
        })
        .catch((err) => {
          console.error('Erro ao buscar localização:', err);
        });
    });

    setMap(mapInstance);

    // Fecha ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mapContainer.current &&
        !mapContainer.current.contains(event.target as Node)
      ) {
        onCloseMap();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      mapInstance.remove();
    };
  }, [showMap]);

  return showMap ? (
    <>
      <div className={styles.Overlay} onClick={onCloseMap} />
      <div className={styles.MapWrapper}>
        <div className={styles.Map} ref={mapContainer} />
      </div>
    </>
  ) : null;
});

export default MapSelector;
