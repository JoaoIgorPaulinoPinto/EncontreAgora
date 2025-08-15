import Styles from './perfil.module.css'
import ProfileAvatar from '../../../../Components/ProfilePage/ProfileAvatar/ProfileAvatar'
import ProfileUserName from '../../../../Components/ProfilePage/ProfileUserName/ProfileUserName'
import ProfileBanner from '../../../../Components/ProfilePage/ProfileBanner/ProfileBanner'
import ProfileContentSelector from '../../../../Components/ProfilePage/ProfileContentSelector/ProfileContentSelector.Module'
import clientes from '../../../../Log/Clientes.json'

import { notFound } from 'next/navigation';

interface Empresa {
   id: number;
   contratante: string;
   empresa: string;
   endereco: string;
   servicos: string[];
   estrelas: number;
   distancia_km: number;
}

export default function Perfil({ params }: { params: { id: string } }) {
   const lista = clientes as Empresa[];
   const empresa = lista.find(e => e.id === Number(params.id));
   if (!empresa) notFound();

   return (
      <div className={Styles.card}>
         <ProfileBanner />
         <div className={Styles.avatar}>
            <ProfileAvatar />
            <ProfileUserName nome={empresa.empresa} />
         </div>
         <ProfileContentSelector servicos={empresa.servicos ?? []} />
      </div>
   );
}
