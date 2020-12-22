import React, {Component, Fragment} from "react";
import '../User/message/Message.scss';
import './GetRequest.scss';
import {connect} from "react-redux";
import {Link, NavLink, Redirect} from "react-router-dom";
import {Route} from "react-router";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetRequst} from "../../redux/GetRequest/action";
import {GetMessage, GetStatus, SendMessage} from "../../redux/message/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faRedoAlt} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import ReqMessage from "./myScroll";



class GetRequest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            dialog: '',
            scroll: true,
            cou:0,
            redirect:false,
            interval:false,
            reloadPos:false,
            count:0
        }
        this.textareaRef = React.createRef()
        this.formRef = React.createRef()
    }
    componentDidMount() {
        let id = window.location.pathname.split('/').pop();
        let dialog = window.location.pathname.split('/')[window.location.pathname.split('/').length - 2];
        this.setState({
            id: id,
            dialog: dialog,
            interval: true
        })

        window.addEventListener('scroll',this.scrl)
    }
    scrl = (e)=>{
        if(window.scrollY >= 200){
            this.setState({
                reloadPos:true
            })
        }else{
            this.setState({
                reloadPos:false
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrl)

        // console.log(window.onscroll)
    }

    Send = (e) => {
        this.setState({
            id: e.target.dataset.id,
            dialog: e.target.dataset.dialog
        })
        let id = e.target.dataset.id
        let data = new FormData()
        data.append('get', id);
        POST(Url.statusrequest,data).then(res=>{
            if(res){
                this.props.dispatch(GetRequst())
            }
        })

        if(e.target.dataset.scroll){
            this.scroll()
        }

    }

    Message = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.sendrequest,data).then(res => {
            this.props.dispatch(GetRequst())
            this.textareaRef.current.value = ''
        })
        let status = new FormData()
        status.append('get', this.state.id)
        data.append('get', status);
        POST(Url.statusrequest,data).then(res=>{
            if(res){
                this.props.dispatch(GetRequst())
            }
        })
        this.scroll();
    }

    scroll = () => {
        setTimeout(()=>{
            let bar = document.querySelector('.scroll_bar'+this.state.id)
            bar.scrollTop = bar.scrollHeight
            console.log(bar)
            if(this.state.count != 1){
                setTimeout(()=>{
                    this.setState({
                        count:++this.state.count
                    })
                    this.scroll()
                },40)
            }else{
                this.setState({
                    count:0
                })
            }
        },100)

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
                let status = new FormData()
                status.append('get', this.state.id)
                data.append('get', status);
                POST(Url.statusrequest,data).then(res=>{
                    if(res){
                        this.props.dispatch(GetRequst())
                    }
                })
            }

        }
    }
    render() {
        if(this.props.request.request){
            if (this.props.request.request[0] !== false){
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
                                            let id;
                                            if(this.props.score.score.status){
                                                id = this.props.score.score.id
                                            }
                                            if(this.props.user.status){
                                                id = this.props.user.id
                                            }
                                            if(+el.message[0].delite[0] !== +id){
                                                return(
                                                    <NavLink className='default_user' data-id={el.user.id} activeClassName='active_user' key={i} onClick={this.Send}
                                                             to={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog + '/' + el.user.id
                                                                 :'/user/account/request/'+el.message[0].dialog + '/' + el.user.id}

                                                    >
                                                        <ul className={'R__link' } data-scroll={1} data-id={el.user.id} data-dialog={el.message[0].dialog}>
                                                            <li className='R__link-img'><img src={el.user.img} alt=""/></li>
                                                            <li className='R__link-name'>{el.user.name} {el.user.surname}</li>

                                                            <li className='R__link-del' data-id={el.user.id} data-dialog={el.message[0].dialog} onClick={(e)=>{
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
                                                                                                                  })
                                                            }}><FontAwesomeIcon icon={faTrashAlt} /></li>
                                                            {
                                                                +el.message[el.message.length-1].status && +el.message[el.message.length-1].send != id?
                                                                    <li style={{background:'red'}}></li>:<li style={{background:'none'}}></li>
                                                            }
                                                        </ul>
                                                    </NavLink>
                                                )
                                            }
                                        })
                                    }
                                </ul>


                            </div>
                            <div className="get_message" >
                                <div className='message_reload message_reload__top'>
                                    <span onClick={(e)=>{
                                        let aa = e.target
                                        e.target.classList.toggle('message_reload_button')

                                        this.props.dispatch(GetRequst())
                                        this.scroll()
                                        setTimeout(()=>{
                                            aa.classList.toggle('message_reload_button')
                                        },1000)
                                    }}>
                                        <FontAwesomeIcon icon={faRedoAlt} />
                                    </span>
                                </div>
                                {
                                    this.props.request.request.map((el,i)=>{
                                        return(
                                            <Route key={i} path={this.props.score.score.status? '/score/account/request/'+el.message[0].dialog + '/' + el.user.id
                                                :
                                                '/user/account/request/'+el.message[0].dialog + '/' + el.user.id
                                            }>
                                                <div className="message" >

                                                    <ul className={'scroll_bar'+this.state.id}>
                                                        {
                                                            el.message.map((mess,i)=>{
                                                                return(
                                                                    <div key={i} className={+this.props.score.score.id === +mess.send || +this.props.user.id === +mess.send?'msStyle send':'msStyle get'}>
                                                                        <ul className='message_request_style' >
                                                                            {
                                                                                mess.img ||  mess.message.mark ||
                                                                                mess.message.model || mess.message.engine ||
                                                                                mess.message.year ||   mess.message.vin ||
                                                                                mess.message.new || mess.message.old || mess.message.sircle?
                                                                                    <div className='message_info'>

                                                                                        <div className='message_info__description'>
                                                                                            {
                                                                                                mess.message.mark?
                                                                                                    <h2>Անհրաժեշտ է</h2>:''
                                                                                            }
                                                                                            {
                                                                                                mess.message.mark && mess.message.model || mess.message.mark?
                                                                                                    <li>
                                                                                                        {mess.message.mark} {mess.message.model} -ի
                                                                                                        {
                                                                                                            mess.message.message?
                                                                                                                <div className='message_request'>
                                                                                                                        {
                                                                                                                            mess.message.message.split('/*/').map((el,i)=>{
                                                                                                                                return(
                                                                                                                                    <Fragment key={i}>
                                                                                                                                        {el} <br/>
                                                                                                                                    </Fragment>
                                                                                                                                )
                                                                                                                            })
                                                                                                                        }
                                                                                                                </div>
                                                                                                                :''
                                                                                                        }

                                                                                                    </li> :''
                                                                                            }

                                                                                            {
                                                                                                mess.message.engine && mess.message.year || mess.message.year || mess.message.engine?
                                                                                                    <li>
                                                                                                        <p>{mess.message.year?mess.message.year+'Թ,':''}  {mess.message.engine?mess.message.engine +'Լ':''}</p>
                                                                                                    </li> :''
                                                                                            }
                                                                                            {

                                                                                            }
                                                                                            {
                                                                                                mess.message.vin?
                                                                                                    <li>
                                                                                                        {/*<p>*/}
                                                                                                            <h3>VIN:</h3>{mess.message.vin}
                                                                                                        {/*</p>*/}
                                                                                                    </li> :''
                                                                                            }
                                                                                            {
                                                                                                mess.message.code?
                                                                                                    <li>
                                                                                                        {/*<p>*/}
                                                                                                            <h3>դետալի կոդ</h3> {mess.message.code}
                                                                                                        {/*</p>*/}
                                                                                                    </li>:''
                                                                                            }
                                                                                            {
                                                                                                +mess.message.new && +mess.message.old?
                                                                                                    <li>
                                                                                                        Խնդրում եմ առաջարկել,  նոր կամ <br/>օգտագործած պահեստամասեր
                                                                                                    </li> :''
                                                                                            }
                                                                                            {
                                                                                                +mess.message.new && !+mess.message.old?
                                                                                                    <li>
                                                                                                        Խնդրում եմ առաջարկել, միայն նոր պահեստամասեր
                                                                                                    </li> :''
                                                                                            }
                                                                                            {
                                                                                                !+mess.message.new && +mess.message.old?
                                                                                                    <li>
                                                                                                        Խնդրում եմ առաջարկել, միայն օգտագործած պահեստամասեր
                                                                                                    </li> :''
                                                                                            }
                                                                                        </div>
                                                                                        <div className='message_info__image'>
                                                                                            {
                                                                                                mess.img? <li><img src={mess.img} alt={mess.img} /></li> :''
                                                                                            }
                                                                                        </div>
                                                                                    </div>:''
                                                                            }
                                                                            {
                                                                                mess.message.message && !mess.message.mark?
                                                                                       <div className='message_request-text'>
                                                                                           {
                                                                                               mess.message.message.split('/*/').map((el,i)=>{
                                                                                                   return(
                                                                                                       <Fragment key={i}>
                                                                                                           {el} <br/>
                                                                                                       </Fragment>
                                                                                                   )
                                                                                               })
                                                                                           }
                                                                                       </div>

                                                                                    :''
                                                                            }

                                                                        </ul>
                                                                    </div>
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
                                                        {
                                                            this.state.reloadPos?<div className='message_reload message_reload__bottom'>
                                                                <span onClick={(e)=>{
                                                                    let aa = e.target
                                                                    e.target.classList.toggle('message_reload_button')
                                                                    this.props.dispatch(GetRequst())
                                                                    this.scroll()
                                                                    setTimeout(()=>{
                                                                        aa.classList.toggle('message_reload_button')
                                                                    },1000)
                                                                }}>
                                                                    <FontAwesomeIcon icon={faRedoAlt} />
                                                                </span>
                                                            </div>:''
                                                        }
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
            }else{
               return (
                   <div className='message_users_component'>
                       <h2 className="message_request no__massage">
                           Դուք դեռ չեք կատարել հարցում․․․
                       </h2>
                   </div>
               )
            }
        }

    }
}

// export default GetRequest
const MapStateToProps = state => state;
const MainGetRequest = connect(MapStateToProps)(GetRequest);
export default MainGetRequest ;