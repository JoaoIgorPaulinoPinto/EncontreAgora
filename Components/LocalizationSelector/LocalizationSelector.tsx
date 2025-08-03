
import styles from './LocalizationSelector.module.css';


export default function LocalizacaoPage() {

  return (
    <div>
      <div className={styles.locationFilter}>
        <button
          className={styles.button}
          aria-label="Mostrar mapa"
        >
          <span className="material-symbols-outlined">distance</span>

        </button>
        <div className={styles.locationFilter_input}>
          <input
            className={styles.distInput}
            type="number"
            placeholder="20 Km"
          />
          <img
            className={styles.distanceIcon}
            src="/iconDistance.png"
            alt="Distância de busca"
          />
        </div>
      </div>
    </div>
  );
}
