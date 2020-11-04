import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";
import Menu from "../Menu/Menu";
import Result from "../Search/Result";
import {Route} from "react-router-dom";
import StoreInfo from "../StoreInfo/StoreInfo";

const data = [
    'https://fin-az.ru/assets/i/ai/4/3/2/i/2915122.jpg',
    'https://fin-az.ru/assets/i/ai/4/3/2/i/2915122.jpg',
    'https://fin-az.ru/assets/i/ai/4/3/2/i/2915122.jpg'
]
class Account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: true
        }
    }

    render() {
        return (
            <div className="Account">
                <Header/>
                <Menu />
                <Profile/>
                <StoreInfo img={data}/>
                <Footer/>
            </div>
        );
    }
}

export default Account;