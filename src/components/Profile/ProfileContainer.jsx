import { connect } from "react-redux";
import Profile from "./Profile";
import {setSwitchProfile} from "../../redux/friends-reducer"

function profileContainer(props) {

    let profile;

    if(props.currentFriend) {
        profile = props.friends[props.currentFriend]
    }
    else{
        profile = props.friends[0]
    }


    return ( 
            <Profile isProfile={props.isProfile} setSwitchProfile={props.setSwitchProfile} profile={profile}/>
    );
}

const mapStateToProps = (state) => ({
    currentFriend: state.friends.currentFriend,
    isProfile: state.friends.isProfile,
    friends: state.friends.friends,
})

export default connect(mapStateToProps, {setSwitchProfile})(profileContainer);
