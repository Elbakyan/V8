
import React from 'react';
import {connect} from "react-redux";
import {Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faEnvelope,
    faMapMarkerAlt,
    faMobileAlt,
    faCog
} from "@fortawesome/free-solid-svg-icons";



class PersionalData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
    let data = this.props.user.data || this.props.score.score.data;
        // console.log(data);
        return (
            <div className="persional__data">

                {
                    data === undefined ? '' : (
                        <div>
                            <div className="persional__header">
                                <div className="img" style={{backgroundImage:`url(${data.img})`}}>
                                </div>
                                <div className="fullname">
                                    <span>{data.name}</span>
                                    <span>{data.surname}</span>
                                </div>
                                <div className="persional__setings">
                                    <Link to='/user/account/setings'><FontAwesomeIcon icon={faCog}/></Link>
                                </div>

                                {/*{*/}
                                {/*    this.props*/}
                                {/*}*/}
                            </div>

                            <div className="persional__body col justify-center align-center">

                                <nav>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faMobileAlt}/>
                                            </div>
                                            <div>
                                                <span>+374{data.phone}</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faEnvelope}/>
                                            </div>
                                            <div>
                                                <span>{data.email}</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                            </div>
                                            <div>
                                                <span>{data.sircle} {data.city}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>


                            </div>
                        </div>
                    )
                }


            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainPersionalData = connect(MapStateToProps)(PersionalData)

export default MainPersionalData;
