import React from 'react';
import {Link, Route} from "react-router-dom";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {Url} from "../config/Url";
import PersonalDataScore from  './Profile/PersionalDataScore'
import Menu from "../Menu/Menu";






class Header extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <header>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/score/account">
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <nav className="header__navigation">
                        <ul>
                            <li className='header__navigation-li'>
                                <Link to='/score/account/spare-parts' className='header__link'>
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
                    <div className="score_info">
                        <PersonalDataScore />
                    </div>
                    <div className="header__logout">
                        <a href={Url.logoutscore}>
                            <DefaultBtn
                                className="header__btn-logout"
                                name="Ելք"
                                padding='7px 20px'
                                fofontSize='14px'
                            />
                        </a>
                    </div>
                </div>
                {/*component*/}

            </header>
        );
    }
}

const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
