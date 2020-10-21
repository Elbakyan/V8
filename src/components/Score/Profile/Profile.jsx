import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faEnvelope, faHome,faCarBattery,faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, Switch} from "react-router-dom";
import ProfilSetings from "./ProfilSetings";
import ScoreList from "../ScoreList/ScoreList";

import PersionalDataScore from "./PersionalDataScore";





class Profile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        console.log(window.location.pathname)

        return (
            <section className="Profile col">
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHome}/>
                                    </div>
                                    <Link to='/score/account'>Իմ էջը</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                    <Link to='/score/account/persional'>Հաղորդագրություններ</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faCarBattery}/>
                                    </div>
                                    <Link to='/score/account/cars'>Պահեստամասեր</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faQuestionCircle}/>
                                    </div>
                                    <Link to='/score/account/cars'>Ծառայություներ</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="Profile__content">
                            <Switch>
                                <Route exact path='/score/account'>
                                    <ScoreList />
                                </Route>
                                <Route exact path='/score/account/persional'>
                                    <PersionalDataScore/>
                                </Route>
                                <Route exact path='/score/account/setings'>
                                    <ProfilSetings />
                                </Route>
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
