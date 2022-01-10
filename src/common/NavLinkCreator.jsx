import { NavLink } from 'react-router-dom';
import s from '../components/FriendsMenu/NomadList/Channels/Channels.module.css';
const NavLinkCreator = ({adress, text, setCurrentLink}) => {
    function callLink(){
        setCurrentLink(adress);
    }
    
    return (
        <NavLink className={s.channel} to={`/channels/${adress}`} activeClassName={s.channelActive} onClick={callLink}>{text}</NavLink>
    )
}

export default NavLinkCreator;