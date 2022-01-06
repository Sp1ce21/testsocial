import Chat from "../components/Chat/Chat";
import {
    Route,
    Redirect,
} from "react-router-dom";

function lastNameCreator(name) {
    var n = name.split("/");
    return n[n.length - 1];
}

function ChatPageCreator(props) {
    console.log(window.location.pathname === '/')
    return (
        window.location.pathname !== '/' ? <Route path={window.location.pathname} render={() => <Chat channelsLink={lastNameCreator(window.location.pathname)} />} /> : <Redirect to="/channels/global" />
    );
}

export default ChatPageCreator;
