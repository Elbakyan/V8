import React, { Component } from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Link, Route} from "react-router-dom";
import {GetId} from "../../redux/message/action";

const user = [
    {
        dialog_id:1,
        text:'text',
        send_id:2,
        get_id:12,
        status:0,
        time:'10:20:30',
        link: false
    }
]

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:false
        }

    }
    Message = (e) => {
        this.setState({
            link:e.target.id
        })
        this.props.dispatch(GetId(e.target.dataset.id))
    }
    render() {
        console.log(this.props.message)
        return(
            <div className="message_users">
                <div className="respondent">
                    {
                        this.props.message.user.map((data,i) => {
                            return (
                                <Link to={this.state.link?this.state.link:'/user/account/persional/'+this.props.message.message[0].dialog_id}><Respondent id={'/user/account/persional/'+this.props.message.message[i].dialog_id} key={i} data={data} onClick={this.Message}/></Link>
                            )
                        })
                    }


                </div>

                <div className="message">
                    {
                        this.props.message.message.map((data,i) => {

                            return (
                                <Route exact path={'/user/account/persional/'+this.props.message.message[i].dialog_id}>
                                    <GetMessageClass one_message={data.message}/>
                                </Route>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;