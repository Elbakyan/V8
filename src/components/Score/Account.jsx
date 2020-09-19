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
                <Route exact path='/score/account'>
                    <div className="Account__container">
                        <h1>sdsd</h1>
                    </div>
                </Route>
                {/*<Route exact path='/user/account/spare-parts'>*/}
                {/*    <SpaerParts/>*/}
                {/*</Route>*/}
                <Footer/>
            </div>
        );
    }
}

export default Account;