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
import {GET, POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetSellByID} from "../../redux/sellauto/action";
import SellCar from "./SellCar";


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: ''
        }

    }
    componentDidMount() {
        let data = new FormData()
        data.append('id', this.props.user.status.id)
        POST(Url.getFavorite,data).then(res =>{
            this.setState({
                favorite: res
            })
        })
    }

    GetAuto = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id);

        this.props.dispatch(GetSellByID(data))
    }

    render() {

        return (
            <div className="result">
                {/*<SellCar />*/}
                {/*<SellCar />*/}
                {
                    this.props.sell.data.data.map((auto,i) => {

                        let img = JSON.parse(auto.img);
                        return (
                            <div className="result_auto" key={i}>
                                <Link to={'/announcement/' + auto.id} data-id={auto.id} onClick={this.GetAuto}>
                                    <SellCar Auto={auto} favorite={this.state.favorite} />
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
