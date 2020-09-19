import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route} from "react-router-dom";





class PersionalData extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
                            <div className="persional__data col">
                                <div className="img row justify-center">
                                    <img src="https://elbakyan.am/Server/img/user/avatar/-1600089865.png" alt=""/>
                                </div>
                                <div className="fullname row justify-between">
                                    <span>Name</span>
                                    <span>Nameyan</span>
                                </div>
                                <div className="phone col">
                                    <span>+37494419699</span>
                                    <span>+37443626623</span>
                                </div>
                                <div className="email row">
                                    <span>koxlikyan1995@gmail.com</span>
                                </div>
                                <div className="location row">
                                    <span>Tavush</span>
                                    <span>Dilijan</span>
                                </div>

                            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainPersionalData = connect(MapStateToProps)(PersionalData)

export default MainPersionalData;
