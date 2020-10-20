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
              <h1>profile</h1>
            </div>
        );
    }
}

const MapStateToProps = state => state.score;
const MainPersionalData = connect(MapStateToProps)(PersionalData)

export default MainPersionalData;
