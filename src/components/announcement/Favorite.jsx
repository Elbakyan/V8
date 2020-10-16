import React, {Component} from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faDollarSign} from '@fortawesome/free-solid-svg-icons'
// import DefaultInput from "../forms/inputs/DefaultInput";
// import DefaultBtn from "../forms/buttons/DefaultBtn";
// import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
// import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";
// import Auto from "./Auto";
// import {GET, POST, TEST_POST} from "../config/Requsest";
// import {Url} from "../config/Url";
import {GetSellByID} from "../../redux/sellauto/action";
import SellCar from "./SellCar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faHeart as reg} from "@fortawesome/free-regular-svg-icons/faHeart";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {AddFavorite, GetFavorite} from "../../redux/favorite/action";


class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: ''
        }

    }


    GetAuto = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id);
        this.props.dispatch(GetSellByID(data))
    }
    Favorite = (e) =>{
        let autoId = e.target.parentElement.parentElement.dataset.id;
        let data = new FormData();
        data.append('id', this.props.user.id);
        data.append('auto_id', autoId);
        this.props.dispatch(AddFavorite(data))

    }
    render() {
        return (
            <div className="result">
                {
                    this.props.sell.data.data.map((auto,i) => {

                        let res = false;
                        this.props.favorite.map((e)=> {
                            if (e == auto.id){
                                res = true
                            }
                        })


                        let img = JSON.parse(auto.img);
                        if(res){
                            console.log(res)
                            return (
                                <div className="result_auto" key={i}>
                                <span className="favorite_block" data-id={auto.id}  onClick={this.Favorite}>
                                    <span data-id={auto.id} >
                                        {
                                            res?<FontAwesomeIcon icon={sol} />:<FontAwesomeIcon icon={reg} />
                                        }
                                    </span>
                                </span>
                                    <Link to={'/announcement/' + auto.id} data-id={auto.id} onClick={this.GetAuto}>
                                        <SellCar Auto={auto} favorite={this.props.favorite} res={res}  />
                                    </Link>

                                </div>
                            )
                        }

                    })
                }

            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Favorite)
export default MainResult;
