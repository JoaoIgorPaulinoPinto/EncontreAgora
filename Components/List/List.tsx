import React from "react";
import Styles from "./List.module.css";
import Clients from "../../Log/Clientes.json";

interface Empresa {
    id: number;
    contratante: string;
    empresa: string;
    endereco: string;
    servicos: string[];
}

interface ClientListProps {
    service: string;
    order: string;
}

export default function ClientList({ service }: ClientListProps) {
    const clients = (Clients as Empresa[]).filter(client =>
        service
            ? client.servicos.some(s =>
                s.toLowerCase().includes(service.toLowerCase())
            )
            : true // se nenhum serviço for informado, mostra todos

        //ordenar com base no order * 

    );

    return (
        <>
            <div className={Styles.list}>

                {clients.map(item => (
                    <div key={item.id} className={Styles.card}>
                        <div className={Styles.ProfileAvatar}>
                            <img src="https://cdn-icons-png.flaticon.com/512/8608/8608769.png" alt="Avatar" />
                        </div>

                        <div className={Styles.info}>
                            <div className={Styles.name}>{item.empresa}</div>

                            <div className={Styles.footer}>

                                <div className={Styles.local}>
                                    {item.endereco}
                                </div>
                                <div className={Styles.services}>
                                    {item.servicos.map((servico, i) => (
                                        <span key={i}>{servico}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                ))}

            </div>
        </>
    );
}
