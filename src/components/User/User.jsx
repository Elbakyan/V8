import React from 'react';

import {Redirect, Route} from "react-router-dom";
import Login from "./Login";
import Account from "./Account";


let status = false
class User extends React.Component{
    render() {
        return (
            <div className="User">
                <Route exact path='/user/login'>
                    <Login/>
                </Route>
                <Route exact path='/user/account'>
                    <Account/>
                </Route>
                {
                    status? <Redirect to='/user/login' /> : <Redirect to='/user/account' />
                }
            </div>
        );
    }
}

export default User;
