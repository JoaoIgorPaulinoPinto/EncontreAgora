import Styles from './perfil.module.css'
import ProfileAvatar from '../../../Components/ProfilePage/ProfileAvatar/ProfileAvatar'
import ProfileUserName from '../../../Components/ProfilePage/ProfileUserName/ProfileUserName'
import ProfileBanner from '../../../Components/ProfilePage/ProfileBanner/ProfileBanner'

export default function Perfil() {
   return <div className={Styles.card}>

      <ProfileBanner />
      <div className={Styles.avatar}> <ProfileAvatar />
         <ProfileUserName />
      </div>
   </div>
}