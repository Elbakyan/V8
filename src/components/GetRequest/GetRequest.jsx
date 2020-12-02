import React, {Component, Fragment} from "react";
import '../User/message/Message.scss';
import './GetRequest.scss';
import {connect} from "react-redux";
import {Link,Redirect} from "react-router-dom";
import {Route} from "react-router";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetRequst} from "../../redux/GetRequest/action";
import {GetStatus, SendMessage} from "../../redux/message/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";



class GetRequest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            dialog: '',
            scroll: true,
            cou:0,
            redirect:false
        }
        this.textareaRef = React.createRef()
        this.formRef = React.createRef()
        this.scrollRef = React.createRef()
    }
    componentDidMount() {
        let id = window.location.pathname.split('/').pop();
        let dialog = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
        this.setState({
            id: id,
            dialog: dialog
        })
        setTimeout(() => {
            // this.scroll();
        },1000)

    }

    Send = (e) => {
        this.setState({
            id: e.target.dataset.id,
            dialog: e.target.dataset.dialog
        })
        let id = e.target.dataset.id
        console.log(id)
        let data = new FormData()
        data.append('get', id);
        console.log(data)
        POST(Url.statusrequest,data).then(res=>{
            if(res){
                this.props.dispatch(GetRequst())
            }
        })
    }

    Message = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.sendrequest,data).then(res => {
            this.props.dispatch(GetRequst())
            this.textareaRef.current.value = ''
        })
        this.scroll();
    }

    scroll = () => {
        this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
        if(this.state.cou != 2){
            setTimeout(()=>{
                this.setState({
                    cou:++this.state.cou
                })
                this.scroll()
            },40)
        }else{
            this.setState({
                cou:0
            })
        }
    }
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.formRef.current);
            if (this.textareaRef.current.value.trim().length > 0){
                POST(Url.sendrequest,data).then(res => {
                    this.props.dispatch(GetRequst())
                    this.textareaRef.current.value = '';
                    this.scroll()
                })
            }

        }

    }
    render() {
        console.log(this.props.request)
        return(

            <div className='message_users_component'>
                {
                    this.state.redirect ? <Redirect to={this.props.user.status?'/user/account/request':'/score/account/request'} />: ''
                }
                <div className="message_users">
                    <div className="respondent">
                        <ul className='users' >
                            {
                                this.props.request.request.map((el,i)=>{
                                    console.log(el.message[0].status)
                                    if(+el.message[0].delite[0] !== +this.props.user.id){
                                        return(
                                            <Link key={i} onClick={this.Send}
                                                  to={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog + '/' + el.user.id
                                                      :'/user/account/request/'+el.message[0].dialog + '/' + el.user.id}

                                            >
                                                <ul className={'R__link'} data-id={el.user.id} data-dialog={el.message[0].dialog}>
                                                    <li><img src={el.user.img} alt=""/></li>
                                                    <li>{el.user.name} {el.user.surname}</li>

                                                    <li data-id={el.user.id} data-dialog={el.message[0].dialog} onClick={(e)=>{
                                                        let id = e.target.dataset.id
                                                        // console.log(id)
                                                        let data = new FormData()
                                                        data.append('id', id);
                                                        POST(Url.delrequest,data).then(res=>{
                                                            if(res){
                                                                this.props.dispatch(GetRequst())
                                                                this.setState({
                                                                    redirect:true
                                                                })
                                                                setTimeout(()=>{
                                                                    this.setState({
                                                                        redirect:false
                                                                    })
                                                                },500)
                                                            }
{}                                                        })
                                                    }}><FontAwesomeIcon icon={faTrashAlt} /></li>
                                                    {
                                                        +el.message[0].status?<li></li>:''
                                                    }
                                                </ul>
                                            </Link>
                                        )
                                    }

                                })
                            }
                        </ul>

                    </div>
                    <div className="get_message" >
                        {
                            this.props.request.request.map((el,i)=>{
                                return(
                                    <Route key={i} path={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog + '/' + el.user.id
                                        :
                                        '/user/account/request/'+el.message[0].dialog + '/' + el.user.id
                                    }>
                                        <div className="message" >
                                            <ul ref={this.scrollRef}>
                                                {
                                                    el.message.map((mess,i)=>{
                                                        return(
                                                            <li key={i} className={+this.props.score.score.id === +mess.send || +this.props.user.id === +mess.send?'msStyle send':'msStyle get'}>
                                                                <ul className='message_request_style' >
                                                                    {
                                                                        mess.img ||  mess.message.mark ||
                                                                        mess.message.model || mess.message.engine ||
                                                                        mess.message.year ||   mess.message.vin ||
                                                                        mess.message.new || mess.message.old || mess.message.sircle?
                                                                            <div className='message_info'>
                                                                                <div className='message_info__image'>
                                                                                    {
                                                                                        mess.img? <li><img src={mess.img} alt={mess.img} /></li> :''
                                                                                    }
                                                                                </div>

                                                                                <div className='message_info__description'>
                                                                                    {
                                                                                        mess.message.mark? <li>{mess.message.mark}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.model? <li>{mess.message.model}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.engine? <li>{mess.message.engine}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.year? <li>{mess.message.year}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.vin? <li>VIN:({mess.message.vin})</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.new? <li>{'Նոր'}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.old? <li>{'Օգտագործված'}</li> :''
                                                                                    }
                                                                                    {
                                                                                        mess.message.sircle? <li>{ mess.message.sircle}</li> :''
                                                                                    }
                                                                                </div>

                                                                            </div>:''
                                                                    }
                                                                    {
                                                                        mess.message.message?
                                                                            <div className='message_text'>
                                                                                    <li>{ mess.message.message}</li>
                                                                            </div>
                                                                            :''
                                                                    }
                                                                </ul>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className='send_message'>
                                                <form onSubmit={this.Message} ref={this.formRef}>
                                                    <textarea className="message_text" onKeyDown={this.onEnterPress} name="message" ref={this.textareaRef}></textarea>
                                                    <input type="hidden" name='get' value={this.state.id?this.state.id: ''}/>
                                                    <input type="hidden" name='dialog' value={this.state.dialog?this.state.dialog:''}/>
                                                    <div className="message_send_button">
                                                        <DefaultBtn
                                                            type='submit'
                                                            name='Ուղարկել'
                                                            background='#143645'
                                                            color='#ffffff'
                                                            light={30}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </Route>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// export default GetRequest
const MapStateToProps = state => state;
const MainGetRequest = connect(MapStateToProps)(GetRequest);
export default MainGetRequest ;