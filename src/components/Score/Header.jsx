import React from 'react';
import {Link, Route} from "react-router-dom";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
// import './User.scss'





class Header extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <header>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/user/account">
                            <img src="http://elbakyan.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <nav className="header__navigation">
                        <ul>
                            <li className='header__navigation-li'>
                                <Link to='/user/account/spare-parts' className='header__link'>
                                    Պահեստամասեր
                                </Link>
                            </li>
                            <li>
                                <Link to='/acauservice'>
                                    Ծառայություներ
                                </Link>
                            </li>
                            <li>
                                <Link to='/acauservice'>
                                    Հայտարարություններ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__logout">
                        <DefaultBtn
                            className="header__btn-logout"
                            name="Ելք"
                            padding='7px 20px'
                            fofontSize='14px'
                        />
                    </div>
                </div>
            </header>
        );
    }
}

const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
