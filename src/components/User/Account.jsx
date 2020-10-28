import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";
import Menu from "../Menu/Menu";

class Account extends React.Component{
    render() {
        return (
            <div className="Account">
                <Header/>
                <Menu />
                <Profile/>
                <Footer/>
            </div>
        );
    }
}

export default Account;