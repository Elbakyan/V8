import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";
import Auto from "./Auto";

const data = {
        id: 1,
        user_id: 11,
        mark: 'BMW',
        model: 'BMW M5',
        royle: 'Ձախ',
        transmission_box: 'Ավտոմատ',
        color: '-',
        year: '2015',
        fuel: 'Բենզին',
        transmission: '',
        engine: '5,0',
        number: '99 VA 969',
        vin: '740-VH4477',
        phone:'37494009935',
        img: [
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
            'https://bmw.vin.ua/files/images/units/covers/big/news-1005181.jpg',
            'https://www.ludoviccareme.com/files/image_211_image_fr.jpg',
            'https://usetrans.com/wp-content/uploads/2018/05/BMW-M5-Competition-2018-2019-7-min.jpg',
            'https://i.pinimg.com/originals/d5/90/1b/d5901b60b9fd42ec907d79d473ea5bd0.jpg'
        ],
        type: 'Սեդան',
        category: 'Թեթև մարդատար',
        traction: '4 քարծշակ',
        power: '401',
        price: '500',
        mesuruments:'kilometr',
        mileage: '120000',
        desc: 'BMW M5 — доработанная подразделением BMW Motorsport версия автомобиля BMW пятой серии. Первое поколение было представлено в 1986 году. Последующие поколения M5 сменялись совместно с каждым поколением автомобилей пятой серии, включающей E34, E39, E60/61, F10',
        state: '',
        data: ''
    }

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
                        <div className="result">
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1200px-2016_BMW_i8.jpg)'}}></div>
                                </Link>
                            </div>
                            <div className="result_auto">
                                <Link to='/announcement/1'>
                                    <div>
                                        <h2 className="price">BMW I8 </h2>
                                        <h2 className="price">1500 <FontAwesomeIcon icon={faDollarSign} /></h2>
                                    </div>
                                    <div className="img" style={{backgroundImage: 'url(https://tcf.admeen.org/game/17500/17042/400x246/customize-bmw-i8.jpg)'}}></div>
                                </Link>
                            </div>

                        <Auto data={data}/>
                        </div>
        )
    }
}
const MapStateToProps = state => state;
const MainResult = connect(MapStateToProps)(Result)
export default MainResult;
