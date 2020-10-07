import React, {Component} from 'react';
import {connect} from "react-redux";


class Favorite extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='Favorite'>
                Favorite
            </div>
        )
    }

}

const MapStateToProps = state => state;
const MainFavorite = connect(MapStateToProps)(Favorite)

export default MainFavorite;