'use client';

import Styles from './SelectLocalization.module.css';

export default function SelectLocalization() {
    const handleClick = () => {
        console.log('clicou');
    };

    return (
        <div className={Styles.Button}>
            <span onClick={handleClick} className="material-symbols-outlined">location_on</span>
        </div>
    );
}
