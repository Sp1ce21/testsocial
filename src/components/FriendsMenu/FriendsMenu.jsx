import s from './FriendsMenu.module.css';
import NomadList from './NomadList/NomadList';

function FriendsMenu() {
    return (
        <div className={s.friendsMenu}>
            <NomadList/>
        </div>
    );
}

export default FriendsMenu;
