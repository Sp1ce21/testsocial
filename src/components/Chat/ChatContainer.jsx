import { connect } from "react-redux";
import ChatPageCreator from "../../common/ChatPageCreator";
import {
    Switch,
} from "react-router-dom";

function ChatContainer(props) {
    return ( 
        <Switch>
            <ChatPageCreator channelsLink={props.currentLink} />
        </Switch>
    );
}

const mapStateToProps = (state) => ({
    currentLink: state.channels.currentLink
})

export default connect(mapStateToProps, {})(ChatContainer);
