import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import CarsForm from "./CarsForm";
import './UserCars.scss'
import {royle} from "../../../redux/auto/color";
import SliderAuto from "./SliderAuto";
const usAuto = [
    {
        id:1,
        user_id:11,
        mark:'BMW',
        model:'BMW M5',
        royle:'Ձախ',
        transmission_box:'Ավտոմատ',
        color:'Կարմիր',
        year:'2015',
        fuel:'Բենզին',
        transmission: '',
        engine: '5,0',
        number:'77VS777',
        vin:'740-VH4477',
        img:[
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
            'https://bmw.vin.ua/files/images/units/covers/big/news-1005181.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/images/Res_the-new-bmw-m5-compe890_3.jpg',
            'https://usetrans.com/wp-content/uploads/2018/05/BMW-M5-Competition-2018-2019-7-min.jpg',
            'https://autoru-mag.s3.yandex.net/2020/05/28/233ec49f42aa4fc6a23cea3228e5b5ff.jpg'
        ],
        type:'Սեդան',
        category:'Թեթև մարդատար',
        traction:'4 քարծշակ',
        power:'401',
        price:'',
        milage:'',
        desc:'',
        state:'',
        data:''
    },
    {
        id:2,
        user_id:11,
        mark:'BMW',
        model:'BMW M5',
        royle:'Ձախ',
        transmission_box:'Ավտոմատ',
        color:'Կարմիր',
        year:'2015',
        fuel:'Բենզին',
        transmission: '',
        engine: '5,0',
        number:'77VS777',
        vin:'740-VH4477',
        img:[
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
        ],
        type:'Սեդան',
        category:'Թեթև մարդատար',
        traction:'4 քարծշակ',
        power:'401',
        price:'',
        milage:'',
        desc:'',
        state:'',
        data:''
    },
    {
        id:3,
        user_id:11,
        mark:'BMW',
        model:'BMW M5',
        royle:'Ձախ',
        transmission_box:'Ավտոմատ',
        color:'Կարմիր',
        year:'2015',
        fuel:'Բենզին',
        transmission: '',
        engine: '5,0',
        number:'77VS777',
        vin:'740-VH4477',
        img:[
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
        ],
        type:'Սեդան',
        category:'Թեթև մարդատար',
        traction:'4 քարծշակ',
        power:'401',
        price:'',
        milage:'',
        desc:'',
        state:'',
        data:''
    },
]

class UserCars extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="User__cars">
                {
                    usAuto.map(({
                                    id,
                                    user_id,
                                    mark,
                                    model,
                                    transmission_box,
                                    color,
                                    year,
                                    fuel,
                                    transmission,
                                    engine,
                                    number,
                                    vin,
                                    img,
                                    power,
                                    type,
                                    category,
                                    traction,
                                    royle
                                })=>(
                                    <div key={id} className='car col'>
                                        <div className='block-left'>
                                            <div className="car_name">
                                                <span>{model}</span>
                                            </div>
                                            <div className="car_slider">
                                                <SliderAuto autoImage={img}/>
                                            </div>

                                        </div>

                                        <div className='block-right'>
                                            <div className="car_info">
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <span>Շարժիչը</span>
                                                            <span style={}></span>
                                                        </li>
                                                        <li>
                                                            <span>Ձիաուժը</span>
                                                        </li>
                                                        <li>
                                                            <span>Տարեթիվ</span>
                                                        </li>
                                                        <li>
                                                            <span>Գույն</span>
                                                        </li>
                                                        <li>
                                                            <span>Փոխանցման տուփը</span>
                                                        </li>
                                                        <li>
                                                            <span>Ղեկը</span>
                                                        </li>
                                                        <li>
                                                            <span>Նույնացման համար (VIN)</span>
                                                        </li>
                                                        <li>
                                                            <span>Վառելիքը</span>
                                                        </li>
                                                        <li>
                                                            <span>Թափքի տեսակը</span>
                                                        </li>
                                                        <li>
                                                            <span>ՏՄ Տեսակը</span>
                                                        </li>
                                                    </ul>

                                                    <ul>
                                                        <li>
                                                            <span>{engine}</span>
                                                        </li>
                                                        <li>
                                                            <span>{power}</span>
                                                        </li>
                                                        <li>
                                                            <span>{year}</span>
                                                        </li>
                                                        <li>
                                                            <span>{color}</span>
                                                        </li>
                                                        <li>
                                                            <span>{transmission_box}</span>
                                                        </li>
                                                        <li>
                                                            <span>{royle}</span>
                                                        </li>
                                                        <li>
                                                            <span>{vin}</span>
                                                        </li>
                                                        <li>
                                                            <span>{fuel}</span>
                                                        </li>
                                                        <li>
                                                            <span>{type}</span>
                                                        </li>
                                                        <li>
                                                            <span>{category}</span>
                                                        </li>
                                                    </ul>
                                                </nav>

                                                {/*<div className="car__number">*/}
                                                {/*    <h1>*/}
                                                {/*        <span>{number[0]}{number[1]}</span>*/}
                                                {/*    </h1>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>

                                    </div>
                    ))
                }
            </div>
        )
    }
}

export default UserCars;