import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Redirect, Route, Switch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faCar, faPlusCircle, faBars} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetings";
import UserCars from "../UserCars/UserCars";
import CarsForm from "../UserCars/CarsForm";
import '../../announcement/Announcement.scss'
import '../../announcement/SellCar.scss'
import GeFavorite from "../favorite/GeFavorite";
import Message from "../../message/Message";
import {GetMessage} from "../../../redux/message/action";


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
        this.props.dispatch(GetMessage())
    }

    render() {
        let status = 0;
        this.props.message.message.map((data,i) => {
            if (+this.props.user.id !== +data['send_id']){
                status += +data.status;
            }

        })

        return (
            <section className="Profile col">
                <div className="container">
                            <div className="Profile__information row justify-between">
                                <nav className='Profile__nav'>
                                    <div className="burger" onClick={this.ShowCloseMenue}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                    <ul >
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope} color={status? 'red':''}/>
                                            </div>
                                            <Link to='/user/account/persional'>Հաղորդագրություններ</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCar}/>
                                            </div>
                                            <Link to='/user/account/cars'>Իմ Մեքենաները</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faHeart}/>
                                            </div>
                                            <Link to='/user/account/favorite'>Նախնտրելի</Link>
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
                                        <Route path='/user/account/favorite'>
                                            <GeFavorite />
                                        </Route>
                                        <Route  path='/user/account/persional'>
                                            <Message/>
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
