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
        console.log(this.props.user.data)

    let data = this.props.user.data;
        return (
            <div className="persional__data">

                {
                    data == undefined ? '' : (
                        <div>
                            <div className="persional__header col justify-center align-items">
                                <div className="img row justify-center">
                                    <img src="https://elbakyan.am/Server/img/user/avatar/-1600089865.png" alt=""/>
                                </div>
                                <div className="fullname row justify-center">
                                    <span>{data.name}</span>
                                    <span>{data.surname}</span>
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
                                                <span>{data.phone}</span>
                                            </div>

                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>
                                            <div>
                                                <span>{data.email}</span>
                                            </div>

                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                            </div>
                                            <div>
                                                <span>{data.sircle}</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                            </div>
                                            <div>
                                                <span>{data.city}</span>
                                            </div>

                                        </li>
                                    </ul>
                                </nav>
                                <div className="persional__setings">
                                    <Link to='/user/account/setings'>Կարգավորումներ</Link>
                                </div>
                                <Route path='/user/account/setings'>
                                    <ProfilSetings />
                                </Route>
                            </div>
                        </div>
                    )
                }


            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainPersionalData = connect(MapStateToProps)(PersionalData)

export default MainPersionalData;
