'use client';
import styles from './LocalizationSelector.module.css';
import Map from '../Map/MapSelector';
import { useState } from 'react';
import UseEffect from 'react';
import { useEffect } from 'react';

interface LocalizacaoPageProps {
  onEnderecoSelecionado?: (endereco: string) => void;
}

export default function LocalizacaoPage({ onEnderecoSelecionado }: LocalizacaoPageProps) {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState('');
  useEffect(() => {
    if (enderecoSelecionado) {
      console.log("Endereço selecionado atualizado:", enderecoSelecionado);
      onEnderecoSelecionado?.(enderecoSelecionado); // Notifica o componente pai
    }
  }, [enderecoSelecionado]);
  return (
    <div>
      <div className={styles.locationFilter}>
        <button
          className={styles.localizationButton}
          aria-label='Localização'
          onClick={() => setMostrarMapa(true)}
        >
          <span className="material-symbols-outlined">distance</span>
          <label>Localização</label>
        </button>

        {mostrarMapa && (
          <Map
            showMap={mostrarMapa}
            onCloseMap={() => setMostrarMapa(false)}
            OnClicked={(value) => {
              setEnderecoSelecionado(value);
              console.log("Endereço selecionado: " + enderecoSelecionado);
            }}

          />

        )}

        <div className={styles.locationFilter_input}>
          <input
            className={styles.distInput}
            type="number"
            placeholder="20 Km"
          />
          <img
            className={styles.distanceIcon}
            src="/iconDistance.png"
            alt="Distância de busc
            a"
          />
        </div>
      </div>
    </div>
  );
}
