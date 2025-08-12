import React from "react";
import Styles from "./List.module.css";
import Clients from "../../Log/Clientes.json";

interface Empresa {
    id: number;
    contratante: string;
    empresa: string;
    endereco: string;
    servicos: string[];
    estrelas: number;
    distancia_km: number;
}

interface ClientListProps {
    service: string;
    order?: string;
}

export default function ClientList({ order = "Melhor avaliados", service }: ClientListProps) {
    const clients = (Clients as Empresa[])
        .filter(client =>
            service
                ? client.servicos.some(s =>
                    s.toLowerCase().includes(service.toLowerCase())
                )
                : true
        )
        .sort((a, b) => {
            if (order === "Melhor avaliados") {
                return b.estrelas - a.estrelas;
            } else if (order === "Mais Próximos") {
                return a.distancia_km - b.distancia_km;
            } else {
                // Se order for o nome da empresa, ordenar só pelo nome da empresa igual a order (colocar primeiro)
                if (a.empresa === order && b.empresa !== order) return -1; // a vem antes
                if (b.empresa === order && a.empresa !== order) return 1;  // b vem antes
                return 0; // mantem ordem
            }
            return 0;
        });


    // retornar ou renderizar os clientes aqui



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
                                <h6>{item.estrelas}</h6>

                            </div>
                        </div>
                    </div>


                ))}

            </div>
        </>
    );
}
