import React from 'react';
import Header from "./Header";
import {Route} from "react-router";
import SpaerParts from '../spare/SpareParts'
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";

class Account extends React.Component{
    render() {
        return (
            <div className="Account">
                <Header/>
                <Profile/>
                <Footer/>
            </div>
        );
    }
}

export default Account;