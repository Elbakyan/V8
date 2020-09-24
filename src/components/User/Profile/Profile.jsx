import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route, Switch} from "react-router-dom";
import PersionalData from "./PersionalData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas, faHome, faEnvelope,faCar} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetings";
import UserCars from "../UserCars/UserCars";
import AutoList from "../UserCars/AutoList";


class Profile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

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
                                            <Link to='/user/account/persional'>Իմ էջը</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>
                                            <Link to='/user/account/persional'>Հաղոևդագրություններ</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCar}/>
                                            </div>
                                            <Link to='/user/account/cars'>Իմ Մեքենաները</Link>
                                        </li>

                                    </ul>
                                </nav>

                                <div className="Profile__content">

                                    <Route path='/user/account/persional'>
                                        <PersionalData/>
                                    </Route>
                                    <Route path='/user/account/setings'>
                                        <ProfilSetings />
                                    </Route>
                                    <Route path='/user/account/cars'>
                                        <AutoList />
                                    </Route>

                                    <Switch>
                                        <Route path='/user/account/persional'>
                                            <PersionalData/>
                                        </Route>
                                        <Route path='/user/account/cars'>
                                            <UserCars />
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
