import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import Search from "../Search/Search";




class Header extends React.Component{
    render() {

        return (
            <header>
                <div className="container row align-center justify-between">
                    <div className="header__log">
                        <Link to='/' onClick={() => window.location.href = '/'}>
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    {/*<nav className="header__navigation ">*/}
                    {/*    <ul className="header__links-ul row align-center">*/}
                    {/*            <li className='header__navigation-li'>*/}
                    {/*                <Link to='/spare-parts' className='header__link'>*/}
                    {/*                    Պահեստամասեր*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/acauservice'>*/}
                    {/*                    Ծառայություներ*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link to='/announcement'>*/}
                    {/*                    Հայտարարություններ*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <Search />
                    <div className="header__links ">
                        <nav className="header_links-nav">
                            <ul className="header__links-ul row align-center">

                                <li className="header__links-li row align-center">
                                    <Link to={this.props.user.status? '/user/account': '/user'}>
                                        <DefaultBtn
                                            name="Հաճախորդ"
                                            color='#fff'
                                            background='#007A61'
                                            light={50}
                                        />
                                    </Link>
                                </li>
                                <li className="header__links-li row align-center">
                                    <Link to={this.props.score.status? '/score/account': '/score'}><DefaultBtn
                                        name="Գործնկեր"
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
