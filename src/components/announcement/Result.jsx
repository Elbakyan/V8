import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";
import Auto from "./Auto";
import {GET, POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetSellByID} from "../../redux/sellauto/action";

class Result extends Component {
    constructor(props) {
        super(props);
    }

    GetAuto = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id);
        this.props.dispatch(GetSellByID(data))
    }

    render() {
        return (
            <div className="result">

                {
                    this.props.sell.data.data.map((auto,i) => {
                        let img = JSON.parse(auto.img);
                        return (
                            <div className="result_auto" key={i}>
                                <Link to={'/announcement/' + auto.id} data-id={auto.id} onClick={this.GetAuto}>
                                    <div data-id={auto.id}>
                                        <h2 className="price" data-id={auto.id}>{auto.model} </h2>
                                        <h2 className="price" data-id={auto.id}>{auto.price} <FontAwesomeIcon
                                            icon={faDollarSign}/></h2>
                                    </div>
                                    <div data-id={auto.id} className="img"
                                         style={{backgroundImage: `url(${img[0]})`}}></div>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Result)
export default MainResult;
