import React from 'react';

import {Redirect, Route} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import {connect} from "react-redux";
import Loading from "../Loading";
import {UserExist} from "../../redux/user/action";
import Signin from "./Authentication/Signin";


class User extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.dispatch(UserExist())

    }
    render() {
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
                   this.props.status == undefined?<Loading/> : this.props.status ? <Redirect to='/user/account' /> : <Redirect to='/user/login' />
                }
            </div>
        );
    }
}

const MapStateToProps = state => state.user;
const MainUser = connect(MapStateToProps)(User)
export default MainUser;
