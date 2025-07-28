import React from 'react';
import TextBox from '../../../Components/TextBox/TextBox.jsx';
import DropdownSrc from '../../../Components/Dropdowns/DropdownSrc.jsx';
import Dropdown from '../../../Components/Dropdowns/Dropdown.jsx';
import styles from '../buscar/buscar.module.css';
import SelectLocalization from '../../../Components/SelectLocalization/SelectLocalization.jsx';


export default function Buscar() {
    const Servicos = ['Cabelerereiro', 'Pintor', 'Lava Rápida', 'Eletricista', 'Pedreiro', 'Encanador', 'Mecânico'];
    let servicoEscrito = '';

    return (
        <div className={styles.parentdiv}>
            <div className={styles.chooseService}>
                <DropdownSrc style={{ borderRadius: '0px 0px 10px 0px' }} id={1}  options={Servicos} title='Serviço' dropdowntype='servico' multoptions={false} />

                {/* <div className={styles.text}>
                    <TextBox placeholder='Pesquisar serviço...' />
                </div> */}
            </div>
            <div className={styles.chooseLocation}>
                <SelectLocalization />
            </div>


                <div>
                    <DropdownSrc style = {{ borderRadius: '100px 100px 100px 100px' }} id={1}
                        options={['Mais próximos', 'Mais baratos', 'Melhor avaliados']}
                        title='Ordenar por'
                        dropdowntype='ordenar'
                        multoptions={false}
                    />
                </div>


            <h1>{servicoEscrito}</h1>
        </div>
    );
}
