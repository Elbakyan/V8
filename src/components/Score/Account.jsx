import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: true,
        }
    }

    render() {
        return (
            <div className="Account">
                <Header/>
                <Menu/>
                <Profile />
                <Footer/>
            </div>
        );
    }
}

const MapStateToProps = state => state.score;
const MainAccount = connect(MapStateToProps)(Account);
export default MainAccount;