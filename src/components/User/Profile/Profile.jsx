import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Redirect, Route, Switch} from "react-router-dom";
import PersionalData from "./PersionalData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas, faHome, faEnvelope,faCar,faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetings";
import UserCars from "../UserCars/UserCars";
import CarsForm from "../UserCars/CarsForm";



class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            link:''
        }
    }
    componentDidMount() {
        this.setState({
            link:window.location.pathname
        })
    }

    render() {
        return (
            <section className="Profile col">
                <div className="container">
                            <div className="Profile__information row justify-between">
                                <nav className='Profile__nav'>
                                    <ul >
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>
                                            <Link to='/user/account/persional'>Հաղոևդագրություններ</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCar}/>
                                            </div>
                                            <Link to='/user/account/cars'>Իմ Մեքենաները</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faPlusCircle}/>
                                            </div>
                                            <Link to='/user/account/cars/add'>
                                                Ավելացնել
                                            </Link>
                                        </li>


                                    </ul>
                                </nav>

                                <div className="Profile__content">
                                    <Switch>
                                        <Route path='/user/account/setings'>
                                            <ProfilSetings />
                                        </Route>
                                        <Route path='/user/account/cars/add'>
                                            <CarsForm/>
                                        </Route>
                                        <Route path='/user/account/cars'>
                                            {
                                                this.props.auto.auto.status ? <UserCars/> :this.props.auto.auto.message
                                            }
                                        </Route>
                                        <Route path='/user/account/setings'>
                                            <ProfilSetings />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                </div>

            </section>
        );
    }
}

const MapStateToProps = state => state;
const MainProfile = connect(MapStateToProps)(Profile)

export default MainProfile;
