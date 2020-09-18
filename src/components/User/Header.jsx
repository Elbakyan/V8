import React from 'react';
import {Link, Route} from "react-router-dom";
import './User.scss'





class Header extends React.Component{



    render() {

        return (
            <header>
                <div className="container row align-center justify-between">
                    <div className="header__log">
                        <Link to="/">
                            <img src="http://elbakyan.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;
