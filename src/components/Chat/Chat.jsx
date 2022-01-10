import s from './Chat.module.css';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMainContainer from './ChatMain/ChatMainContainer';

function Chat(props) {
    return (
        <div className={s.chatPage}>
            <ChatHeader channelsLink={props.channelsLink} />
            <ChatMainContainer />
            <ChatFooter />
        </div>
    );
}

export default Chat;
