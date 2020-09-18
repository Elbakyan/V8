import React from 'react';

import {Redirect, Route} from "react-router-dom";
import Login from "./Login";
import Account from "./Account";
import {connect} from "react-redux";
import Loading from "../Loading";
import {UserExist} from "../../redux/user/action";


class User extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {


    }
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
                   this.props.status == undefined?<Loading/> : this.props.status ? <Redirect to='/user/account' /> : <Redirect to='/user/login' />
                }
            </div>
        );
    }
}

const MapStateToProps = state => state.user;
const MainUser = connect(MapStateToProps)(User)
export default MainUser;
