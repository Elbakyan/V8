import React, {Component} from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link} from "react-router-dom";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {GetCity} from "../../../redux/location/action";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {UserExist} from "../../../redux/user/action";
import Art from "../../Alert";



class ProfilSetingsScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgName: '',
            status:undefined,
            messahe:'',
            modifideData:undefined,
            uploadeImg:undefined,
            modifidePassword:undefined
        }
    }

    componentDidMount() {
        this.props.dispatch(GetCity(1))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainProfilSetingsScore = connect(MapStateToProps)(ProfilSetingsScore);
export default MainProfilSetingsScore;