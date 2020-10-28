import React from 'react';
import Header from './Header'
import {Link, Redirect} from "react-router-dom";
import './Home.scss'
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Menu from "../Menu/Menu";

class Home extends React.Component{
    render() {
        return (
            <div className="Home">
                {this.props.userStatus? <Redirect to='/user/account'/> : <Redirect to='/'/>}
                {this.props.scoreStatus? <Redirect to={'/score/account'}/> : <Redirect to='/'/>}
                <Header/>
                <Menu />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Home;
