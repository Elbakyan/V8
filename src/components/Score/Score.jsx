import React,{Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import Loading from "../Loading";
import Signin from "./Authentication/Signin";
import './Score.scss'



class Score extends Component {
    componentDidMount() {
        // let data = new FormData();
        // data.append("send_id", 1604757123);
        // data.append("get_id", 32);
        // data.append("message", 'hellowORLD');
        // data.append("score", 'score');
        // console.log(Array.from(data))


    }

    render() {

        return(
            <div>
                <div className="User">
                    <Switch>
                    <Route exact path='/score/login'>
                        <Login/>
                    </Route>
                    <Route exact path='/score/sign-in'>
                        <Signin/>
                    </Route>
                    <Route path='/score/account'>
                        {
                            this.props.score.score.status?
                                <Account/>: ''
                        }


                    </Route>
                        {
                            this.props.score.score.status ? <Redirect to={window.location.pathname} /> : <Redirect to='/' />
                        }
                    </Switch>
                    {
                        this.props.user.status?<Redirect to='/user/account' />: ''
                    }
                    {
                        this.props.score.score.status === undefined?<Loading/> : ""
                    }
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainScore = connect(MapStateToProps)(Score);
export default MainScore;
