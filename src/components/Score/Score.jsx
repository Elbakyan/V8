import React,{Component} from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import Login from "./Authentication/Login";
import Account from "./Account";
import Loading from "../Loading";
import Signin from "./Authentication/Signin";
import './Score.scss'
import {GetScoreList} from "../../redux/score/action";
import Result from "../Search/Result";
import {GetMessage, SendMessage} from "../../redux/message/action";


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
                        this.props.score.status === undefined?<Loading/> : this.props.score.status ? <Redirect to={window.location.pathname} /> : <Redirect to='/' />
                    }
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state.score;
const MainScore = connect(MapStateToProps)(Score);
export default MainScore;
