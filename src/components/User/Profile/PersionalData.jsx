import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas, faHome, faEnvelope, faMapMarkedAlt,faMapMarkerAlt,faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetings";

class PersionalData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="persional__data row justify-between">
                <div className="persional__header col justify-center align-items">
                    <div className="img row justify-center">
                        <img src="https://elbakyan.am/Server/img/user/avatar/-1600089865.png" alt=""/>
                    </div>
                    <div className="fullname row justify-center">
                        <span>Name</span>
                        <span>Nameyan</span>
                    </div>
                </div>

                <div className="persional__body col justify-center align-center">

                    <nav>
                        <ul>
                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMobileAlt}/>
                                </div>
                                <div>
                                    <span>+37494419699</span>
                                </div>

                            </li>

                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <div>
                                    <span>koxlikyan1995@gmail.com</span>
                                </div>

                            </li>

                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                </div>
                                <div>
                                    <span>Tavush</span>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                </div>
                                <div>
                                    <span>Dilijan</span>
                                </div>

                            </li>
                        </ul>
                    </nav>
                    <div className="persional__setings">
                        <Link to='/user/account/setings'>Կարգավորումներ</Link>
                    </div>
                </div>


            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainPersionalData = connect(MapStateToProps)(PersionalData)

export default MainPersionalData;
