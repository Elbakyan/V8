import React from 'react';
import {connect} from "react-redux";






class SpaerParts extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div>
                SpaerParts
            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainSpaerParts= connect(MapStateToProps)(SpaerParts)

export default MainSpaerParts;
