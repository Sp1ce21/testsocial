import s from './Chat.module.css';
import ChatHeader from './ChatHeader/ChatHeader';

function Chat(props) {
    return (
        <div className={s.chatPage}>
            <ChatHeader channelsLink={props.channelsLink}/>
        </div>
    );
}

export default Chat;
