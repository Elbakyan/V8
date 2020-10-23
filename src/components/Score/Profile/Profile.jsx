import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faEnvelope, faHome,faCarBattery,faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import PersionalDataScore from "./PersionalDataScore";
import ProfilSetingsScore from "./ProfilSetingsScore";
import ScoreList from "../ScoreList/ScoreList";
import ScorePage from "../ScorePage/ScorePage";





class Profile extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let pathId = '';
        if (this.props.score.scoreList != false){
             pathId = this.props.score.scoreList[0].id;

        }

        return (
            <section className="Profile col">
                {
                    window.location.pathname == '/score/account' || '/score/account/' ? <Redirect to={'/score/account/' +pathId}/>: ''
                }
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHome}/>
                                    </div>
                                    <Link to={'/score/account'}>Իմ էջը</Link>
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
                                <Route path={'/score/account/'}>
                                    <ScoreList />
                                </Route>
                                <Route exact path='/score/account/setings'>
                                    <ProfilSetingsScore />
                                </Route>
                                <Route exact path='/score/account/persional'>
                                    <PersionalDataScore/>
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
