import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";

const  initialAuto = [
    {
        model:''
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
        console.log(this.props)
        const {user,location,auto,dispatch} = this.props;
        console.log('user',user)
        console.log('location',location)
        console.log('auto',auto)

        return (
            <div className="Profile__cars">
                {initialAuto.length ? <CarsForm/> :''}
                {/*{initialAuto.map(()=>())}*/}

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;
