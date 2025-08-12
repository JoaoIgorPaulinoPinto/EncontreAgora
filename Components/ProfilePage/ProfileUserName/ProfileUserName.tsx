import Styles from './ProfileUserName.module.css'

type props = {
    nome: string;
}

export default function ProfileUserName(nome: props) {

    return (
        <div className={Styles.UserName}>
            {nome.nome}
        </div>

    )
}