import React,{Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import Loading from "../Loading";
import Signin from "./Authentication/Signin";
import './Score.scss'


class Score extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <div>
                <div className="User">
                    <Route exact path='/score/login'>
                        <Login/>
                    </Route>
                    <Route exact path='/score/sign-in'>
                        <Signin/>
                    </Route>
                    <Route path='/score/account'>
                        <Account/>
                    </Route>
                    {
                        this.props.status == undefined?<Loading/> : this.props.status ? <Redirect to={window.location.pathname} /> : <Redirect to='/score/login' />
                    }
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state.score;
const MainScore = connect(MapStateToProps)(Score);
export default MainScore;
