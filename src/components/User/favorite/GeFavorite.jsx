import React, {Component} from "react";
// import './Announcement.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {Link, Redirect, Route} from "react-router-dom";
import {GetFavorite} from "../../../redux/favorite/action";
import {GetSell} from "../../../redux/sellauto/action";
import Favorite from "../../announcement/Favorite";
import './GeFavorite.scss'
// import Favorite from "../User/favorite/Favorite";




class GeFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(GetSell(1))
        this.props.dispatch(GetFavorite(this.props.user.id))
    }


    Count = () =>{
        let arr = [];
        if(this.props.sell.count != undefined){
            if (this.props.sell.count % 15 == 0){
                for (let i = 1; i <= (this.props.sell.count / 15); i++){
                    arr.push(i)
                }
            }else{
                for (let i = 1; i <= ((this.props.sell.count / 15) + 1); i++){
                    arr.push(i)
                }

            }

        }
        return arr
    }


    render() {

        return (
            <div className='auto_content'>
                <div className='pagination'>
                    <ul className='pagination'>
                        {
                            this.Count().map((btn,i) => {
                                return (
                                    <li >
                                        <a className='pagination_link' href='#' id={i == 0? 1:i * 15} onClick={this.GetLimitAuto}>
                                            {i + 1}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Favorite />
            </div>
        )
    }
}
const MapStateToProps = state => state;
const MainGeFavorite = connect(MapStateToProps)(GeFavorite)
export default MainGeFavorite;
