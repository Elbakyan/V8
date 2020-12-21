import React from 'react';
import './Restore.scss';
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import Art from "../Alert";
import {Redirect} from "react-router-dom";
import Header from "../User/Authentication/Header";



class Restore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            send: false,
            alert: undefined,
            message: '',
            redirect: false
        }
        this.Code = React.createRef();
        this.Pass = React.createRef();
        this.Pass2 = React.createRef();
    }


    SendMail = (e) => {
        e.preventDefault();
        let data = new  FormData(e.target);
        POST(Url.restore,data).then(res => {
            if (res.status){
                this.setState({
                    send: true
                })
                this.Code.current.value = ''
            }
        })
    }
    ChangePassword = (e) => {

        e.preventDefault();
        let data = new  FormData(e.target);
        POST(Url.changePassword,data).then(res => {
            this.setState({
                alert: res.status,
                message: res.message
            })
            setTimeout(()=>{
                this.setState({
                    alert: undefined
                })
            },2000)
            if (res.status){
                setTimeout(()=>{
                    this.setState({
                        redirect: true
                    })
                },2000)
            }else{
                this.Code.current.value = ''
                this.Pass.current.value = ''
                this.Pass2.current.value = ''
            }
        })
    }
    render() {
        return (
            <div className='restore'>
                <Header/>
                {
                    this.state.redirect?
                        <Redirect to={this.props.type === 'user'? '/user/login': '/score/login'} />:''
                }
                
                {
                    this.state.alert !== undefined?
                        this.state.alert?
                            <Art type='success' content={this.state.message} />:
                            <Art type='warning' content={this.state.message} />:''

                }
                <h1>Վերականգնել գաղտնաբառը․</h1>
                {
                    this.state.send?
                        <form className='change_password' onSubmit={this.ChangePassword}>
                            <input type="hidden" name='type' value={this.props.type}/>
                            <input type="text" name='code' placeholder='գրեք ձեր mail-ին ուղարկված կոդը' ref={this.Code}/>
                            <input type="password" name='password' placeholder='Գաղտնաբառ' ref={this.Pass}/>
                            <input type="password" name='password2' placeholder='Կրրկնել Գաղտնաբառը' ref={this.Pass2}/>
                            <button>Հաստատել</button>
                        </form>
                        :
                        <form className='send_code' onSubmit={this.SendMail}>
                            <input type="hidden" name='type' value={this.props.type}/>
                            <input type="email" placeholder='E-mail' name='email' required/>
                            <button>Ուղարկել</button>
                        </form>
                }

            </div>
        )
    }
}

export default Restore;