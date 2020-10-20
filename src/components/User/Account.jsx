import React from 'react';
import Header from "./Header";
import {Redirect, Route} from "react-router";
import SpaerParts from '../spare/SpareParts'
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";

class Account extends React.Component{
    render() {
        return (
            <div className="Account">
                {
                    !this.props.status? <Redirect to={'/user/login'} /> : ''
                }
                <Header/>
                <Profile/>
                <Footer/>
            </div>
        );
    }
}

export default Account;