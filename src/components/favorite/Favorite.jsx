import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {AddFavorite, GetUserFavorite} from "../../redux/favorite/action";
import SellCar from "../announcement/SellCar";
import {GetSellByID} from "../../redux/sellauto/action";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {GetId} from "../../redux/message/action";


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
                                    <div className="watch">
                                        {/*<p>*/}
                                        {/*    <span><FontAwesomeIcon icon={faEye}/></span>*/}
                                        {/*    <span>{auto.watch}</span>*/}
                                        {/*</p>*/}
                                        <span className="favorite_block" data-id={auto.id} onClick={this.Favorite}>
                                            <span data-id={auto.id}>
                                                {
                                                    this.props.user.id === undefined &&
                                                    this.props.score.score.id === undefined ? '' :
                                                        <FontAwesomeIcon icon={faTimesCircle} />
                                                }
                                            </span>
                                        </span>
                                    </div>
                                        <SellCar
                                            dataId={auto.id}
                                            dataUser={auto.user_id}
                                            name={auto.model}
                                            price={auto.price}
                                            year={auto.year}
                                            sircle={auto.sircle}
                                            data={auto.data}
                                            city={auto.city}
                                            dataImg={auto.img}
                                            click={
                                                (e)=>{
                                                    let data = new FormData();
                                                    data.append('id', e.target.dataset.id);
                                                    this.props.dispatch(GetSellByID(data))
                                                }
                                            }
                                        />

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
