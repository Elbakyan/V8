import React from 'react';
import Header from './Header'
import {Redirect} from "react-router-dom";
import './Home.scss'
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header/>
                <Menu/>
                <Content/>
                <Footer/>
                {
                    this.props.score.score.status ? <Redirect to='/score/account'/> : ''
                }
                {
                    this.props.user.status ? <Redirect to='/user/account'/> : ''
                }
            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainHome = connect(MapStateToProps)(Home)
export default MainHome;
