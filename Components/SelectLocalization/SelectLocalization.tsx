'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './SelectLocalization.module.css'; // Importando o CSS específico    


// Carrega o componente do mapa somente no cliente
const MapSelector = dynamic(() => import('../Map/MapSelector'), { ssr: false });

export default function LocalizacaoPage() {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [localSelecionado, setLocalSelecionado] = useState<{ lng: number, lat: number } | null>(null);

  return (
    <div className={styles.locationFilter}>
      <button className={styles.button} onClick={() => setMostrarMapa(true)}>Local</button>

      {mostrarMapa && (
        <div className= {styles.Map} >
          <MapSelector onLocationSelect={(lng, lat) => {
            setLocalSelecionado({ lng, lat });
            console.log('Local selecionado:', lng, lat);
          }} />
        </div>
      )}

      {localSelecionado && (
        <p className={styles.selectedLocation}>
          Local selecionado: {localSelecionado.lat.toFixed(6)}, {localSelecionado.lng.toFixed(6)}
        </p>
      )}


{/* 
https://api.opencagedata.com/geocode/v1/json?q=-23.55052,-46.633308&key=SUA_API_KEY

export async function getAddressFromCoords(lat: number, lng: number) {
  const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=SUA_API_KEY`);
  const data = await res.json();
  return data.results[0]?.formatted || 'Endereço não encontrado';
}


*/}


    </div>
  );
}