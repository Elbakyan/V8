import React,{Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import Login from "./Login";
import Account from "../User/Account";
import Loading from "../Loading";

class Score extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {/*<h1>sdsd</h1>*/}
                <div className="User">
                    <Route exact path='/score/login'>
                        <Login/>
                        {/*<h1>sdsadas</h1>*/}
                    </Route>
                    <Route exact path='/score/account'>
                        <Account/>
                    </Route>
                    {
                        this.props.status == undefined?<Loading/> : this.props.status ? <Redirect to='/score/account' /> : <Redirect to='/score/login' />
                    }
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state.user;
const MainScore = connect(MapStateToProps)(Score);
export default MainScore;
