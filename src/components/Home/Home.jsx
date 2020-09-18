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
                <DefaultBtn name='btn' color='#c5c5c5' dark={50}/>
            </div>
        );
    }
}

export default Home;
