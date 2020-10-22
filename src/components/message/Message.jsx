import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {GetDialogId, GetId, GetMessage} from "../../redux/message/action";



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
        this.props.dispatch(GetId(e.target.dataset.id))
    }


    render() {
        // console.log( this.props.message.message)
        // console.log(this.props.user.id == undefined)
        return(
            <div className="message_users">
                {
                    this.state.redirect?<Redirect to={this.state.link?this.state.link:'/user/account/persional/'+this.props.message.message[0].dialog_id} />:''
                }
                <div className="respondent">
                    {
                        this.props.message.user.map((data,i) => {
                         let active = this.props.message.message[i].dialog_id == window.location.pathname.split('/').pop()
                            // if(this.props.message.message && this.props.user.id ){
                                return (
                                    this.props.message.message[i].delite[0] == this.props.user.id ?'':
                                        <Respondent
                                            key={i}
                                            id={'/user/account/persional/'+this.props.message.message[i].dialog_id}
                                            active={active}
                                            data={data}
                                            onClick={this.Message}
                                            status={this.props.message.message[i].status}
                                            time={this.props.message.message[i].time}
                                            userId={this.props.user.id}
                                            send={this.props.message.message[i].send_id}
                                        />
                                )
                            // }

                        })
                    }
                </div>

                <div className="message">
                    {
                        this.props.message.message.map((data,i) => {

                            return (
                                data.delite[0] == this.props.user.id ?'':
                                <Switch key={i}>
                                    <Route exact path={'/user/account/persional/'+this.props.message.message[i].dialog_id}>
                                        <GetMessageClass one_message={data.message} />
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