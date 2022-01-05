import { NavLink } from 'react-router-dom'
import s from '../components/FriendsMenu/NomadList/Friends/Friends.module.css'
const ProfileCreator = ({isOnline = false, image, fullName, link}) => {
    return (
        <NavLink className={s.profile} to={link}>
            {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
            <img src={image} alt="image" className={s.image}/>
            <div className={s.text}>{fullName}</div>
        </NavLink>
    )
}
export default ProfileCreator