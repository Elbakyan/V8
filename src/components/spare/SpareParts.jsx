import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";






class SpaerParts extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div>
                <Header/>
            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainSpaerParts= connect(MapStateToProps)(SpaerParts)

export default MainSpaerParts;
