import React, {Component} from "react";
import {Redirect} from "react-router";
import './Soon.scss'

class Soon extends Component {
    render() {
        return (
            <div className='soon'>
                <Redirect to={window.location.pathname}/>
                <div >
                    <a href="/">
                        <img src="https://brutal.am/Server/img/logo_1.svg" alt=""/>
                    </a>
                    <h1>Շուտով</h1>
                </div>
            </div>

        )
    }
}

export default Soon;