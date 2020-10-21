import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    fas,
    faHome,
    faEnvelope,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMobileAlt,
    faCog
} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetingsScore";

class PersionalDataScore extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props)
        let data = this.props.score.data
        return (
            <div className="persional__data">

                {
                    data == undefined ? '' : (
                        <div>
                            <div className="persional__header">
                                <div className="img" style={{backgroundImage:`url(${data.img})`}}>
                                </div>
                                <div className="fullname">
                                    <span>{data.name}</span>
                                    <span>{data.surname}</span>
                                </div>
                                <div className="persional__setings">
                                    <Link to='/score/account/setings'><FontAwesomeIcon icon={faCog}/></Link>
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
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }


            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainPersionalDataScore = connect(MapStateToProps)(PersionalDataScore)

export default MainPersionalDataScore;
