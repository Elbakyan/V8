import React, {Component, Fragment} from "react";
import '../User/message/Message.scss';
import './GetRequest.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetRequst} from "../../redux/GetRequest/action";
import {GetStatus, SendMessage} from "../../redux/message/action";



class GetRequest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            dialog: '',
            scroll: true,
            cou:0
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
        return(
            <div className='message_users_component'>
                <div className="message_users">
                    <div className="respondent">
                        <ul className='users' >
                            {
                                this.props.request.request.map((el,i)=>{
                                    return(
                                        <Link key={i} onClick={this.Send}
                                              to={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog + '/' + el.user.id
                                                  :'user/account/request/'+el.message[0].dialog + '/' + el.user.id}

                                        >
                                            <ul className={'R__link'} data-id={el.user.id} data-dialog={el.message[0].dialog}>
                                                <li>{el.user.name}{el.user.surname}</li>
                                                <li><img src={el.user.img} alt=""/></li>
                                            </ul>
                                        </Link>
                                    )
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
                                        'user/account/request/'+el.message.dialog + '/' + el.user.id
                                    }>
                                        <div className="message" >
                                            <ul ref={this.scrollRef}>
                                                <li className='get_message' >
                                                    <ul className='message_request_style' >
                                                        <li>1111</li>
                                                    </ul>
                                                </li>
                                                {
                                                    el.message.map((mess,i)=>{
                                                        return(
                                                            <li className={'message_request ' + this.props.score.score.id || this.props.user.id === mess.send?'send_message':'get_message'}>
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

                                                                    <div className='message_text'>
                                                                        {
                                                                            mess.message.message? <li>{ mess.message.message}</li> :''
                                                                        }
                                                                    </div>

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
