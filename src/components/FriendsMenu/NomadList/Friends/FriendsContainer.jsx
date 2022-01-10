import Friends from "./Friends";
import { connect } from "react-redux";
import {switchOnline, setCurrentFriend} from '../../../../redux/friends-reducer'
function FriendsContainer(props) {
    return (
        <Friends friends={props.friends} setCurrentFriend={props.setCurrentFriend}/>
    );
}

const mapStateToProps = (state) => ({
    friends: state.friends.friends,
})

export default connect(mapStateToProps, {switchOnline, setCurrentFriend} )(FriendsContainer);
