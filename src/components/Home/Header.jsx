import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import Search from "../Search/Search";
import SITE_NAME from "../config/Url";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




class Header extends React.Component{
    render() {
        return (
            <header>
                    <div className="header__log">
                        <Link to='/'>
                            <h2>ՈՒղարկել հարցում</h2>
                            <img src={SITE_NAME + "/Server/img/logo_1.svg"} alt=""/>
                        </Link>
                    </div>
                    <Search />
                    <div className="header__links ">
                        <nav className="header_links-nav">
                            <ul className="header__links-ul row align-center">

                                <li className="header__links-li row align-center">
                                    <Link className='link__btn header__link-message' to='/user/login'>
                                        <FontAwesomeIcon icon={faBell} />
                                    </Link>

                                    <Link className='link__btn header__link' to='/user/login'>
                                        Հաճախորդ
                                    </Link>
                                </li>
                                <li className="header__links-li row align-center">
                                    <Link className='link__btn header__link' to='/score/login'>
                                        Գործնկեր
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </header>
        );
    }
}
const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
