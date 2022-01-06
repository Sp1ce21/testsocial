import Channels from "./Channels";
import { connect } from "react-redux";
import {setCurrentLink} from '../../../../redux/channels-reducer';

function ChannelsContainer(props) {
    return (
        <Channels channels={props.channels} setCurrentLink={props.setCurrentLink}/>
    );
}

const mapStateToProps = (state) => ({
    channels: state.channels.channels,
})

export default connect(mapStateToProps, {setCurrentLink} )(ChannelsContainer);
