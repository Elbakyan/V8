import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import DefaultInput from "../forms/inputs/DefaultInput";

class Login extends React.Component{
    render() {
        return (
            <div className="Login">
                <Header/>
                <div className="container row align-center justify-center">
                    <div className="Login__content col align-center justify-center">
                       <DefaultInput
                            type="text"
                            placeholder='Հեռախոսահամար․․․'
                            width='80%'
                       />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export  default Login;
