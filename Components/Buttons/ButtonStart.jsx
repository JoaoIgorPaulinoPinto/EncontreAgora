'use client'

import { useRouter } from 'next/navigation';

export default function ButtonStart(props) {
  const router = useRouter();

    function handleClick() {
    if (props.rota) {
      router.push(props.rota);
    }
  }

  return (
    <button className={props.className} id={props.id} onClick={handleClick}>
      {props.children}
    </button>
  );
}
