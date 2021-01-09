import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SellCar.scss'
import {connect} from "react-redux";
import {faDollarSign, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import formatData from "../config/formatData";


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
        e.target.childNodes[0].style.background = '#322C4A'
    }


    render() {

        let img = this.props.dataImg?JSON.parse(this.props.dataImg):[];
        let navWidth = (100 / img.length) + '%' ;

        return (
                <div
                    className="getSellCar"
                    data-id={this.props.dataId}
                    data-user={this.props.dataUser}
                    style={{marginTop:this.props.top}}
                >


                <div className="getSellCar_header" data-id={this.props.dataId} data-user={this.props.dataUser}>


                    <div className="getSellCar_header_image" data-id={this.props.dataId} data-user={this.props.dataUser} style={{backgroundImage:`url(${img[this.state.index]})`}}>
                    </div>

                    <div className="getSellCar_header_check" data-id={this.props.dataId} data-user={this.props.dataUser}>
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
                                    data-id={this.props.dataId}
                                >
                                    <span data-id={this.props.dataId} className='getSellCar_block'></span>
                                </div>:''
                            ))
                        }
                    </div>
                </div>

                <div className="getSellCar_body" data-id={this.props.dataId} >
                    <div className='getSellCar_body_block1' data-id={this.props.dataId} data-user={this.props.dataUser}>
                        <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.name}</span>
                    </div>
                    <div className='getSellCar_body_block2' data-id={this.props.dataId} data-user={this.props.dataUser}>
                        <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.price} <span style={{
                            fontWeight: 'bold',
                            fontSize: '14px'
                        }}> {this.props.mony}</span></span>
                        <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.year}</span>
                    </div>
                    <div className='getSellCar_body_block2' data-id={this.props.dataId} data-user={this.props.dataUser}>
                        <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.sircle}</span>
                        <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.city}</span>
                    </div>
                    <div className='getSellCar_body_block3' data-id={this.props.dataId} data-user={this.props.dataUser}>
                        {
                            this.props.data? <span data-id={this.props.dataId} data-user={this.props.dataUser}>{formatData(this.props.data)}</span>:''
                        }

                    </div>
                </div>
            </div>
        )
    }
}


// const MapStateToProps = state => state;
// const MainSellCar = connect(MapStateToProps)(SellCar)
export default SellCar;