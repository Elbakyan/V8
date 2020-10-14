import React, {Component} from "react";
// import Button from "light-dark-button/src";
import DefaultBtn from "../forms/buttons/DefaultBtn";
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
class GetMessage extends Component{
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

    render() {
        // this.scrole()
        return (
            <div className="getMessage">
                <div className="getMessage_users">
                    {
                        message.map(({id,message},i)=>{
                            return(
                                <div key={i} className={id == user_id?'block_message block_message_user1':'block_message block_message_user2'}>
                                    <div >
                                        <span>{message}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="send_message">
                    <form>
                        <textarea className="message_text" name="message" ></textarea>
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

export default GetMessage