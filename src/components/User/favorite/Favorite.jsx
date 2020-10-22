import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {AddFavorite, GetUserFavorite} from "../../../redux/favorite/action";
import SellCar from "../../announcement/SellCar";
import {GetSellByID} from "../../../redux/sellauto/action";




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
        let autoId = e.target.parentElement.parentElement.dataset.id;
        let data = new FormData();
        data.append('id', this.props.user.id);
        data.append('auto_id', autoId);
        this.props.dispatch(AddFavorite(data))
        this.props.dispatch(GetUserFavorite())
        console.log(this.props.favorite)

    }
    render() {
        return (
            <div className="result">
                {
                    this.props.favorite.userFavorite.map((auto,i) => {
                        console.log(auto)
                            return (
                                <div className="result_auto" key={i}>
                                <span className="favorite_block" data-id={auto.id}  onClick={this.Favorite}>
                                    <span data-id={auto.id} >
                                        <FontAwesomeIcon icon={sol} />
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

const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Favorite)
export default MainResult;
