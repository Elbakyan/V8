import React from 'react';

import {Link} from "react-router-dom";
import './Home.scss'




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
                            <ul className="header__links-ul">
                                <li className="header__links-li">
                                    <Link to='/user'>User</Link>
                                </li>
                                <li className="header__links-li">
                                    <Link to="/score">score</Link>
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
