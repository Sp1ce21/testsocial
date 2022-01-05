import s from './Channels.module.css';
import messages from '../../../../assets/images/FriendsMenu/messages.png';
import {NavLinkCrator} from '../../../../common/NavLinkCreator';
 
function Channels() {
    return (
        <div className={s.channels}>

            <div className={s.button}>
                <img src={messages} alt="messages" />
                <div className={s.text}>All treads</div>
            </div>

            <div className={s.channelsRow}>
                <div className={s.channelsTitle}>Channels</div>
                <div className={s.numbers}>{/* props... */}11</div>
            </div>

            <div className={s.channelsList}>
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'support')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
                {NavLinkCrator('/', 'general')}
            </div>

        </div>
    );
}

export default Channels;
