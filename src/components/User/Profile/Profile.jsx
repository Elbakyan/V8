import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route} from "react-router-dom";
import PersionalData from "./PersionalData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas, faHome, faEnvelope,faCar} from "@fortawesome/free-solid-svg-icons";


class Profile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <section className="Profile col">
                <div className="container">
                            <div className="Profile__information row">
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
                                            <Link to='/user/account/persional'>Իմ Մեքենաները</Link>
                                        </li>

                                    </ul>
                                </nav>
                                <Route path='/user/account/persional'>
                                    <PersionalData/>

                                </Route>
                            </div>
                </div>

            </section>
        );
    }
}

const MapStateToProps = state => state;
const MainProfile = connect(MapStateToProps)(Profile)

export default MainProfile;
