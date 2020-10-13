import React, { Component } from 'react';
import {connect} from "react-redux";

class Message extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>message</div>
        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;