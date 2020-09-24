import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import DefaultInput from "../../forms/inputs/DefaultInput";
import CarsForm from "./CarsForm";
import UserCars from "./UserCars";
// import {Link, Redirect} from "react-router-dom";
import {Link,Redirect, Route} from "react-router-dom";

const  initialAuto = [
    {
        model:''
    }
]

class AutoList extends Component {
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

                {/*{initialAuto.map(()=>())}*/}



                {/*{initialAuto.length ? <Redirect to='/user/account/cars'/> :<Redirect to='/user/account/cars/add-auto'/>}*/}
                {/*/!*{initialAuto.map(()=>())}*!/*/}

                <Link to='/user/account/cars/add-auto'>
                   +
                </Link>



                <Route path='/score/account/cars'>
                <UserCars />
                </Route>
                <Route path='/user/account/cars/add-auto'>
                    <CarsForm/>
                </Route>
                {/*{initialAuto.length ?  <UserCars />:''}*/}

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainAutoList = connect(MapStateToProps)(AutoList)
export  default MainAutoList;
