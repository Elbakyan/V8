import React from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link} from "react-router-dom";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

class Login extends React.Component{

    Login(e){

        let data = new FormData(e.target)

        POST(Url.login,data).then(res => {
            console.log(res)
        })
    }
    render() {

        return (

            <div className="Login">
                <Header/>
                <div className="container row align-center justify-center">
                    <div className="Login__content col align-center justify-center">
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
