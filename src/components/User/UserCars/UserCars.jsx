import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import CarsForm from "./CarsForm";
import './UserCars.scss'
import {royle} from "../../../redux/auto/Values";
import SliderAuto from "./SliderAuto";
import engine from './icon/car-engine.svg'
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {GetModel} from "../../../redux/auto/action";
import DefaultSelect from "../../forms/select/DefaultSelect";

const usAuto = [
    {
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
        price: '',
        milage: '',
        desc: '',
        state: '',
        data: ''
    },
    {
        id: 2,
        user_id: 11,
        mark: 'BMW',
        model: 'BMW M5',
        royle: 'Ձախ',
        transmission_box: 'Ավտոմատ',
        color: 'Կարմիր',
        year: '2015',
        fuel: 'Բենզին',
        transmission: '',
        engine: '5,0',
        number: 'XX YY XXX',
        vin: '740-VH4477',
        img: [
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
            'https://bmw.vin.ua/files/images/units/covers/big/news-1005181.jpg',
            'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/images/Res_the-new-bmw-m5-compe890_3.jpg',
            'https://usetrans.com/wp-content/uploads/2018/05/BMW-M5-Competition-2018-2019-7-min.jpg',
            'https://usetrans.com/wp-content/uploads/2018/05/BMW-M5-Competition-2018-2019-7-min.jpg',
            'https://usetrans.com/wp-content/uploads/2018/05/BMW-M5-Competition-2018-2019-7-min.jpg',
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
        ],
        type: 'Սեդան',
        category: 'Թեթև մարդատար',
        traction: '4 քարծշակ',
        power: '401',
        price: '',
        milage: '',
        desc: '',
        state: '',
        data: ''
    },
    {
        id: 3,
        user_id: 11,
        mark: 'BMW',
        model: 'BMW M5',
        royle: 'Ձախ',
        transmission_box: 'Ավտոմատ',
        color: 'Կարմիր',
        year: '2015',
        fuel: 'Բենզին',
        transmission: '',
        engine: '5,0',
        number: '77 VS 777',
        vin: '740-VH4477',
        img: [
            'https://ag-spots-2015.o.auroraobjects.eu/2015/02/14/other/2880-1800-crop-bmw-m5-f10-30-jahre-edition-c160914022015234303_1.jpg',
        ],
        type: 'Սեդան',
        category: 'Թեթև մարդատար',
        traction: '4 քարծշակ',
        power: '401',
        price: '',
        milage: '',
        desc: '',
        state: '',
        data: ''
    },
]

class UserCars extends Component {
    constructor(props) {
        super(props);
    }

    openSell = (e) => {
        console.log(e.target.className)
        if(e.target.innerHTML === 'Վաճառել'){
            e.target.innerHTML = "Հրաժարվել վաճառքից"
        }else {
            e.target.innerHTML = "Վաճառել"
        }
        console.log(e.target.innerHTML)
        const block = document.querySelectorAll('.' + e.target.className)
        console.log(block)
        block[1].classList.toggle('sell_user_car_open')
    }

    render() {
        return (
            <div>
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
                                        engine,
                                        number,
                                        vin,
                                        img,
                                        power,
                                        type,
                                        category,
                                        traction,
                                        royle
                                    }) => (
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
                                        <table className="auto_parapters">
                                            <tbody>
                                            <tr>
                                                <td>Շարժիչը</td>
                                                <td>{engine}</td>
                                            </tr>
                                            <tr>
                                                <td>Ձիաուժը</td>
                                                <td>{power}</td>
                                            </tr>
                                            <tr>
                                                <td>Տարեթիվ</td>
                                                <td>{year}</td>
                                            </tr>
                                            <tr>
                                                <td>Գույն</td>
                                                <td>{color}</td>
                                            </tr>
                                            <tr>
                                                <td>Փոխանցման տուփը</td>
                                                <td>{transmission_box}</td>
                                            </tr>
                                            <tr>
                                                <td>Ղեկը</td>
                                                <td>{royle}</td>
                                            </tr>
                                            <tr>
                                                <td>Քարշակը</td>
                                                <td>{traction}</td>
                                            </tr>
                                            <tr>
                                                <td>Նույնացման համար (VIN)</td>
                                                <td>{vin}</td>
                                            </tr>
                                            <tr>
                                                <td>Վառելիքը</td>
                                                <td>{fuel}</td>
                                            </tr>
                                            <tr>
                                                <td>Թափքի տեսակը</td>
                                                <td>{type}</td>
                                            </tr>
                                            <tr>
                                                <td>ՏՄ Տեսակը</td>
                                                <td>{category}</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <div className="sell_cars">
                                            <div className="number_cars">
                                                <span>{number}</span>
                                            </div>
                                            <DefaultBtn
                                                onClick={this.openSell}
                                                name='Վաճառել'
                                                width="200px"
                                                className={'sell_user_car' + id}
                                                type='submit'
                                                background='#143645'
                                                color='#ffffff'
                                                light={30}
                                            />
                                        </div>
                                        <div className={'sell_user_car sell_user_car' + id + ' sell_user_car_open'}>
                                            <form id="sellCar">
                                                <div className="left_block">
                                                    <div className="left_block_inp">
                                                        <div className="left_block_inp_measurements">
                                                            <DefaultInput
                                                                width="55%"
                                                                height='50px'
                                                                type='number'
                                                                name='mileage'
                                                                placeholder='Վազքը'
                                                            />

                                                            <DefaultSelect
                                                                width="35%"
                                                                height='50px'
                                                                name='measurements'
                                                                data={[
                                                                    {
                                                                        name:'Kilometer'
                                                                    },
                                                                    {
                                                                        name:'Miles'
                                                                    }
                                                                ]}
                                                            />
                                                        </div>

                                                        <DefaultInput
                                                            type='number'
                                                            name='price'
                                                            placeholder='Արժեքը'
                                                            width="40%"
                                                            height='50px'
                                                        />
                                                    </div>


                                                    <div className="left_block_check">
                                                        <label>
                                                            Մակսազերծված է
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='description'
                                                                value="Մակսազերծված է"
                                                            />
                                                        </label>
                                                        <label>
                                                            Մաս մաս վճարում
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='description'
                                                                value="Մակսազերծված է"
                                                            />
                                                        </label>
                                                        <label>
                                                            Դիլեր
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='description'
                                                                value="Մակսազերծված է"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="right_block">
                                                           <textarea className="description_text"
                                                                     rows="4"
                                                                     cols="50"
                                                                     name="description"
                                                                     form="sellCar"
                                                                     placeholder="Նկարագրություն..."
                                                           />
                                                </div>

                                                <DefaultBtn
                                                    width="100%"
                                                    name='Առաջ'
                                                    type='submit'
                                                    background='#143645'
                                                    color='#ffffff'
                                                    light={30}
                                                />
                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default UserCars;