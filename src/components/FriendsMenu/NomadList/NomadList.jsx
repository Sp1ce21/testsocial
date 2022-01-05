import s from './NomadList.module.css';
import arrow from '../../../assets/images/FriendsMenu/arrow.png'
import settings from '../../../assets/images/FriendsMenu/settings.png'
import Channels from './Channels/Channels';

function NomadList() {
    return (
        <div className={s.nomadList}>

            <div className={s.switcher}>
                <div className={s.leftSide}>
                    <h2 className={s.title}>Nomad List</h2>
                    <img src={arrow} alt="arrow" className={s.unswitched}/>
                </div>
                <img src={settings} alt="settings" className={s.settings}/>
            </div>

            <Channels/>

        </div>
    );
}

export default NomadList;
