import React, {Component, Fragment} from "react";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {SendMessage, GetMessage, GetId, GetStatus} from "../../../redux/message/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleRight, faRedoAlt, faSync} from "@fortawesome/free-solid-svg-icons";

class GetMessageClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ticking:false,
            reloadPos:false,
            position:0,
            count:this.props.one_message.length - 1
        }
    }

    componentDidMount() {
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
        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());
        this.setState({
            count:this.props.one_message.length - 1
        })
        POST(Url.messageId,data).then(res => {

            this.props.dispatch(GetStatus(res))
            if (res.id != res.send_id){
                this.props.dispatch(GetId(res.send_id))
            }
            if (res.id != res.get_id){
                this.props.dispatch(GetId(res.get_id))
            }
        })
        this.scrollRef.scrollTop = this.scrollRef.scrollHeight;
        this.scrollRef.scrollTop = this.scrollRef.scrollHeight;

    }

    Message = (e) => {
        e.preventDefault();
        this.props.dispatch(GetStatus(this.props.message.dialog))
        let data = new FormData(e.target);
        if (this.textareaRef.value.trim().length > 0){

            this.props.dispatch(SendMessage(data))
            this.props.dispatch(GetStatus(e.target.dataset.dialog))
        }
        this.textareaRef.value = '';

        this.scroll()


    }
    onEnterPress = (e) => {
        this.props.dispatch(GetStatus(this.props.user.id))
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.formRef);
            if (this.textareaRef.value.trim().length > 0){
                this.props.dispatch(SendMessage(data))
                this.props.dispatch(GetStatus(e.target.dataset.dialog))
            }

            this.textareaRef.value = ''
            this.scroll()
        }
    }

    scroll = (e)=>{
        let scrol = setInterval(()=>{
            if(this.props.one_message.length != this.state.count){
                this.scrollRef.scrollTop = this.scrollRef.scrollHeight;
                this.setState({
                    count:this.props.one_message.length
                })
            }else{
                clearInterval(scrol)
            }
        },400)
    }

    render() {
        return (
            <div className="getMessage__user">
                <div className="getMessage_users" ref={el => this.scrollRef = el} >

                    {
                        this.props.one_message.map((elem,i)=>{

                            return(
                                <div key={i} className={elem[0].id == this.props.user.id?'block_message block_message_user2':'block_message block_message_user1'} >
                                    {
                                        elem[0].message == ""? '':
                                            <div>
                                                <span>{elem[0].time}</span>
                                                <span className='meso'>{
                                                    elem[0].message.split('/*/').map((el,i)=>{
                                                        return(
                                                            <Fragment key={i}>
                                                                {el} <br/>
                                                            </Fragment>
                                                            )

                                                    })
                                                }</span>
                                            </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="smaylik">

                </div>
                <div className="send_message">
                    <form onSubmit={this.Message} ref={el => this.formRef = el}>
                        <label>
                            <textarea className="message_text" data-dialog={this.props.dialog} onKeyDown={this.onEnterPress} name="message" ref={el => this.textareaRef = el}></textarea>
                            <div className="message_send_buttonMobile">
                                <button type='submit'><FontAwesomeIcon icon={faChevronCircleRight} /></button>
                            </div>
                        </label>
                        <input type="hidden" name='send_id' value={this.props.user.id }/>
                        <input type="hidden" name='get_id' value={this.props.getId}/>
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
                        this.state.reloadPos?<div className='message_reload message_reload__bottom' >

                            <span onClick={(e)=>{
                                let aa = e.target
                                e.target.classList.toggle('message_reload_button')
                                this.props.dispatch(GetMessage(this.props.user.id))
                                this.props.dispatch(GetStatus(this.props.message.dialog))
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
        )
    }
}

const MapStateToProps = state => state;
const MainGetMessage = connect(MapStateToProps)(GetMessageClass)

export default MainGetMessage;