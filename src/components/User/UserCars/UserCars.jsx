import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";

import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
<<<<<<< HEAD
import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";
=======

import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";

import  './UserCars.scss';


>>>>>>> 911bfeeadbb0e896012829d5fd320325ab490159

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
<<<<<<< HEAD
        const {user,location,auto,dispatch} = this.props;
        return (
            <div className="Profile__cars">
                <div className="">
                    <h1>Մուտքագրեք ձեր մեքենայի տվյալները</h1>
                        <form >
                            <DefaultSelect
                                onChange={(e)=>{
                                    dispatch(GetModel(e))
                                }}
                                data={auto.mark}
                                width= '20%'
                            />
                            <DefaultSelect
                                data={auto.model}
                                width= '20%'
                            />
                            <select
                                name="year"
                                // onChange={this.props.onChange}
                                style={{
                                    backgroundColor: this.props.background,
                                    width:"12%"
                                }}
                            >
                                {
                                    auto.year.map((res, i) => {
                                        return <option key={i} value={res}>{res}</option>
                                    })
                                }
                            </select>

                            <DefaultSelect
                                data={auto.color}
                                width= '25%'
                            />
                        </form>
                </div>
=======

        return (
            <div className="Profile__cars">

>>>>>>> 911bfeeadbb0e896012829d5fd320325ab490159
            </div>

        )

    }
}

const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;
<<<<<<< HEAD


// <div className="img__name">
//     {this.state.img.map(file => {
//         return <span style={{margin:'0px 5px'}}>
//                                     {file[0].name}
//                                     </span>
//     })}
//
// </div>
=======
>>>>>>> 911bfeeadbb0e896012829d5fd320325ab490159
