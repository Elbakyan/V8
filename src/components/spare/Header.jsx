import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class Header extends React.Component{
    render() {
        return (
            <header>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/">
                            <img src="http://elbakyan.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <nav className="header__navigation " style={{width:'80%'}}>
                        <ul>
                            <li className='header__navigation-li'>
                                <Link to='/spare-parts' className='header__link'>
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
                </div>
            </header>
        );
    }
}

const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
