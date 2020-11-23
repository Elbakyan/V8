import React, {Component} from "react";
import {Redirect} from "react-router";
import './PageNotFound.scss'
import SITE_NAME from "../config/Url";
import {Link} from "react-router-dom";

const style = {
    backgroundImage:'url()'
}

class PageNotFound extends Component {
    render() {
        return (
            <div className='PageNotFound' style={{backgroundImage: `url(${SITE_NAME}/Server/img/NoteFound.png)`}}>
                <div className="header__logo">
                    <Link to="/">
                        <img src={SITE_NAME + "/Server/img/logo_1.svg"} alt=""/>
                    </Link>
                </div>
            </div>

        )
    }
}

export default PageNotFound;