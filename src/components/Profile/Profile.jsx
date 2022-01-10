import s from './Profile.module.css';
import facebook from '../../assets/images/Profile/facebook.png';
import instagram from '../../assets/images/Profile/instagram.png';
import inS from '../../assets/images/Profile/in.png';
import twitter from '../../assets/images/Profile/twitter.png';
import arrow from '../../assets/images/Profile/arrow.png';

function Profile(props) {
    return (
        <div className={s.profile}>
            <div className={s.switch} onClick={() => { props.setSwitchProfile() }}>
                <div className={s.arrow}>
                    <span className={props.isProfile ? s.animationFirst : s.first}></span>
                    <span className={props.isProfile ? s.animationSecond : s.second}></span>
                </div>
            </div>
            <div className={props.isProfile ? s.profileBlock : s.displayNone}>
                <img src={props.profile.image} alt="image" className={s.image} />
                <div className={s.container}>
                    <div className={s.row}>
                        <div className={s.name}>{props.profile.fullName}</div>
                        {props.profile.isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
                    </div>
                    <div className={s.status}>UI Designer</div>
                    <div className={s.row + " " + s.images}>
                        <div className={s.background}><img src={facebook} alt="facebook" /></div>
                        <div className={s.background}><img src={twitter} alt="twitter" /></div>
                        <div className={s.background}><img src={instagram} alt="instagram" /></div>
                        <div className={s.background}><img src={inS} alt="in" /></div>
                    </div>
                    <div className={s.row + ' ' + s.messageContainer}>
                        <button className={s.message}>Message</button>
                        <div className={s.arrowContainer}>
                            <img className={s.profileArrow} src={arrow} alt='arrow' />
                        </div>
                    </div>
                    <div className={s.block}>
                        <div className={s.title}>Username</div>
                        <div className={s.value}>@amilia_lu</div>
                    </div>
                    <div className={s.block}>
                        <div className={s.title}>Email</div>
                        <div className={s.value}>a-luna@gmail.com</div>
                    </div>
                    <div className={s.block}>
                        <div className={s.title}>Skype</div>
                        <div className={s.value}>amiluna</div>
                    </div>
                    <div className={s.block}>
                        <div className={s.title}>Timezone</div>
                        <div className={s.value}>2:21 PM Local time</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
