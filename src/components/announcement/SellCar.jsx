import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCoffee, faDollarSign, faMobileAlt, faEnvelopeOpenText, faHeart} from '@fortawesome/free-solid-svg-icons'
// import {faCoffee, faDollarSign@fortawesome/free-light-svg-icons', faMobileAlt, faEnvelopeOpenText, faHeart} from '

import './SellCar.scss'
import {faHeart as reg} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faHeart as sol} from "@fortawesome/free-solid-svg-icons/faHeart";
import {GET, POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GET_FAVORITE, GetFavorite} from "../../redux/favorite/action";
import {connect} from "react-redux";
import {faDollarSign, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {GetMessage} from "../../redux/message/action";

const img = [
    'https://www.dw.com/image/19571759_303.jpg',
    'https://cdn.motor1.com/images/mgl/7J3z7/s3/novo-bmw-serie-5-2021-vazamentos.jpg',
    'https://cdn.iz.ru/sites/default/files/news-2020-03/11-bmw-i4-concept-2020-stationary-front.jpg',
    'https://img.championat.com/s/735x490/news/big/m/k/bmw-m3-gtr-iz-need-for-speed_1586771935252102084.jpg'
]

class SellCar extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            isFav: false

        }


    }


    out = (e)=>{
        let span = document.querySelector('.'+e.target.className + '>span')
        e.target.childNodes[0].style.background = 'silver'
    }

    show = (e)=>{
        this.setState({
            index:e.target.dataset.src
        })
        let span = document.querySelector('.'+e.target.className + '>span')
        e.target.childNodes[0].style.background = 'blue'


    }


    render() {
        let img = JSON.parse(this.props.Auto.img);
        let navWidth = (100 / img.length) + '%' ;
        return (
            <div className="getSellCar" data-id={this.props.Auto.id} data-user={this.props.Auto.user_id}>
                <div className="getSellCar_header" data-id={this.props.Auto.id} data-user={this.props.Auto.user_id}>

                    <div className="getSellCar_header_image" data-id={this.props.Auto.id} data-user={this.props.Auto.user_id} style={{backgroundImage:`url(${img[this.state.index]})`}}>
                    </div>

                    <div className="getSellCar_header_check" data-id={this.props.Auto.id} data-user={this.props.Auto.user_id}>
                        {
                            img.map((e,i)=>(
                                img.length > 1?
                                <div
                                    className={'block' + i}
                                    key={i}
                                    onMouseOut={this.out}
                                    onMouseOver={this.show}
                                    data-src={i}
                                    style={{width:navWidth}}
                                    data-id={this.props.Auto.id}
                                >
                                    <span data-id={this.props.Auto.id} className='getSellCar_block'></span>
                                </div>:''
                            ))
                        }
                    </div>
                </div>

                <div className="getSellCar_body" data-id={this.props.Auto.id} >
                    <div className='getSellCar_body_block1' data-id={this.props.Auto.id}>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.model}</span>
                    </div>
                    <div className='getSellCar_body_block2' data-id={this.props.Auto.id}>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.price} <FontAwesomeIcon icon={faDollarSign} /></span>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.year}</span>
                    </div>
                    <div className='getSellCar_body_block2' data-id={this.props.Auto.id}>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.city}</span>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.sircle}</span>
                    </div>
                    <div className='getSellCar_body_block2' data-id={this.props.Auto.id}>
                        <span data-id={this.props.Auto.id}>{this.props.Auto.data.split(' ')[0]}</span>
                    </div>
                </div>

            </div>
        )
    }
}


const MapStateToProps = state => state;
const MainSellCar = connect(MapStateToProps)(SellCar)
export default MainSellCar;