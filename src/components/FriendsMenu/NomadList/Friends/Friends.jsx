import ProfileCreator from '../../../../common/ProfileCreator';
import s from './Friends.module.css';

function Friends(props) {
    return (
        <div className={s.friends}>

            <div className='row'>
                <div className={s.channelsTitle}>Friends</div>
                <div className={s.numbers}>{props.friends.length}</div>
            </div>

            {props.friends.map(u => <ProfileCreator id={u.id} isOnline={u.isOnline} image={u.image} fullName={u.fullName} link={u.link} 
            setCurrentFriend={props.setCurrentFriend} />)}

        </div>
    );
}

export default Friends;
