import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {GetId, GetMessage} from "../../redux/message/action";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:false,
            dialog: '',
            redirect:false,
            RedirectLink: ''
        }

    }

    componentDidMount() {
        this.props.dispatch(GetMessage())
        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());

        POST(Url.messageId,data).then(res => {
            if (res.id != res.send_id){
                this.props.dispatch(GetId(res.send_id))
            }
            if (res.id != res.get_id){
                this.props.dispatch(GetId(res.get_id))
            }
        })

    }

    Message = (e) => {
        this.setState({
            link:e.target.id,
            redirect: true
        })
        setTimeout(() => {
            this.setState({
                redirect: false
            })
        },1000)
        console.log(e.target.dataset.id)
        this.props.dispatch(GetId(e.target.dataset.id))
    }


    render() {
        return(
            <div className="message_users">
                {
                    this.state.redirect?<Redirect to={this.state.link?this.state.link:'/user/account/persional/'+this.props.message.message[0].dialog_id} />:''
                }
                <div className="respondent">
                    {
                        this.props.message.user.map((data,i) => {
                            let active = this.props.message.message[i].dialog_id == window.location.pathname.split('/').pop()
                            return (
                                    <Respondent key={i}  id={'/user/account/persional/'+this.props.message.message[i].dialog_id} active={active} data={data} onClick={this.Message}/>
                            )
                        })
                    }
                </div>

                <div className="message">
                    {
                        this.props.message.message.map((data,i) => {
                            return (
                                <Switch key={i}>
                                    <Route exact path={'/user/account/persional/'+this.props.message.message[i].dialog_id}>
                                        <GetMessageClass one_message={data.message}/>
                                    </Route>
                                </Switch>
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