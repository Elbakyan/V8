import React from 'react';
import {Link} from "react-router-dom";
import '../User.scss'
import SITE_NAME from "../../config/Url";





class Header extends React.Component{



    render() {

        return (
            <header className="header__login" style={{position:"fixed"}}>
                <div className="container ">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={SITE_NAME + "/Server/img/logo_1.svg"} alt=""/>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
