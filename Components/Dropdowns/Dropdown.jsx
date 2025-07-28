'use client';
import { use, useState } from 'react';
import styles from './Dropdown.module.css'; // nome do arquivo corrigido aqui
/**
 * @param {{ options: string[], title: string, dropdowntype: string, multoptions: boolean }} props
 */
export default function DropdownLocal(props) {
  const [abrirDropdown, setAbrirDropdown] = useState(false);
  const [selected, setSelected] = useState(props.multoptions ? [] : '');


  function ToggleDropdown() {
    setAbrirDropdown(!abrirDropdown);
  }

  function SelectItem(item) {
    if (props.multoptions) {
      if (!selected.includes(item)) {
        setSelected([...selected, item]);
      } else {
        // Remover item se já estiver selecionado
        setSelected(selected.filter(i => i !== item));
      }
    } else {
      setSelected(item);
      setAbrirDropdown(false);
    }
  }

  return (
    <div className={styles.formFlexContainer}>
      <div className={`${styles.Container} ${styles.Dropdown} ${abrirDropdown ? styles.open : ''}`}>
        <button className={styles.dropdownButton} type="button" onClick={ToggleDropdown}>
          {selected !== '' ? selected : props.title}
        </button>

        {abrirDropdown && (
          <ul className={styles.zindexma}>
            {props.options.map((item, index) => (
                <li key={index} onClick={() => SelectItem(item)}>
                  {item} {props.multoptions && selected.includes(item) ? '✓' : ''}
                </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
