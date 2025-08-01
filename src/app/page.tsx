import Dropdown from '../../Components/Dropdowns/Dropdown'
import ButtonStart from '../../Components/AppStartButton/ButtonStart.jsx'
import styles from './Page.module.css'

export default function App() {
    return (
        <div className={styles.container}>
            {/* <Dropdown cidades={cidades} /> */}
            <div className={styles.centralizador}>
                <ButtonStart className={styles.ButtonStart} id={0} rota={'/Buscar'}>
                    Buscar
                </ButtonStart>
            </div>
        </div>
    )
}
