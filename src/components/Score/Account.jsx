import React from 'react';
import Header from '../Home/Header'
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
                {
                    this.props.auto.mark != false?
                        <Menu mark={this.props.auto.mark}/>:''

                }
                <Profile />
                <Footer/>
            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainAccount = connect(MapStateToProps)(Account);
export default MainAccount;