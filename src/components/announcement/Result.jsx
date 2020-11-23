import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetSellByID} from "../../redux/sellauto/action";
import SellCar from "./SellCar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faHeart as reg} from "@fortawesome/free-regular-svg-icons/faHeart";
import {AddFavorite, GetFavorite, GetUserFavorite} from "../../redux/favorite/action";
import {GetDialogId, GetId, GetMessage} from "../../redux/message/action";


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: ''
        }
    }
    componentDidMount() {
        this.props.dispatch(GetFavorite())
    }

    GetAuto = (e) => {
        this.props.dispatch(GetSellByID(e.target.dataset.id))
        this.props.dispatch(GetId(e.target.dataset.id))
    }

    Favorite = (e) =>{
        let autoId = e.target.parentElement.parentElement.dataset.id;
        let data = new FormData();
        if (this.props.user.status){
            data.append('id', this.props.user.id);
            data.append('auto_id', autoId);
            this.props.dispatch(AddFavorite(data))
        }
        if (this.props.score.score.status){
            data.append('id', this.props.score.score.id);
            data.append('auto_id', autoId);
            this.props.dispatch(AddFavorite(data))
        }
        this.props.dispatch(GetFavorite())
    }
    render() {

        return (
            <div className="result">
                {
                    this.props.sell.data.data.map((auto,i) => {
                        let res = false;
                        this.props.favorite.favorite.map((e)=> {
                          if (e == auto.id){
                                res = true
                          }
                        })

                        let img = JSON.parse(auto.img);
                        return (
                            <div className="result_auto" key={i}>

                                <span className="favorite_block" data-id={auto.id}  onClick={this.Favorite}>
                                    <span data-id={auto.id} >
                                        {
                                            this.props.user.id === undefined &&
                                                this.props.score.score.id === undefined?'':
                                                res?<FontAwesomeIcon icon={sol} />:<FontAwesomeIcon icon={reg} />
                                        }
                                    </span>
                                </span>

                                <Link to={'/announcement/' + auto.id} data-id={auto.id} onClick={this.GetAuto}>
                                    <SellCar Auto={auto} favorite={this.props.favorite} res={res}  />
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
