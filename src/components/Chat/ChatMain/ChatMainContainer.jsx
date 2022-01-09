import { connect } from "react-redux";
import ChatMain from "./ChatMain";

function ChatMainContainer(props) {
    return ( 
            <ChatMain friends={props.friends}/>
    );
}

const mapStateToProps = (state) => ({
    friends: state.friends.friends,
})

export default connect(mapStateToProps, {})(ChatMainContainer);
