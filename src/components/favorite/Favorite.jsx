import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {AddFavorite, GetUserFavorite} from "../../redux/favorite/action";
import SellCar from "../announcement/SellCar";
import {GetSellByID} from "../../redux/sellauto/action";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";




class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: ''
        }

    }
    componentDidMount() {
        this.props.dispatch(GetUserFavorite())
    }
    GetAuto = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id);
        this.props.dispatch(GetSellByID(data))
    }
    Favorite = (e) =>{
        if (this.props.score.score.status) {
            let autoId = e.target.parentElement.parentElement.dataset.id;
            let data = new FormData();
            data.append('id', this.props.score.score.id);
            data.append('state', 'score');
            data.append('auto_id', autoId);
            this.props.dispatch(AddFavorite(data))
            this.props.dispatch(GetUserFavorite())
        }
        if (this.props.user.status) {
            let autoId = e.target.parentElement.parentElement.dataset.id;
            let data = new FormData();
            data.append('state', 'user');
            data.append('id', this.props.user.id);
            data.append('auto_id', autoId);
            this.props.dispatch(AddFavorite(data))
            this.props.dispatch(GetUserFavorite())
        }
        console.log(e.target.parentElement.parentElement.dataset.id)

        this.props.dispatch(GetUserFavorite())

    }
    render() {
        if(this.props.favorite.userFavorite){
            return (
                <div className="result">
                    {
                        this.props.favorite.userFavorite.map((auto,i) => {
                            return (
                                <div className="result_auto" key={i}>
                                <span className="favorite_block" data-id={auto.id}  onClick={this.Favorite}>
                                    <span data-id={auto.id} >
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </span>
                                </span>
                                    <Link to={'/announcement/' + auto.id} data-id={auto.id} onClick={this.GetAuto}>
                                        <SellCar Auto={auto} />
                                    </Link>
                                </div>
                            )

                        })
                    }
                </div>
            )
        }

    }
}

const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Favorite)
export default MainResult;
