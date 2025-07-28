'use client'

import { useRouter } from 'next/navigation';
import { styleText } from 'util';
import Styles from './ButtonStart.module.css'; // Importando o CSS do botão
export default function ButtonStart(props) {
  const router = useRouter();

    function handleClick() {
    if (props.rota) {
      router.push(props.rota);
    }
  }

  return (
    <button className={Styles.ButtonStart} id={props.id} onClick={handleClick}>
      {props.children}
    </button>
  );
}
