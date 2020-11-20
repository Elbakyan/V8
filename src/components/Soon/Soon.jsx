import React, {Component} from "react";
import {Redirect} from "react-router";
import './Soon.scss'

class Soon extends Component {
    render() {
        return (
            <div>
                <Redirect to={window.location.pathname}/>
                <div className='soon'>
                    <h1>Շուտով</h1>
                </div>
            </div>

        )
    }
}

export default Soon;