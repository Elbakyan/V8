import React, {Component} from "react";
// import Button from "light-dark-button/src";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {SendMessage, GetMessage, GetId} from "../../redux/message/action";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
const user_id = 2
const message = [
    {
        id:2,
        message:'barevsdsdsdsad asdsadsa dasdsad asdasdwdsdas sdsaew asdawds dasdw asdasd wasdasdwd asdwd asdw adasw assd'
    },
    {
        id:25,
        message:'sdsd sl,ksd'
    },
    {
        id:2,
        message:'barev'
    },
    {
        id:25,
        message:'sdsd sl,ksd'
    },
    {
        id:2,
        message:'barevsdsdsdsad asdsadsa dasdsad asdasdwdsdas sdsaew asdawds dasdw asdasd wasdasdwd asdwd asdw adasw assd'
    },
    {
        id:25,
        message:'sdsd sl,ksd'
    },
    {
        id:2,
        message:'barevsdsdsdsad asdsadsa dasdsad asdasdwdsdas sdsaew asdawds dasdw asdasd wasdasdwd asdwd asdw adasw assd'
    },
    {
        id:25,
        message:'sdsd sl,ksd'
    },
    {
        id:2,
        message:'barevsdsdsdsad asdsadsa dasdsad asdasdwdsdas sdsaew asdawds dasdw asdasd wasdasdwd asdwd asdw adasw assd'
    },
    {
        id:25,
        message:'sdsd sl,ksd'
    },
]
class GetMessageClass extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let data = new FormData();
        data.append('id',window.location.pathname.split('/').pop());
        this.scrole()
        this.props.dispatch(GetMessage())
        POST(Url.messageId,data).then(res => {

            if (res.id != res.send_id){
                this.props.dispatch(GetId(res.send_id))
            }
            if (res.id != res.get_id){
                this.props.dispatch(GetId(res.get_id))
            }
        })

    }

    scrole = ()=>{
        let messageScroll = document.querySelector('.getMessage_users')
        messageScroll.scrollTop = messageScroll.scrollHeight;
    }
    Message = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);

        if (this.textareaRef.value.trim().length > 0){
            this.props.dispatch(SendMessage(data))
        }

        this.props.dispatch(GetMessage())
        this.scrole()

        this.textareaRef.value = '';
    }
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.formRef);
            if (this.textareaRef.value.trim().length > 0){
                this.props.dispatch(SendMessage(data))
            }
            this.props.dispatch(GetMessage())
            this.scrole()
            this.textareaRef.value = ''
        }
    }

    render() {
        return (
            <div className="getMessage">
                <div className="getMessage_users">
                    {
                        this.props.one_message.map((elem,i)=>{

                            return(
                                <div key={i} className={elem[0].id == this.props.user.id?'block_message block_message_user2':'block_message block_message_user1'}>
                                    {
                                        elem[0].message == ""? '':
                                            <div >
                                                <span>{elem[0].message}</span>
                                            </div>
                                    }

                                </div>
                            )
                        })
                    }
                </div>
                <div className="send_message">
                    <form onSubmit={this.Message} ref={el => this.formRef = el}>
                        <textarea className="message_text" name="message" onKeyDown={this.onEnterPress} onSubmit={this.Message} ref={el => this.textareaRef = el}></textarea>
                        <input type="hidden" name='send_id' value={this.props.user.id || ''}/>
                        <input type="hidden" name='get_id' value={this.props.message.id || ''}/>
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