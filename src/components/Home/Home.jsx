import React from 'react';
import Header from './Header'
import {Link} from "react-router-dom";
import './Home.scss'
import DefaultBtn from "../buttons/DefaultBtn";

class Home extends React.Component{
    render() {
        return (
            <div className="Home">
                <Header/>
            </div>
        );
    }
}

export default Home;
