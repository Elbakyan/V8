import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faEnvelope, faHome,faCarBattery,faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, Route, Switch} from "react-router-dom";
import PersionalData from "./PersionalData";
import ProfilSetings from "./ProfilSetings";





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
                                    <Link to='/score/account/persional'>Իմ էջը</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                    <Link to='/score/account/persional'>Հաղոևդագրություններ</Link>
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
                                <Route path='/score/account/persional'>
                                    <PersionalData/>
                                </Route>
                                <Route path='/score/account/setings'>
                                    <ProfilSetings />
                                </Route>
                                <Route path='/score/account/setings'>
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