import { connect } from "react-redux";
import Profile from "./Profile";

function profileContainer(props) {
    return ( 
            <Profile/>
    );
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {})(profileContainer);
