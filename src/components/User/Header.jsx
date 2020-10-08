import React from 'react';
import {Link, Route} from "react-router-dom";
import './User.scss'

import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import PersonalData from  './Profile/PersionalData'
import './Profile/Profile.scss'
import {GetMark} from "../../redux/auto/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Url} from "../config/Url";





class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            close: true
        }
    }
    ShowCloseMenue = (e) => {
        if (this.state.close){
            this.setState({
                close: false
            })
        }else {
            this.setState({
                close: true
            })
        }
        console.log(this.state)
    }

    render() {

        return (
            <header>
                <div className="burger" onClick={this.ShowCloseMenue}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/user/account">
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <nav className="header__navigation">
                        <ul style={this.state.close ? {right: '-100%'} : {right: '0%'}}>
                            <li className='header__navigation-li'>
                                <Link to='/spare-parts' className='header__link'>
                                    Պահեստամասեր
                                </Link>
                            </li>
                            <li>
                                <Link to='/acauservice'>
                                    Ծառայություներ
                                </Link>
                            </li>
                            <li>
                                <Link to='/announcement'>
                                    Հայտարարություններ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <div className="user_info">
                        <PersonalData />
                    </div>

                    <div className="header__logout">
                        <a href={Url.logout}>
                            <button
                                className="header__btn-logout"
                                name=""
                                padding='7px 20px'

                                style={this.state.close ? {right: '-100%'} : {right: '10px',transition: 'right 1s'}}
                            >
                                Ելք
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
