import React from 'react';
import Header from "./Header";
import {Route} from "react-router";
import SpaerParts from '../spare/SpareParts'
class Account extends React.Component{
    render() {
        return (
            <div className="Account">
                <Header/>
                <Route exact path='/user/account/spare-parts'>
                    <SpaerParts/>
                </Route>
            </div>
        );
    }
}

export default Account;