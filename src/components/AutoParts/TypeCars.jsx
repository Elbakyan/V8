import React, {Component, Fragment} from "react";
import {Link, NavLink, Route} from "react-router-dom";
import FromGlobalAutoParts from  './FormAutoParts/FormGlobalAutoParts'
import FromGlobalTruckParts from  './FormAutoParts/FormGlobalTruckParts'
import {Redirect} from "react-router";

class TypeCars extends  Component {
    render() {
        console.log(window.location.pathname)
        return(
            <Fragment>
                <Redirect to={window.location.pathname}/>
                <div className="add_auto_parts-links">
                    <NavLink to='/score/account/cars/cars' >Մարդատար</NavLink>
                    <NavLink to='/score/account/cars/truck' >Բեռնատար</NavLink>
                </div>
                <Route path='/score/account/cars/cars'>
                    <FromGlobalAutoParts />
                </Route>
                <Route path='/score/account/cars/truck'>
                    <FromGlobalTruckParts />
                </Route>
            </Fragment>

        )
    }
}

export default TypeCars