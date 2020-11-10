import React from 'react';
import {Link} from "react-router-dom";
import './User.scss'
import {connect} from "react-redux";
import PersonalData from  './Profile/PersionalData'
import './Profile/Profile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Url} from "../config/Url";
import {GetMessage} from "../../redux/message/action";
import Search from "../Search/Search";





class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            close: true
        }
    }
    componentDidMount() {
        this.props.dispatch(GetMessage())
    }

    ShowCloseMenue = (e) => {
        if (this.state.close){
            this.setState({
                close: false
            })
        }else {
            this.setState({
                close: true
            })
        }
        console.log(this.state)
    }

    render() {

        return (
            <header>
                <div className="burger" onClick={this.ShowCloseMenue}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="container row justify-between align-center">
                    <div className="header__logo">
                        <Link to="/user/account">
                            <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                        </Link>
                    </div>
                    <Search />
                    <div className="user_info">
                        <PersonalData />
                    </div>

                    <div className="header__logout">
                        <a href={Url.logout}>
                            <button
                                className="header__btn-logout"
                                name=""
                                padding='7px 20px'

                                style={this.state.close ? {right: '-100%'} : {right: '10px',transition: 'right 1s'}}
                            >
                                Ելք
                            </button>
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
