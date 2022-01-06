import { NavLink } from 'react-router-dom';
import { propTypes } from 'redux-form';
import s from '../components/FriendsMenu/NomadList/Channels/Channels.module.css';
const NavLinkCreator = ({adress, text, setCurrentLink, ...props}) => {
// console.log(window.location.pathname);
    function callLink(){
        setCurrentLink(adress);
    }
debugger
    return (
        <NavLink className={s.channel} to={`/channels/${adress}`} activeClassName={s.channelActive} onClick={callLink}>{text}</NavLink>
    )
}

export default NavLinkCreator;