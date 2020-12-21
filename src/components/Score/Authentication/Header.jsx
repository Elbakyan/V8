import React from 'react';
import {Link} from "react-router-dom";


class Header extends React.Component{

    render() {

        return (
            <header className="header__login" style={{position:"fixed"}}>
                <div className="container ">
                    <div className="header__logo">
                        <Link to="/">
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;
