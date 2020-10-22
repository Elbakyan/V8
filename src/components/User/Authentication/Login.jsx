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
                            <DefaultInput
                                type="tel"
                                placeholder='Հեռախոսահամար․․․'
                                name='phone'
                                width='100%'
                                padding='10px 20px'
                                margin= '5px 0'
                            />
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
