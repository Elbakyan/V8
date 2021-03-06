import React from 'react';
import Header from '../Home/Header'
import Footer from "../Footer/Footer";
import Profile from "./Profile/Profile";
import Menu from "../Menu/Menu";
import {GetAuto} from "../../redux/auto/action";
import {connect} from "react-redux";
import {GetRequst} from "../../redux/GetRequest/action";

class Account extends React.Component{
    componentDidMount() {
        this.props.dispatch(GetAuto(this.props.user.id))
        this.props.dispatch(GetRequst())
    }

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

const MapStateToProps = state => state;
const MainAccount = connect(MapStateToProps)(Account)
export default MainAccount;