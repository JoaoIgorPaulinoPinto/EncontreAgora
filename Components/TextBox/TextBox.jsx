'use client';
import { useState } from 'react';
import styles from './TextBox.module.css';// aproveitando o mesmo CSS

export default function TextBox({ placeholder }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // previne reload
    console.log(text); // aqui você pode fazer o que quiser com o texto
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
        className={styles['textbox-input']}
      />
      <button  type="submit" className={styles['textbox-button']}>
        Enviar
      </button>
    </form>
  );
}
