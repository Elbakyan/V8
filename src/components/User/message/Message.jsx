
import React, {Component} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {Redirect, Route, Switch} from "react-router-dom";
import {GetDialogId, GetId, GetMessage, GetStatus} from "../../../redux/message/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRedoAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:false,
            dialog: '',
            redirect:false,
            RedirectLink: '',
            RespondentUser:true,
            RespondentStore:true,
            reloadPos:false,
            usersShow:false
        }
    }

    componentDidMount() {
        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());
        this.props.dispatch(GetMessage(this.props.id))
        this.props.dispatch(GetStatus(this.props.id))
        window.addEventListener('scroll',(e)=>{
            let scrollTop = document.body.scrollHeight
            if(window.scrollY >= 200){
                this.setState({
                    reloadPos:true
                })
            }else{
                this.setState({
                    reloadPos:false
                })
            }
        })
    }

    Message = (e) => {
        this.setState({
            link:e.target.id,
            redirect: true,
            usersShow:!this.state.usersShow
        })
        this.props.dispatch(GetId(e.target.dataset.id))
        this.props.dispatch(GetDialogId(e.target.dataset.dialog))
        this.props.dispatch(GetStatus(e.target.dataset.dialog))
        this.props.dispatch(GetMessage(this.props.id))
        console.log(e.target.dataset.dialog)


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

    Clear = (e)=>{
        let data = new FormData();
        data.append('send_id',this.props.user.id);
        data.append('get_id',e.target.dataset.id);
        POST(Url.deliteMessage,data).then(res => {
            if (res.status) {
                this.props.dispatch(GetMessage(this.props.user.id))
                this.setState({
                    redirect: true,
                })
            }
        })
        return true
    }
    componentWillUnmount() {
        this.setState({
            redirect: false
        })
    }

    render() {


        return(
            <div className='message_users_component'>

                <div className="message_users">
                    {
                        this.state.redirect?<Redirect to={this.state.link?this.state.link:'/user/account/persional/'} />:''
                    }
                    <div className={this.state.usersShow?"respondent showUser":"respondent"}>
                        <div className='respondent__users' data-user={1} onClick={this.openRespondents}>
                            <span data-user={1} className={this.state.RespondentUser? 'active user_span' : 'user_span'}>Օգտատեր</span>
                            {
                                this.state.RespondentUser  && this.props.message.data.user?this.props.message.data.user.map((data,i) => {

                                    if(data && +JSON.parse(this.props.message.data.message.user[i].delite)[0] !== +this.props.user.id){

                                        let active = this.props.message.data.message.user? window.location.href.split('/')[6] === this.props.message.data.message.user[i].dialog_id: ''

                                            return (
                                                <Respondent
                                                    Clear={this.Clear}
                                                    key={i}
                                                    id={'/user/account/persional/'+this.props.message.data.message.user[i].dialog_id}
                                                    active={active}
                                                    dialogId={this.props.message.data.message.user[i].dialog_id}
                                                    data={data}
                                                    onClick={this.Message}
                                                    status={this.props.message.data.message.user[i].status}
                                                    time={this.props.message.data.message.user[i].time}
                                                    userId={this.props.id}
                                                    send={this.props.message.data.message.user[i].send_id}
                                                    user={this.props.user.id}
                                                />
                                            )
                                    }
                                }): ''
                            }
                        </div>
                
                        <div className='respondent__stores' data-store={1} onClick={this.openRespondents}>
                            <span data-store={1} className={this.state.RespondentStore? 'active user_span' : 'user_span'}>Գործնկեր</span>
                            {
                                this.state.RespondentStore && this.props.message.data.score?this.props.message.data.score.map((data,i) => {

                                    if (data && +JSON.parse(this.props.message.data.message.score[i].delite)[0] !== +this.props.user.id){
                                        let active = window.location.href.split('/')[6] === this.props.message.data.message.score[i].dialog_id;
                                            return (
                                                <Respondent
                                                    Clear={this.Clear}
                                                    key={i}
                                                    id={'/user/account/persional/'+this.props.message.data.message.score[i].dialog_id}
                                                    dialogId={this.props.message.data.message.score[i].dialog_id}
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
                            <div className='message_reload message_reload__top'>
                            <span onClick={(e)=>{
                                let aa = e.target
                                e.target.classList.toggle('message_reload_button')
                                this.props.dispatch(GetMessage(this.props.id))
                                this.props.dispatch(GetStatus(this.props.message.dialog))
                                setTimeout(()=>{
                                    aa.classList.toggle('message_reload_button')
                                },1000)
                            }}>
                                <FontAwesomeIcon icon={faRedoAlt} />
                            </span>
                                <span className="users_show" onClick={()=>{
                                    this.setState({
                                        usersShow:!this.state.usersShow
                                    })
                                }}>
                                    <FontAwesomeIcon icon={faUsers} />
                                </span>
                            </div>
                        }

                
                        {
                            this.props.message.data.message.user?this.props.message.data.message.user.map((data,i) => {
                                if(data){
                                    return (
                                        data.delite[0] === this.props.id ?'':
                                            <Switch key={i}>
                                                <Route exact path={'/user/account/persional/'+data.dialog_id} >
                                                    <GetMessageClass one_message={data.message} getId={this.props.message.id} data={this.props.message.data.user[i]}/>
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
                                                    <GetMessageClass dialog={data['dialog_id']} one_message={data.message} getId={this.props.message.id} data={this.props.message.data.score[i]}/>
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