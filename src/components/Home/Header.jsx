import React from 'react';

import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";




class Header extends React.Component{
    render() {

        return (
            <header>
                <div className="container row align-center justify-between">
                    <div className="header__log">
                        <img src="https://elbakyan.am/Server/img/logo_1.svg" alt=""/>
                    </div>
                    <div className="header__links ">
                        <nav className="header_links-nav">
                            <ul className="header__links-ul row align-center">
                                <li className="header__links-li row align-center">
                                    <Link to={this.props.user.status? '/user/account': '/user'}>
                                        <DefaultBtn
                                            name="Մուտք որպեզ Հաճախորդ"
                                            color='#fff'
                                            background='#007A61'
                                            light={50}
                                        />
                                    </Link>
                                </li>
                                <li className="header__links-li row align-center">
                                    <Link to="/score"><DefaultBtn
                                        name="Մուտք որպեզ Գործնկեր"
                                        color='#fff'
                                        background='#007A61'
                                        light={50}
                                     />
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
