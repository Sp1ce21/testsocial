import ProfileCreator from '../../../../common/ProfileCreator';
import s from './Friends.module.css';
import img1 from '../../../../assets/images/FriendsMenu/img1.png'

function Friends(props) {
    return (
        <div className={s.friends}>

            <div className='row'>
                <div className={s.channelsTitle}>Friends</div>
                <div className={s.numbers}>{props.friends.length}</div>
            </div>

            {props.friends.map( u => <ProfileCreator isOnline={u.isOnline} image={u.image} fullName={u.fullName} link={u.link}/>)}

        </div>
    );
}

export default Friends;
