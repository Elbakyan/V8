import React from 'react';
import Header from './Header'
import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../buttons/DefaultBtn";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";




class Home extends React.Component{
    render() {
        return (
            <div className="Home">
                <Header/>
                <Content />
                <DefaultBtn name='btn' color='#c5c5c5' dark={50}/>
                <Footer />
            </div>
        );
    }
}

export default Home;
