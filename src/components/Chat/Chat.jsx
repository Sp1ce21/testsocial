import s from './Chat.module.css';

function Chat(props) {
    return (
        <div className={s.chatPage}>
            {props.channelsLink}
        </div>
    );
}

export default Chat;
