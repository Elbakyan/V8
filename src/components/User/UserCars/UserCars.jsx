import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";

import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";

import  './UserCars.scss';



const  initialAuto = [
    {
        id:1,
        model:'BMW',
        mark:'BMW M5',
        image:'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/30yearsm5/bmw-m5-30jahre-sp-xxl.jpg',
        engine:'5',
        category:'ԹԵԹԵՎ ՄԱՐԴԱՏԱՐ',
        bodyType:'ՈՒՆԻՎԵՐՍԱԼ',
        color:'Արծաթափայլ',
        year:2015,
        vin:'V25-4402158',
        royle:'ձախ',
        fuel:'Բենզին',
        numbers:'77 TT 777'

    }
]

class UserCars extends Component {
    constructor(props) {
        super(props);
        this.state ={
            img: []
        }
    }
    componentDidMount() {
        this.props.dispatch(GetModel())
    }



    render() {

        return (
            <div className="Profile__cars">

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;
