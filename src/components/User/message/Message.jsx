
import React, {Component} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Redirect, Route, Switch} from "react-router-dom";
import { GetId, GetMessage} from "../../../redux/message/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare, faMapMarkerAlt, faRedoAlt} from "@fortawesome/free-solid-svg-icons";



class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:false,
            dialog: '',
            redirect:false,
            RedirectLink: '',
            RespondentUser:true,
            RespondentStore:true

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
    openRespondents = (e)=>{
        if(e.target.dataset.user){
            this.setState({
                RespondentUser:!this.state.RespondentUser
            })
        }
        if(e.target.dataset.store){
            this.setState({
                RespondentStore:!this.state.RespondentStore
            })
        }
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
        console.log('888',this.props.message)
        console.log('w',window.location.href.split('/')[6])
        return(
            <div className='message_users_component'>
                <div className='message_reload'>
                    <span onClick={(e)=>{
                        let aa = e.target
                        e.target.classList.toggle('message_reload_button')
                        this.props.dispatch(GetMessage(this.props.id))
                        setTimeout(()=>{
                            aa.classList.toggle('message_reload_button')
                        },1000)
                    }}>
                        <FontAwesomeIcon icon={faRedoAlt} />
                    </span>
                </div>
                <div className="message_users">
                    {
                        this.state.redirect?<Redirect to={this.state.link?this.state.link:'/user/account/persional/'} />:''
                    }
                    <div className="respondent">
                        <div className='respondent__users' data-user={1} onClick={this.openRespondents}>
                            <span data-user={1}>Օգտատեր</span>
                            {
                                this.state.RespondentUser  && this.props.message.data.user?this.props.message.data.user.map((data,i) => {
                
                                    if(data){
                                        let active = window.location.href.split('/')[6] == this.props.message.data.message.user[i].dialog_id
                                        return (
                                            <Respondent
                                                key={i}
                                                id={'/user/account/persional/'+this.props.message.data.message.user[i].dialog_id}
                                                active={active}
                                                data={data}
                                                onClick={this.Message}
                                                status={this.props.message.data.message.user[i].status}
                                                time={this.props.message.data.message.user[i].time}
                                                userId={this.props.id}
                                                send={this.props.message.data.message.user[i].send_id}
                                            />
                                        )
                                    }
                
                
                                }): ''
                            }
                        </div>
                
                        <div className='respondent__stores' data-store={1} onClick={this.openRespondents}>
                            <span data-store={1}>Գործնկեր</span>
                            {
                                this.state.RespondentStore && this.props.message.data.score?this.props.message.data.score.map((data,i) => {
                
                                    if (data){
                                        let active = window.location.href.split('/')[6] == this.props.message.data.message.score[i].dialog_id
                                        return (
                                            <Respondent
                                                key={i}
                                                id={'/user/account/persional/'+this.props.message.data.message.score[i].dialog_id}
                                                active={active}
                                                data={data}
                                                onClick={this.Message}
                                                status={this.props.message.data.message.score[i].status}
                                                time={this.props.message.data.message.score[i].time}
                                                userId={this.props.id}
                                                send={this.props.message.data.message.score[i].send_id}
                                            />
                                        )
                                    }
                
                
                                }): ''
                            }
                        </div>
                
                    </div>
                
                    <div className="message">
                
                        {
                            this.props.message.data.message.user?this.props.message.data.message.user.map((data,i) => {
                                console.log('mess',data)
                                if(data){
                                    return (
                                        data.delite[0] === this.props.id ?'':
                                            <Switch key={i}>
                                                <Route exact path={'/user/account/persional/'+data.dialog_id}>
                                                    <GetMessageClass one_message={data.message} getId={data.send_id != this.props.user.id?data.send_id:data.get_id}/>
                                                </Route>
                                            </Switch>
                                    )
                                }

                            }):''
                        }
                        {
                            this.props.message.data.message.score?this.props.message.data.message.score.map((data,i) => {
                                if(data){
                                    return (
                                        data.delite[0] === this.props.id ?'':
                                            <Switch key={i}>
                                                <Route exact path={'/user/account/persional/'+data.dialog_id}>
                                                    <GetMessageClass one_message={data.message} getId={data.send_id != this.props.user.id?data.send_id:data.get_id}/>
                                                </Route>
                                            </Switch>
                                    )
                                }
                
                
                            }):''
                        }
                
                    </div>
                </div>
            </div>

        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;