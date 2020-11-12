import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route, Switch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faCar, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import ProfilSetings from "./ProfilSetings";
import UserCars from "../UserCars/UserCars";
import CarsForm from "../UserCars/CarsForm";
import '../../announcement/Announcement.scss'
import '../../announcement/SellCar.scss'
import GeFavorite from "../favorite/GeFavorite";
import Message from "../message/Message";
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
    }

    render() {
        console.log()
        let status = 0;
        // this.props.message.message.map((data) => {
        //     if (+this.props.user.id !== +data['send_id']){
        //         status += +data.status;
        //     }
        //
        // })

        return (
            <section className="Profile col">
                <div className="container">
                            <div className="Profile__information row justify-between">
                                <nav className='Profile__nav'>
                                    <ul >
                                        <li>
                                            <Link to='/user/account/persional'>
                                                <div className="icon">
                                                    <FontAwesomeIcon icon={faEnvelope} color={status? 'red':''}/>
                                                </div>
                                                <span>Հաղորդագրություններ</span>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/user/account/cars'>
                                                <div className="icon">
                                                    <FontAwesomeIcon icon={faCar}/>
                                                </div>
                                                <span>Իմ Մեքենաները</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/user/account/favorite'>
                                                <div className="icon">
                                                    <FontAwesomeIcon icon={faHeart}/>
                                                </div>
                                                <span>Նախնտրելի</span>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/user/account/cars/add'>
                                                <div className="icon">
                                                    <FontAwesomeIcon icon={faPlusCircle}/>
                                                </div>
                                                <span>Ավելացնել</span>

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
                                            {
                                                this.props.user.id? <Message id={this.props.user.id}/>:''
                                            }
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
