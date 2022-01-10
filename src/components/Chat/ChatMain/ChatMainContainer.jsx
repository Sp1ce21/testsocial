import { connect } from "react-redux";
import ChatMain from "./ChatMain";
import {setCurrentFriend} from '../../../redux/friends-reducer';

function ChatMainContainer(props) {
    return ( 
            <ChatMain friends={props.friends} setCurrentFriend={props.setCurrentFriend}/>
    );
}

const mapStateToProps = (state) => ({
    friends: state.friends.friends,
})

export default connect(mapStateToProps, {setCurrentFriend})(ChatMainContainer);
