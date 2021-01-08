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
            scroll: true,
            cou:0
        }
        this.scrollRef = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('scroll',(e)=>{
            let scrollTop = document.body.scrollHeight
            console.log('1',window.scrollY)
            if(window.scrollY >= 200){
                this.setState({
                    reloadPos:true
                })
            }else{
                this.setState({
                    reloadPos:false
                })
            }

            console.log(scrollTop)
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
        this.scroll()

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

    Message = (e) => {
        e.preventDefault();
        this.props.dispatch(GetStatus(this.props.message.dialog))
        let data = new FormData(e.target);
        if (this.textareaRef.value.trim().length > 0){
            this.props.dispatch(SendMessage(data))
        }
        this.textareaRef.value = '';
        this.scroll()
    }
    onEnterPress = (e) => {
        this.props.dispatch(GetStatus(this.props.message.dialog))
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.formRef);
            if (this.textareaRef.value.trim().length > 0){
                this.props.dispatch(SendMessage(data))
            }
            this.textareaRef.value = ''
            this.scroll()
        }

    }


    render() {
        let meso = document.querySelectorAll('.meso')
        meso.forEach(elem => {
            elem.innerHTML = elem.innerText
        })
        return (
            <div className="getMessage">
                <div className="getMessage_users" ref={this.scrollRef} >
                    {
                        this.props.one_message.map((elem,i)=>{

                            return(
                                <div key={i} className={elem[0].id != this.props.id?'block_message block_message_user2':'block_message block_message_user1'} >
                                    {
                                        elem[0].message == ""? '':
                                            <div>
                                                <span>{elem[0].time}</span>
                                                <span className='meso'>{
                                                    elem[0].message.split((el,i)=>{
                                                        return(
                                                            <Fragment>
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

                <div className="send_message">
                    <form onSubmit={this.Message} ref={el => this.formRef = el}>
                        <label>
                            <textarea className="message_text" onKeyDown={this.onEnterPress} name="message" ref={el => this.textareaRef = el}></textarea>
                            <div className="message_send_buttonMobile">
                                <button type='submit'><FontAwesomeIcon icon={faChevronCircleRight} /></button>
                            </div>
                        </label>
                        <input type="hidden" name='send_id' value={this.props.id}/>
                        <input type="hidden" name='get_id' value={this.props.id1}/>

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
                                this.props.dispatch(GetMessage(this.props.id))
                                this.props.dispatch(GetStatus(this.props.message.dialog))
                                this.scroll();
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