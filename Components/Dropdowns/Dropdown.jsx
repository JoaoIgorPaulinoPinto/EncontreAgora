'use client';
import { use, useState } from 'react';
import styles from './Dropdown.module.css'; // nome do arquivo corrigido aqui
/**
 * @param {{
 *   style?: React.CSSProperties,
 *   id: string | number,
 *   options: string[],
 *   title: string,
 *   dropdowntype?: string,
 *   multoptions?: boolean
 * }} props
 */
export default function Dropdown(props) {
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
    <div id = {props.id} className={styles.formFlexContainer}>
      <div  className={`${styles.Container} ${styles.Dropdown} ${abrirDropdown ? styles.open : ''}`}>
        <button className={styles.dropdownButton} style = {{...props.style}} type="button" onClick={ToggleDropdown}>
          {selected !== '' ? selected : props.title}
        </button>

        {abrirDropdown && (
          <ul style={{ zIndex: abrirDropdown ? 1000 : 1 }}>
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
