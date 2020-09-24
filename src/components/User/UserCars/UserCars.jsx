import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
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
    }
    componentDidMount() {
        this.props.dispatch(GetModel())
    }


    render() {
        const {user,location,auto,dispatch} = this.props;
        return (
            <div className="Profile__cars">
                {
                    initialAuto.map(({
                                         id,
                                         model,
                                         mark,
                                         image,
                                         engine,
                                         category,
                                         type,
                                         color,
                                         year,
                                         vin,
                                         royle,
                                         fuel,
                                         number,
                                         traction
                                     })=>(
                        <div key={id} className='Profile__cars-list'>
                            <div className="left_block">
                                <div className="car_image">
                                    <img src={image} alt="car_image"/>
                                </div>

                                <div className="car_name">
                                    <h2>{mark}</h2>
                                </div>
                            </div>

                            <div className="right_block">

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;
