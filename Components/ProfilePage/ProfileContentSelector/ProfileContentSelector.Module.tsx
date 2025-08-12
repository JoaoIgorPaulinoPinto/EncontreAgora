'use client'
import { useState } from "react";
import styles from './ProfileContentSelector.module.css';

type Servicos = {
    servicos: string[];
}

export default function TabsSelector(servicos: Servicos) {
    const [activeTab, setActiveTab] = useState('servicos');
    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <button
                    onClick={() => setActiveTab('servicos')}
                    className={`${styles.tabButton} ${activeTab === 'servicos' ? styles.tabButtonActive : ''}`}
                >
                    Serviços oferecidos
                </button>

                <button
                    onClick={() => setActiveTab('outro')}
                    className={`${styles.tabButton} ${activeTab === 'outro' ? styles.tabButtonActive : ''}`}
                >
                    Outro conteúdo
                </button>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'servicos' && (
                    <div>
                        <h2>Serviços oferecidos</h2>

                        <ul>
                            {servicos.servicos.map((servico, index) => (
                                <li key={index}>{servico}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {activeTab === 'outro' && (
                    <div>
                        <h2>Outro conteúdo</h2>
                        <p>Aqui você pode colocar qualquer outra coisa que quiser mostrar.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
