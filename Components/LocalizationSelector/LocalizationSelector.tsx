
import styles from './LocalizationSelector.module.css';



export default function LocalizacaoPage() {

  return (
    <div>
      <div className={styles.locationFilter}>
        <button
          className={styles.button}
          aria-label="Mostrar mapa"
        >
          <span className="material-symbols-outlined">map</span>
        </button>
        <div className={styles.locationFilter_input}>
          <input
            className={styles.distInput}
            type="number"
            placeholder="km"
          />
          <span className="material-symbols-outlined">activity_zone</span>
        </div>
      </div>
    </div>
  );
}
