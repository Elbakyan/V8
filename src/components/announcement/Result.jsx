import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
                        <div className="result">
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://tcf.admeen.org/game/17500/17042/400x246/customize-bmw-i8.jpg)'}}></div>
                                </Link>
                            </div>


                        </div>
        )
    }
}
const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Result)
export default MainResult;
