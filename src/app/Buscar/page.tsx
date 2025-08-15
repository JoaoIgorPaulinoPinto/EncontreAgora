'use client'
import React, { useState } from 'react';
import TextBox from '../../../Components/TextBox/TextBox';
import DropdownSrc from '../../../Components/Dropdowns/DropdownSrc';
import Dropdown from '../../../Components/Dropdowns/Dropdown';
import styles from './buscar.module.css';
import servicosData from '../../../Log/Servicos.json';
import LocalizationSelector from '../../../Components/LocalizationSelector/LocalizationSelector';
import ClientList from '../../../Components/List/List';

interface Servico {
  nome: string;
}
export default function Buscar() {
  const servicos = servicosData as { nome: string }[];
  const servicosNomes = servicos.map(s => s.nome);
  const [filter, SetFilter] = useState('');
  const [listfilter, SetListFilter] = useState('');
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
          <LocalizationSelector onEnderecoSelecionado={(a: any) => { SetEndereco(a); }} />
        </div>
      </div>

      <div className={styles.listagem}>
        <div className={styles.listFiltros}>
          <DropdownSrc
            id={2}
            options={['Mais próximos', 'Melhor avaliados']}
            title='Ordenar por'
            dropdowntype='ordenar'
            multoptions={false}
            onChange={(value) => SetListFilter(value.toString())}
          />
        </div>

        <ClientList service={filter} order={listfilter} />

      </div>

    </div>

  );
}