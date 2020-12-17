import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import './Message.scss';
import Respondent from "./Respondent";
import GetMessageClass from "./GetMessage";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {
    GetDialogId,
    GetId,
    GetMessage,
    GetMessageDialogId,
    GetMessageId,
    GetStatus
} from "../../../redux/message/action";
import {POST, TEST_GET} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedoAlt} from "@fortawesome/free-solid-svg-icons";




class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link:false,
            dialog: '',
            redirect:false,
            RedirectLink: '',
            reloadPos:false
        }

    }

    componentDidMount() {
        this.props.dispatch(GetMessage(this.props.message.messageId))
    }


    Message = (e) => {
        this.setState({
            link:e.target.dataset.id,
            redirect: true
        })

        this.props.dispatch(GetId(e.target.dataset.id))
        this.props.dispatch(GetStatus(this.props.message.dialog))
        this.props.dispatch(GetDialogId(e.target.dataset.dialogId))
    }

    Clear = (e)=>{
        let data = new FormData();
        data.append('send_id',this.props.message.messageId);
        data.append('get_id',e.target.dataset.id);
        POST(Url.deliteMessage,data).then(res => {
            if (res.status) {
                this.props.dispatch(GetMessage(this.props.message.messageId))
                this.setState({
                    redirect: true,
                    link: '/score/account/message/' + this.props.message.messageId
                })
            }
        })
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

    GetIdScoreList = (e) => {
        this.props.dispatch(GetMessageId(e.target.id))
        this.props.dispatch(GetMessage(e.target.id))
        let li = document.querySelectorAll(".dialog_list > li");

        li.forEach(l => {
            l.classList.remove("active")
        })
        e.target.classList.add('active')
        this.setState({
            changeMessage: true,
            link:'/score/account/message/' + e.target.id
        })

    }
    componentWillUnmount() {
        this.setState({
            redirect: false,
            changeMessage: false,
            link: ''
        })
    }

    render() {
        let myId =  this.props.message.messageId;
        return(
            <Fragment>
                {
                    this.state.changeMessage && this.state.link? <Redirect to={this.state.link} />: ''
                }
                <ul className='dialog_list'>
                    {
                        this.props.score.score.id?
                            <li id={this.props.score.score.id} onClick={this.GetIdScoreList}>{this.props.score.score.data.name}</li>:''
                    }
                    {
                        this.props.score.scoreList.map((res,i) => {
                            return (
                                <li key={res.id} id={res.id} onClick={this.GetIdScoreList}>
                                    {res.name}
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='message_users_component'>

                    <div className="message_users">
                        {
                            this.state.redirect?<Redirect to={this.state.link?this.state.link:''} />:''
                        }
                        <div className="respondent">
                            {
                                this.props.message.data.score?
                                    this.props.message.data.score.map((res,i) => {
                                        let active = this.props.message.data.message.score? window.location.href.split('/')[7] == this.props.message.data.message.score[i].dialog_id: ''

                                        if(+JSON.parse(this.props.message.data.message.score[i].delite)[0] !== +this.props.message.messageId){
                                            return(
                                                <Respondent
                                                    Clear={this.Clear}
                                                    key={i}
                                                    id={'/score/account/message/' + this.props.message.messageId + '/' + this.props.message.data.message.score[i].dialog_id}
                                                    data={res}
                                                    active={active}
                                                    dialogId={this.props.message.data.message.score[i].dialog_id}
                                                    onClick={this.Message}
                                                    status={this.props.message.data.message.score[0].status}
                                                    time={this.props.message.data.message.score[0].time}
                                                    userId={this.props.message.id}
                                                    send={this.props.message.data.score[i].id}
                                                />
                                            )
                                        }


                                    })
                                    :''
                            }

                        </div>

                        <div className="message">
                            <div className='message_reload' ref={el=>this.reload=el}>
                                <span onClick={(e)=>{
                                    let aa = e.target
                                    e.target.classList.toggle('message_reload_button')
                                    this.props.dispatch(GetStatus(this.props.message.dialog))
                                    this.props.dispatch(GetMessage(this.props.message.messageId))
                                    setTimeout(()=>{
                                        aa.classList.toggle('message_reload_button')
                                    },1000)
                                }}>
                                    <FontAwesomeIcon icon={faRedoAlt} />
                                </span>
                            </div>
                            {
                                this.props.message.data.message.score?this.props.message.data.message.score.map((data,i) => {
                                    return (
                                        <Switch key={i}>
                                            <Route path={'/score/account/message/' + this.props.message.messageId + '/' + data['dialog_id']}>
                                                <GetMessageClass one_message={data.message} id={myId} id1={myId == data['send_id']?data['get_id']:data['send_id']} i/>
                                            </Route>
                                        </Switch>
                                    )
                                }):''
                            }

                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

const MapStateToProps = state => state;
const MainMessage = connect(MapStateToProps)(Message)

export default MainMessage;