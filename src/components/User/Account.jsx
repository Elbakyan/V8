import React from 'react';
import Header from "./Header";
import {Route} from "react-router";
import SpaerParts from '../spare/SpareParts'
import Footer from "../Footer/Footer";
class Account extends React.Component{
    render() {
        return (
            <div className="Account">
                <Header/>
                <Route exact path='/user/account'>
                    <div className="Account__container">

                    </div>
                </Route>
                <Route exact path='/user/account/spare-parts'>
                    <SpaerParts/>
                </Route>
                <Footer/>
            </div>
        );
    }
}

export default Account;