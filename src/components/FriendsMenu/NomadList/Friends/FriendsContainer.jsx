import Friends from "./Friends";
import { connect } from "react-redux";
import {switchOnline} from '../../../../redux/friends-reducer'
function FriendsContainer(props) {
    return (
        <Friends friends={props.friends}/>
    );
}

const mapStateToProps = (state) => ({
    friends: state.friends.friends,
})

export default connect(mapStateToProps, {switchOnline} )(FriendsContainer);
