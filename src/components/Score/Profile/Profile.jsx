import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'




class Profile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <section className="Profile col">
                <div className="container">


                </div>

            </section>
        );
    }
}

const MapStateToProps = state => state;
const MainProfile = connect(MapStateToProps)(Profile)

export default MainProfile;
