import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import DefaultInput from "../forms/inputs/DefaultInput";

class Login extends React.Component{
    render() {
        return (
            <div className="Login">
                <Header />
                <div className="container row align-center justify-center">
                    <div className="Login__content col align-center justify-center">
                        <div className="score_user_name row justify-center">
                            <DefaultInput
                                type="text"
                                placeholder='Անուն․․․'
                                width='40%'
                                height="40px"
                            />
                            <DefaultInput
                                type="text"
                                placeholder='Ազգանուն․․․'
                                width='40%'
                                height="40px"
                            />
                        </div>

                       <DefaultInput
                            type="text"
                            placeholder='Ընկերության անվանումը․․․'
                            width='80%'
                            height="40px"
                       />
                        <DefaultInput
                            type="tel"
                            placeholder='Ընկերության անվանումը․․․'
                            width='80%'
                            height="40px"
                        />
                        <DefaultInput
                            type="email"
                            placeholder='E-mail․․․'
                            width='80%'
                            height="40px"
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export  default Login;
