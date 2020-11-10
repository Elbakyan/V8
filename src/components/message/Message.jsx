import React, {Component} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Redirect, Route, Switch} from "react-router-dom";
import { GetId, GetMessage} from "../../redux/message/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";



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

        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());
        this.props.dispatch(GetMessage(this.props.id))
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
    openRespondent = ()=>{
        let block = document.querySelector('.respondent_user')
        let respondent = document.querySelector('.respondent')

        if(block.style.display === 'none'){
            block.style.display = 'flex'
            respondent.style.width = "88%"
        }else{
            block.style.display = 'none'
            respondent.style.width = "0%"
        }
    }

    render() {

        console.log(this.props.message)
        return(
            <div className="message_users">


                {
                    this.state.redirect?<Redirect to={this.state.link?this.state.link:'/user/account/persional/'+this.props.message.message[0].dialog_id} />:''
                }
                <div className="respondent">
                    {
                        this.props.message.data.user?this.props.message.data.user.map((data,i) => {
                            // console.log(data)
                            // console.log(this.props.message.data.message.user[i])
                            return (
                                <Respondent
                                    key={i}
                                    id={'/user/account/persional/'+this.props.message.data.message.user[i].dialog_id}
                                    // active={active}
                                    data={data}
                                    onClick={this.Message}
                                    status={this.props.message.data.message.user[i].status}
                                    time={this.props.message.data.message.user[i].time}
                                    userId={this.props.id}
                                    send={this.props.message.data.message.user[i].send_id}
                                />
                            )
                
                        }): ''
                    }
                    {
                        this.props.message.data.score?this.props.message.data.score.map((data,i) => {

                            // console.log(this.props.message.data.message.user[i])
                            return (
                                <Respondent
                                    key={i}
                                    id={'/score/account/message/'+this.props.message.data.message.score[i].dialog_id}
                                    // active={active}
                                    data={data}
                                    onClick={this.Message}
                                    // status={this.props.message.data.message.user[i].status}
                                    time={this.props.message.data.message.score[i].time}
                                    userId={this.props.id}
                                    send={this.props.message.data.message.score[i].send_id}
                                />
                            )

                        }): ''
                    }
                </div>
                
                <div className="message">

                    {
                        this.props.message.data.message.user?this.props.message.data.message.user.map((data,i) => {
                            return (
                                data.delite[0] === this.props.id ?'':
                                <Switch key={i}>
                                    <Route exact path={'/user/account/persional/'+this.props.message.data.message.user[i].dialog_id}>
                                        <GetMessageClass one_message={data.message} />
                                    </Route>
                                </Switch>
                            )
                        }):''
                    }
                    {
                        this.props.message.data.message.score?this.props.message.data.message.score.map((data,i) => {
                            return (
                                data.delite[0] === this.props.id ?'':
                                    <Switch key={i}>
                                        <Route exact path={'/score/account/message/'+this.props.message.data.message.score[i].dialog_id}>
                                            <GetMessageClass one_message={data.message} />
                                        </Route>
                                    </Switch>
                            )
                        }):''
                    }

                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;