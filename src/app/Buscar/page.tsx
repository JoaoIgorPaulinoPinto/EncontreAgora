import React from 'react';

import TextBox from '../../../Components/TextBox/TextBox.jsx';
import Dropdown from '../../../Components/Dropdowns/Dropdown.jsx';
import styles from '../buscar/buscar.module.css'
export default function Buscar() {
    const Servicos = ['Cabelerereiro', 'Pintor', 'Lava Rápida', 'Eletricista', 'Pedreiro', 'Encanador', 'Mecânico'];
    let servicoEscrito = '';
    return (
        <div className={styles.parentdiv}>
            <div className={styles.filtros}>

                <Dropdown options={Servicos} title='Serviço'dropdowntype = 'servico'multoptions={false}/>
               
               
                <TextBox  />

            </div>
           
            <h1>{servicoEscrito}</h1>
 
        </div>
    )
}