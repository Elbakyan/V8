import React, {Component} from "react";
import {Link} from "react-router-dom";


class AdminManu extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to={'/administrator/slider'}>Slider</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default AdminManu;