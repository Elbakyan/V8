import React from 'react';
import Header from './Header'
import {Link} from "react-router-dom";
import './Home.scss'


class Home extends React.Component{
    render() {
        return (
            <div className="Home">
                <Header/>
                Home
            </div>
        );
    }
}

export default Home;
