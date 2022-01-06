import s from './Channels.module.css';
import messages from '../../../../assets/images/FriendsMenu/messages.png';
import NavLinkCreator from '../../../../common/NavLinkCreator';
 
function Channels(props) {
    return (
        <div className={s.channels}>

            <div className={s.button}>
                <img src={messages} alt="messages" />
                <div className={s.text}>All treads</div>
            </div>

            <div className='row'>
                <div className={s.channelsTitle}>Channels</div>
                <div className={s.numbers}>{props.channels.length}</div>
            </div>

            <div className={s.channelsList}>
                {props.channels.map( u => <NavLinkCreator adress={u.link} text={u.text} setCurrentLink={props.setCurrentLink}/>)}
            </div>

        </div>
    );
}

export default Channels;
