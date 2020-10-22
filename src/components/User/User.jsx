import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import {connect} from "react-redux";
import Loading from "../Loading";
import Signin from "./Authentication/Signin";
import {GetAuto} from "../../redux/auto/action";
import {GetMessage} from "../../redux/message/action";


class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    componentDidMount() {
        this.props.dispatch(GetMessage())
    }

    render() {
        if (this.props.id){
            this.props.dispatch(GetAuto(this.props.id))

        }
        return (
            <div className="User">

               <Switch>
                   <Route exact path='/user/login'>
                       <Login status={this.props.status} message={this.props.message}/>
                   </Route>
                   <Route exact path='/user/sign-in'>
                       <Signin/>
                   </Route>
                   <Route path='/user/account'>
                       <Account />
                   </Route>
                   {this.props.status ? <Redirect to={window.location.pathname} /> : <Redirect to='/user/login' />}
               </Switch>

                {this.props.status === undefined?<div className="main__load"> <Loading /> </div>:''}
            </div>
        );
    }
}

const MapStateToProps = state => state.user;
const MainUser = connect(MapStateToProps)(User)
export default MainUser;
