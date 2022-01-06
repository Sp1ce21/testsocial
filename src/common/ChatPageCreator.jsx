import Chat from "../components/Chat/Chat";
import {
    Route,
} from "react-router-dom";

function lastNameCreator(name) {
    var n = name.split("/");
    return n[n.length - 1];
}

function ChatPageCreator(props) {
    return (
        <Route path={window.location.pathname} render={() => <Chat channelsLink={lastNameCreator(window.location.pathname)} />} />
    );
}

export default ChatPageCreator;
