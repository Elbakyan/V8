import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome,faCarBattery,faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, Switch} from "react-router-dom";

import ScoreList from "../ScoreList/ScoreList";
import Message from '../../User/message/Message'
import {GetScoreList} from "../../../redux/score/action";
import AutoParts from "../../AutoParts/AutoParts";
import {GetMessage} from "../../../redux/message/action";




class Profile extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(GetScoreList())
        this.props.dispatch(GetMessage(50))
    }
    render() {
        console.log(this.props)
        let pathId = '';
        if (this.props.score.scoreList != false){
             pathId = this.props.score.scoreList[0].id;

        }

        return (
            <section className="Profile col">
                {/*{*/}
                {/*    window.location.pathname == '/score/account' || '/score/account/' ? <Redirect to={'/score/account/list/' +pathId}/>: ''*/}
                {/*}*/}
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <Link to={'/score/account'}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHome}/>
                                        </div>
                                        Իմ էջը
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/message'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                        Հաղորդագրություններ
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/cars'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faCarBattery}/>
                                        </div>
                                        Պահեստամասեր
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/cars'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faQuestionCircle}/>
                                        </div>
                                        Ծառայություներ
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="Profile__content">
                            <Switch>
                                {/*<Route path='/score/account/list'>*/}
                                {/*    <ScoreList />*/}
                                {/*</Route>*/}
                                {/*<Route exact path={'/score/account/' + pathId}>*/}
                                {/*    <ScoreList />*/}
                                {/*</Route>*/}
                                <Route  path='/score/account/cars'>
                                    <AutoParts />
                                </Route>
                                <Route  path='/score/account/message'>
                                    <Message id={1604757016}/>
                                </Route>
                                <ScoreList />
                            </Switch>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

const MapStateToProps = state => state;
const MainProfile = connect(MapStateToProps)(Profile)

export default MainProfile;
