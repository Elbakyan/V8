import React from 'react';
import {Link, Route} from "react-router-dom";
import './User.scss'

import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import PersonalData from  './Profile/PersionalData'
import './Profile/Profile.scss'
import {GetMark} from "../../redux/auto/action";
import {Url} from "../config/Url";





class Header extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <header>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/user/account" onClick={() => window.location.href = '/user/account'}>
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <nav className="header__navigation">
                        <ul>
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
                            <DefaultBtn
                                className="header__btn-logout"
                                name="Ելք"
                                padding='7px 20px'
                                fofontSize='14px'
                            />
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
