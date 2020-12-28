import React from 'react';
import {Link} from "react-router-dom";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import Search from "../Search/Search";
import SITE_NAME, {Url} from "../config/Url";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PersonalData from "../User/Profile/PersionalData";
import PersionalDataScore from "../Score/Profile/PersionalDataScore";
import {GetMessage, GetStatus} from "../../redux/message/action";
import ModalRequest from "../Modal/ModalRequest";
import Art from "../Alert";
import {GetRequst} from "../../redux/GetRequest/action";
import PersionalData from "../User/Profile/PersionalData";
import './Home.scss'



class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            message: false,
            user: false,
        }
    }
    componentDidMount() {
        let id;
        if (this.props.user.status){
            id = this.props.user.id
            this.props.dispatch(GetMessage(id))

        }
        if (this.props.score.score.status){
            id = this.props.score.score.id
            this.props.dispatch(GetRequst())
        }
        this.props.dispatch(GetRequst())

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
        let status = 0;
        if (this.props.user.status){
            if (this.props.message.data.message.score){
                this.props.message.data.message.score.map(res => {
                    status += +res.status
                })
            }
            if (this.props.message.data.message.user){
                this.props.message.data.message.user.map(res => {
                    status += +res.status

                })
            }

        }
        if (this.props.score.score.status){
            if (this.props.request.request){
                this.props.request.request.map(res => {

                    status += res.message !== undefined?+res.message[0].status:0
                })
            }

        }
        return (
            <header style={{position: 'fixed'}}>
                <div className='header__desktop'>
                    {
                        this.props.user.status || this.props.score.score.status ?
                            this.state.modal?
                                <ModalRequest close={this.Close}/>:''
                            :
                            this.state.message?
                                <div className='user_warning'>
                                    <Art type='warning' content='Հարցում ուղարկելու համար անհրաժեշտ է գրանցվել․․․․'/>
                                </div>: ''
                    }
                    <div className="header__log">
                        <img src={SITE_NAME + "/Server/img/header_logo.png"} alt="logo" onClick={this.OpenModal}/>
                    </div>
                    <Search />

                    {
                        this.props.user.status?
                            <div className="persional__info">
                                <PersionalData />
                            </div>: ''
                    }
                    {
                        this.props.score.score.status?
                            <div className="persional__info">
                                <PersionalDataScore />
                            </div>:''
                    }
                    <div className="header__links ">
                        {
                            !this.props.score.score.status && !this.props.user.status?
                                <nav className="header_links-nav">
                                    <ul className="header__links-ul row align-center">
                                        <li className="header__links-li row align-center">
                                            <Link className='link__btn header__link' to='/user/login'>
                                                Իմ էջը
                                            </Link>
                                        </li>
                                        <li className="header__links-li row align-center">
                                            <Link className='link__btn header__link' to='/score/login'>
                                                Դառնալ գործընկեր
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>:this.props.user.status?
                                <nav className="header_links-nav">
                                    <ul className="header__links-ul row align-center">

                                        <li className="header__links-li row align-center">
                                            <Link className='link__btn header__link-message' to={this.props.user.status?'/user/account/persional':'/score/account/message/'}>
                                                <FontAwesomeIcon icon={faBell} style={status > 0?{color:'red'}:''}/>
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
                                            <Link className='link__btn header__link-message' to='/score/account/request'>
                                                <FontAwesomeIcon icon={faBell} style={status > 0?{color:'red'}:''}/>
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
                </div>
                <div className='header__phone'>
                    <Search />
                </div>

            </header>
        );
    }
}
const MapStateToProps = state => state;
const MainHeader = connect(MapStateToProps)(Header)

export default MainHeader;
