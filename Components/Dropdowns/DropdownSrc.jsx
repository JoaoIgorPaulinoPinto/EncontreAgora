'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './DropdownSrc.module.css';

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
export default function DropdownSrc(props) {
  const [abrirDropdown, setAbrirDropdown] = useState(false);
  const [selected, setSelected] = useState(props.multoptions ? [] : '');
  const [text, setText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(props.options);

  const containerRef = useRef(null);

  useEffect(() => {
    if (text.trim() === '') {
      setFilteredOptions(props.options);
    } else {
      const lowerText = text.toLowerCase();
      setFilteredOptions(
        props.options.filter(opt => opt.toLowerCase().includes(lowerText))
      );
    }
    setAbrirDropdown(true);
  }, [text, props.options]);

  function ToggleDropdown() {
    setAbrirDropdown(!abrirDropdown);
  }

  function SelectItem(item) {
    if (props.multoptions) {
      if (!selected.includes(item)) {
        setSelected([...selected, item]);
      } else {
        setSelected(selected.filter(i => i !== item));
      }
    } else {
      setSelected(item);
      setText(item);
      setAbrirDropdown(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setAbrirDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 'auto';

  return (
    <div
      id={props.id}
      className={styles.formFlexContainer}
      ref={containerRef}
      style={{ gap: '8px', alignItems: 'center' }}
    >
      <button
        className={styles.dropdownButton}
        style={{ ...props.style }}
        type="button"
        onClick={ToggleDropdown}
      >
        {selected !== '' && selected.length > 0
          ? Array.isArray(selected)
            ? selected.join(', ')
            : selected
          : props.title}
        <span className={styles.dropdownArrow} />
      </button>

      <input
        type="text"
        className={styles['textbox-input']}
        placeholder="Pesquisar serviço..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setAbrirDropdown(true)}
      />

      {abrirDropdown && filteredOptions.length > 0 && (
        <ul
          className={styles.Dropdown}
          style={{ width: containerWidth }}
        >
          {filteredOptions.map((item, index) => (
            <li
              key={index}
              onClick={() => SelectItem(item)}
              onMouseDown={e => e.preventDefault()}
              className={`${styles.dropdownItem} ${
                props.multoptions && selected.includes(item) ? styles.selectedItem : ''
              }`}
            >
              {item} {props.multoptions && selected.includes(item) ? '✓' : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
