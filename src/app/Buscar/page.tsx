'use client'
import React, { useState } from 'react';
import TextBox from '../../../Components/TextBox/TextBox.jsx';
import DropdownSrc from '../../../Components/Dropdowns/DropdownSrc.jsx';
import Dropdown from '../../../Components/Dropdowns/Dropdown.jsx';
import styles from './buscar.module.css';
import servicosData from '../../../Log/Servicos.json';
import LocalizationSelector from '../../../Components/LocalizationSelector/LocalizationSelector';
interface Servico {
  nome: string;
}
export default function Buscar() {
  const servicos = servicosData as { nome: string }[];
  const servicosNomes = servicos.map(s => s.nome);
  const [filter, SetFilter] = useState('');
  const [endereco, SetEndereco] = useState('')

  return (
    <div className={styles.parentdiv}>
      <div className={styles.selectionContainer}>
        <div className={styles.chooseService}>
          <DropdownSrc
            id={1}
            options={servicosNomes}
            title='Serviço'
            dropdowntype='servico'
            multoptions={false}
            onChange={(value) => SetFilter(value.toString())}
          />
        </div>
        <div className={styles.chooseLocation}>
          <LocalizationSelector onEnderecoSelecionado={(value) => { SetEndereco(value); }} />
        </div>
      </div>

      <div className={styles.listFiltros}>
        <DropdownSrc
          id={1}
          options={['Mais próximos', 'Mais baratos', 'Melhor avaliados']}
          title='Ordenar por'
          dropdowntype='ordenar'
          multoptions={false}
          onChange={(value) => SetFilter(value.toString())}
        />
      </div>

      <h1>
        {filter}
      </h1>
      <h1>
        {endereco}
      </h1>
    </div>
  );
}
