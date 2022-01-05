import Channels from "./Channels";
import { connect } from "react-redux";

function ChannelsContainer(props) {
    return (
        <Channels channels={props.channels}/>
    );
}

const mapStateToProps = (state) => ({
    channels: state.channels.channels,
})

export default connect(mapStateToProps, {} )(ChannelsContainer);
