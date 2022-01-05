import { NavLink } from 'react-router-dom';
import s from '../components/FriendsMenu/NomadList/Channels/Channels.module.css'
export const NavLinkCrator = (adress, text) => {
    return (
        <NavLink className={s.channel} to={adress} activeClassName={s.channelActive}>{text}</NavLink>
    )
}