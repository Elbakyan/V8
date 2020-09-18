import React from 'react';

import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../buttons/DefaultBtn";




class Header extends React.Component{



    render() {

        return (
            <header>
                <div className="container row align-center justify-between">
                    <div className="header__log">
                        <img src="http://elbakyan.am/Server/img/logo_1.svg" alt=""/>
                    </div>
                    <div className="header__links">
                        <nav className="header_links-nav">
                            <ul className="header__links-ul row">
                                <li className="header__links-li">
                                    <Link to='/user'>
                                        <DefaultBtn
                                            name="Մուտք որպեզ Հաճախորդ"
                                            color='#fff'
                                            background='#007A61'
                                            light={50}
                                        />
                                    </Link>
                                </li>
                                <li className="header__links-li">
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

export default Header;
