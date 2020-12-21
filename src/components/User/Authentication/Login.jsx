import React from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link} from "react-router-dom";
import {Url} from "../../config/Url";
import {Redirect} from "react-router";

class Login extends React.Component{

    render() {

        return (

            <div className="Login">
                {
                    this.props.status? <Redirect to={'/user/account'} /> : <Redirect to={'/user/login'} />
                }

                <Header/>

                <div className="container row align-center justify-center">
                    <div className="Login__content col align-center justify-center">
                        <p className='message' style={this.props.status ?
                        {
                            margin: '5px 0px',
                            color: '#ff0000'
                        }:{
                            margin: '5px 0px',
                            color: '#565656'
                        }}>{this.props.message}</p>

                        <form className="col align-center justify-center" action={Url.login} method="POST">
                            <label className='phone_style'>
                                <DefaultInput
                                    type='number'
                                    placeholder="Հեռախոսահամար"
                                    name='phone'
                                    requred
                                    onChange={
                                        (e)=>{
                                            let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                            if (str){
                                                let num = str[0].match(/\d{8}$/)[0];
                                                e.target.value = num
                                            }
                                        }
                                    }
                                />
                            </label>

                            <DefaultInput
                                type="password"
                                placeholder='Գաղտնաբառ․․․'
                                name='password'
                                width='100%'
                                padding='10px 20px'
                                margin= '5px 0'
                            />

                            <div className="Login__links row align-end justify-between">
                                <Link className='link' to='/user/sign-in'>Գրանցվել</Link>
                                <Link className='link' to='/user/restore'>Վերականգնել</Link>
                                <DefaultBtn
                                    name='Մուտք'
                                    type='submit'
                                    background='#143645'
                                    color='#ffffff'
                                    light={30}
                                    className='Login__btn'
                                />
                            </div>

                        </form>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export  default Login;
