import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {connect} from "react-redux";

class ListGlobalAutoParts extends  Component{
    render() {
        console.log(this.props)
        return(
            // <div className='parts_list_global'>
                <div className="get_list_auto_parts">
                    <div className='list_header'>
                        <ul>
                            <li>Ապրանքանիշը</li>
                            <li>Նոր</li>
                            <li>Օգտագործ</li>
                        </ul>
                    </div>
                    <div className="list_body">

                    </div>

                {/*</div>*/}
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location,
        auto: state.auto
    }
}

const MainListGlobalAutoParts = connect(MapStateToProps)(ListGlobalAutoParts);
export default MainListGlobalAutoParts;