import Styles from './perfil.module.css'
import ProfileAvatar from '../../../Components/ProfilePage/ProfileAvatar/ProfileAvatar'
import ProfileUserName from '../../../Components/ProfilePage/ProfileUserName/ProfileUserName'
import ProfileBanner from '../../../Components/ProfilePage/ProfileBanner/ProfileBanner'
import ProfileContentSelector from '../../../Components/ProfilePage/ProfileContentSelector/ProfileContentSelector.Module'
import user from '../../../Log/Clientes.json'
export default function Perfil() {
   const u = user.map(user => user)[24]
   return <div className={Styles.card}>

      <ProfileBanner />
      <div className={Styles.avatar}>
         <ProfileAvatar />
         <ProfileUserName nome={u.empresa} />
      </div>
      <ProfileContentSelector servicos={u.servicos} />
   </div>
}  