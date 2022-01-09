import s from './Chat.module.css';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMainContainer from './ChatMain/ChatMainContainer';

function Chat(props) {
    return (
        <div className={s.chatPage}>
            <div>
                <ChatHeader channelsLink={props.channelsLink} />
                <ChatMainContainer />
            </div>
            <ChatFooter />
        </div>
    );
}

export default Chat;
