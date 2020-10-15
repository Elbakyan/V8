import React, {Component} from "react";
// import Button from "light-dark-button/src";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {SendMessage, GetMessage} from "../../redux/message/action";
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
        this.scrole()
    }

    scrole = ()=>{
        let messageScroll = document.querySelector('.getMessage_users')
        messageScroll.scrollTop = messageScroll.scrollHeight;
    }
    Message = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        console.log(Array.from(data))
        console.log(this.props.message)
        this.props.dispatch(SendMessage(data))
        this.props.dispatch(GetMessage())
        this.scrole()

    }
    render() {
        return (
            <div className="getMessage">
                <div className="getMessage_users">
                    {
                        this.props.one_message.map((elem,i)=>{
                            return(
                                <div key={i} className={elem[0].id == this.props.user.id?'block_message block_message_user1':'block_message block_message_user2'}>
                                    <div >
                                        <span>{elem[0].message}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="send_message">
                    <form onSubmit={this.Message}>
                        <textarea className="message_text" name="message" ></textarea>
                        <input type="hidden" name='send_id' value={this.props.user.id}/>
                        <input type="hidden" name='get_id' value={this.props.message.id}/>
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