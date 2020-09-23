import React from 'react';

import {Redirect, Route} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import {connect} from "react-redux";
import Loading from "../Loading";
import {UserExist} from "../../redux/user/action";
import Signin from "./Authentication/Signin";
import SpaerParts from "../spare/SpareParts";


class User extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log( window.location.pathname  )
        console.log(this.props)
        return (
            <div className="User">

                <Route exact path='/user/login'>
                    <Login/>
                </Route>
                <Route exact path='/user/sign-in'>
                    <Signin/>
                </Route>
                <Route path='/user/account'>
                    <Account/>
                </Route>
                {
                   this.props.status == undefined?<Loading/> : this.props.status ? <Redirect to={window.location.pathname} /> : <Redirect to='/user/login' />
                }
            </div>
        );
    }
}

const MapStateToProps = state => state.user;
const MainUser = connect(MapStateToProps)(User)
export default MainUser;
