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
import * as maptilersdk from '@maptiler/sdk';
import styles from '../Map/MapSelector.module.css';

interface MapSelectorProps {
  OnClicked: (lng: number, lat: number) => void;
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
      OnClicked(lng, lat);

      fetch(`/api/geocode?lat=${lat}&lng=${lng}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Dados da API:', data);
        })
        .catch((err) => {
          console.error('Erro ao buscar localização:', err);
        });
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, [map, marker, OnClicked]);

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
