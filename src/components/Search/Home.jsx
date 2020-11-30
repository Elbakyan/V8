import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {maser, service} from "../Menu/autoObj";

class Home extends Component {
    render() {
        return(
            <div className="header_menu">

                <nav>
                    <ul className="menu">
                        <li>
                            <Link to='/'>
                                    <span className='home_button menu_button'>
                                        HOME
                                    </span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Home;