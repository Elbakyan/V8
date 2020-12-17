import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ServiceProduct.scss'
import {connect} from "react-redux";
import {faDollarSign, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


class ServiceProduct extends  Component {
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
        let img = this.props.dataImg
        let navWidth = (100 / img.length) + '%' ;
        return (
            // <Link to={'/announcement/' + this.props.dataId} data-id={this.props.dataId} onClick={this.props.click}>
                <div
                    className="getService"
                    data-id={this.props.dataId}
                    data-user={this.props.dataUser}
                    style={{marginTop:this.props.top}}
                >


                    <div className="getService_header" data-id={this.props.dataId} data-user={this.props.dataUser}>


                        <div className="getService_header_image" data-id={this.props.dataId} data-user={this.props.dataUser} style={{backgroundImage:`url(${img[this.state.index]})`}}>
                        </div>

                        <div className="getService_header_check" data-id={this.props.dataId} data-user={this.props.dataUser}>
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

                    <div className="getService_body" data-id={this.props.dataId} >
                        <div className={this.props.name.length < 30? 'getService_body_block1':'getService_body_block1_hover'} data-id={this.props.dataId} data-user={this.props.dataUser}>
                            <span
                                data-id={this.props.dataId}
                                data-user={this.props.dataUser}
                                // style={this.props.name.length > 30?{fontSize:'12px'}:{fontSize:'12px'}}
                            >
                                {this.props.name}
                            </span>
                        </div>
                        <div className={this.props.declaration.length >= 1?'getService_body_block2_hover':'getService_body_block2'} data-id={this.props.dataId} data-user={this.props.dataUser}>
                            {/*<span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.declaration} </span>*/}
                            {/*{*/}
                            {/*        <span>*/}
                            {/*            {this.props.declaration}*/}
                            {/*        </span>*/}
                            {/*}*/}
                        </div>
                        <div className='getService_body_block3' data-id={this.props.dataId} data-user={this.props.dataUser}>
                            <span data-id={this.props.dataId} data-user={this.props.dataUser}>{this.props.sircle}</span>
                            <span
                                data-id={this.props.dataId}
                                data-user={this.props.dataUser}
                                // style={this.props.city.length > 10?{fontSize:"10px"}:{fontSize:"14px"}}
                            >
                                {this.props.city.split(' ')[0]}
                                <br/>
                                {this.props.city.split(' ')[1]}
                            </span>
                        </div>
                    </div>
                    <div className="getService_description">

                    </div>

                </div>
            // </Link>
        )
    }
}


// const MapStateToProps = state => state;
// const MainSellCar = connect(MapStateToProps)(SellCar)
export default ServiceProduct;