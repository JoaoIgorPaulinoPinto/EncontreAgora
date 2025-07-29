'use client';
import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from '@maptiler/sdk';
import styles from '../Map/MapSelector.module.css';
interface MapSelectorProps {
    onLocationSelect: (lng: number, lat: number) => void;
}

export default function MapSelector({ onLocationSelect }: MapSelectorProps) {
    const [localSelecionado, setLocalSelecionado] = useState<{ lng: number, lat: number } | null>(null);

    const mapContainer = useRef<HTMLDivElement | null>(null);
    const [map, setMap] = useState<maplibregl.Map | null>(null);
    const [marker, setMarker] = useState<maplibregl.Marker | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        const mapInstance = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://api.maptiler.com/maps/streets/style.json?key=NvrMIAXt7aMgks5V7Nmg',
            center: [-46.6253, -23.5337], // Centro inicial (São Paulo, por exemplo)
            zoom: 10,
        });

        mapInstance.addControl(new maplibregl.NavigationControl(), 'top-right');

        mapInstance.on('click', (e) => {
            const { lng, lat } = e.lngLat;
            console.log("Clicou em:", lng, lat);

            if (marker) marker.remove();

            const el = document.createElement('div');


            const newMarker = new maplibregl.Marker({
                anchor: 'center',
                pitchAlignment: 'viewport',
                rotationAlignment: 'map',
                rotation: 0,
            })

                .setLngLat([lng, lat])
                .addTo(mapInstance);
            console.log("Marcador em:", newMarker.getLngLat());

            setMarker(newMarker);
            onLocationSelect(lng, lat);
        });
        setMap(mapInstance);

        return () => {
            mapInstance.remove();
        };
    }, []);

    return <div className={styles.Map} ref={mapContainer}/>
    
}
