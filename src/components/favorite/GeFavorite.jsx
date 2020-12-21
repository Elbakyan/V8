import React, {Component} from "react";
import {connect} from "react-redux";
import './GeFavorite.scss'
import Favorite from "./Favorite";

class GeFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            activePage: 15
        }
    }

    render() {
        return (
            <div className='auto_content'>
                <Favorite />
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainGeFavorite = connect(MapStateToProps)(GeFavorite)
export default MainGeFavorite;
