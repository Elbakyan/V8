import React from 'react';
import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import Search from "../Search/Search";
import SITE_NAME, {Url} from "../config/Url";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PersonalData from "../User/Profile/PersionalData";
import PersionalDataScore from "../Score/Profile/PersionalDataScore";
import {GetMessage} from "../../redux/message/action";
import ModalRequest from "../Modal/ModalRequest";
import Art from "../Alert";
import {GetRequst} from "../../redux/GetRequest/action";




class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            message: false
        }
    }
    componentDidMount() {
        let id;
        if (this.props.user.status){
            id = this.props.user.id
        }
        if (this.props.score.score.status){
            id = this.props.score.score.id
        }

        this.props.dispatch(GetRequst())
        document.addEventListener("click", (e) => {
            this.props.dispatch(GetRequst())
            this.props.dispatch(GetMessage(id))
        })

    }

    OpenModal = (e)  =>{
        this.setState({
            modal: true,
            message: true
        })
        setTimeout(() => {
            this.setState({
                message: false
            })
        },3000)
    }
    Close = (e) => {
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <header>
                {
                    this.props.user.status || this.props.score.score.status ?
                        this.state.modal?
                        <ModalRequest close={this.Close}/>:''
                        :
                        this.state.message?
                            <div className='user_warning'>
                                <Art type='warning' content='Հառցում ուղարկելու համար անհրաժեշտ է գրանցվել․․․․'/>
                            </div>: ''
                }
                    <div className="header__log">
                        <img src={SITE_NAME + "/Server/img/header_logo.png"} alt="logo" onClick={this.OpenModal}/>
                    </div>
                    <Search />
                    {
                        this.props.user.status?
                            <div className="persional__info">
                                <PersonalData />
                            </div>: ''

                    }
                    {
                        this.props.score.score.status?
                            <div className="persional__info">
                                <PersionalDataScore />
                            </div>: ''

                    }
                    <div className="header__links ">
                        {
                            !this.props.score.score.status && !this.props.user.status?
                                <nav className="header_links-nav">
                                    <ul className="header__links-ul row align-center">
                                        <li className="header__links-li row align-center">
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
                                </nav>:this.props.user.status?
                                <nav className="header_links-nav">
                                    <ul className="header__links-ul row align-center">

                                        <li className="header__links-li row align-center">
                                            <Link className='link__btn header__link-message' to='/user/account/message/'>

                                                <FontAwesomeIcon icon={faBell} style={this.props.message.notifications?{color:'red'}:''}/>
                                            </Link>
                                        </li>
                                        <li className="header__links-li row align-center">
                                            <a className='link__btn header__link' href={Url.logout}>
                                                Ելք
                                            </a>
                                        </li>
                                    </ul>
                                </nav>:
                                <nav className="header_links-nav">
                                    <ul className="header__links-ul row align-center">

                                        <li className="header__links-li row align-center" >
                                            <Link className='link__btn header__link-message' to='/user/login'>
                                                <FontAwesomeIcon icon={faBell} style={this.props.message.notifications?{color:'red'}:''}/>
                                            </Link>
                                        </li>
                                        <li className="header__links-li row align-center">
                                            <a className='link__btn header__link' href={Url.logoutscore}>
                                                Ելք
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                        }

                    </div>
            </header>
        );
    }
}
const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
