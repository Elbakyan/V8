import React from 'react';
import {Link} from "react-router-dom";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {Url} from "../config/Url";

import Search from "../Search/Search";
import PersionalDataScore from "../User/Profile/PersionalData";
import PersonalData from "../User/Profile/PersionalData";






class Header extends React.Component{
    render() {
        return (
            <header>

                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/score/account">
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <Search />
                    <div className="user_info">
                        <PersonalData />
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
            </header>
        );
    }
}

const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
