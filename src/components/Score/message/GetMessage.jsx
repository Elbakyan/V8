import React, {Component} from "react";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {SendMessage, GetMessage, GetId, GetStatus} from "../../../redux/message/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSync} from "@fortawesome/free-solid-svg-icons";

class GetMessageClass extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ticking:false,
            position:0,
            count:this.props.one_message.length - 1
        }
    }
    componentDidMount() {
// <<<<<<< HEAD:src/components/User/message/GetMessage.jsx
        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());
        // this.props.dispatch(GetMessage(32))
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
        setTimeout(()=>{
            console.log('score',this.props.score.scoreList)
        },1000)



        this.scrollRef.scrollTop = this.scrollRef.scrollHeight;
        // document.addEventListener('scroll', (e) => {
        //    let reload = document.querySelector(".reload");
        //    let top = 100;
        //    if(window.pageYOffset > 50){
        //        reload.style.top =  0;
        //    }else{
        //        reload.style.top =  '110px';
        //    }
        // })
    }

    Message = (e) => {
        e.preventDefault();
        this.props.dispatch(GetStatus(this.props.message.dialog))
        let data = new FormData(e.target);
        console.log(Array.from(data))
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
        },500)
    }

    render() {

        let meso = document.querySelectorAll('.meso')
        meso.forEach(elem => {
            elem.innerHTML = elem.innerText
        })
        return (
            <div className="getMessage">
                <div className="reload">
                        <span style={this.state.styleRotate?{transform:"rotate(360deg)"}:{transform:"rotate(0deg)",transition: '0s'}}
                            onClick={(e) => {
                                this.props.dispatch(GetStatus(this.props.message.dialog))
                            this.props.dispatch(GetMessage(this.props.message.messageId))

                            this.setState({
                                styleRotate: true
                            })
                            setTimeout(() => {
                                this.setState({
                                    styleRotate: false
                                })
                            },1500)
                            this.scroll()
                        }}>
                            <FontAwesomeIcon icon={faSync} />
                        </span>
                </div>
                <div className="getMessage_users" ref={el => this.scrollRef = el} >
                    {
                        this.props.one_message.map((elem,i)=>{

                            return(
                                <div key={i} className={elem[0].id == this.props.user.id?'block_message block_message_user2':'block_message block_message_user1'} >
                                    {
                                        elem[0].message == ""? '':
                                            <div>
                                                <span>{elem[0].time}</span>
                                                <span className='meso'>{elem[0].message}</span>
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
                        <textarea className="message_text" onKeyDown={this.onEnterPress} name="message" ref={el => this.textareaRef = el}></textarea>
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
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainGetMessage = connect(MapStateToProps)(GetMessageClass)

export default MainGetMessage;