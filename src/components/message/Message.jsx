import React, { Component } from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessage from "./GetMessage";

const user = [
    {
        dialog_id:1,
        text:'text',
        send_id:2,
        get_id:12,
        status:0,
        time:'10:20:30'
    }
]

class Message extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="message_users">
                <div className="respondent">
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                    <Respondent />
                </div>

                <div className="message">
                    <GetMessage />
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;