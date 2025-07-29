'use client';
import React from 'react';
import TextBox from '../../../Components/TextBox/TextBox.jsx';
import DropdownSrc from '../../../Components/Dropdowns/DropdownSrc.jsx';
import Dropdown from '../../../Components/Dropdowns/Dropdown.jsx';
import styles from '../buscar/buscar.module.css';
import SelectLocalization from '../../../Components/SelectLocalization/SelectLocalization';
import MapSelector from '../../../Components/SelectLocalization/SelectLocalization';

export default function Buscar() {
    const Servicos = ['Cabelerereiro', 'Pintor', 'Lava Rápida', 'Eletricista', 'Pedreiro', 'Encanador', 'Mecânico'];
    let servicoEscrito = '';
 const handleLocationSelect = (lng: number, lat: number, address: string) => {
    console.log('Local selecionado:', lng, lat, address);
    // aqui você pode armazenar no estado, etc.
  };
    return (
        <div className={styles.parentdiv}>
            <div className={styles.selectionContainer}>
                <div className={styles.chooseService}>
                    <DropdownSrc  id={1} options={Servicos} title='Serviço' dropdowntype='servico' multoptions={false} />
                </div>
                <div className={styles.chooseLocation}>
                  <MapSelector onLocationSelect={handleLocationSelect} />
                </div>
            </div>
            <div className={styles.listFiltros}>
                <DropdownSrc id={1}
                    options={['Mais próximos', 'Mais baratos', 'Melhor avaliados']}
                    title='Ordenar por'
                    dropdowntype='ordenar'
                    multoptions={false}
                />
            </div>

        </div>
    );
}
