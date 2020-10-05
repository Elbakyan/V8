import React, {Component} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faDollarSign, faMobileAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";
import SliderAuto from "../User/UserCars/SliderAuto";
import {GET} from "../config/Requsest";
import {Url} from "../config/Url";

class Auto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.sell.OneAuto)
        let img;
        if (this.props.sell.OneAuto.img != undefined){
            img  = JSON.parse(this.props.sell.OneAuto.img)
            console.log(img)
        }
        let auto = this.props.sell.OneAuto;
        console.log('auto',auto)
        console.log(auto.later == true)
        return (

            <div className="Auto">
                <div>
                    <div className="car_name">
                        <span>{auto.model}</span>
                        <span className="phone_car_owner"><FontAwesomeIcon icon={faMobileAlt}/>{auto.phone}</span>
                    </div>
                    <div className="block">
                        <div className='block-left'>
                            <div className="car_slider">
                                {
                                    img == undefined ? '' : <SliderAuto autoImage={img}/>
                                }
                            </div>
                        </div>

                        <div className='block-right'>


                            <div className="car_info">

                                <table className="auto_parapters">
                                    <tbody>
                                    <tr>
                                        <td style={{color:'red'}}>
                                            {
                                                auto.dealer == 1?<h1>Դիլեր</h1>:<h1>Անհատ</h1>
                                            }
                                        </td>

                                    </tr>
                                    <tr style={{color:'green'}}>
                                        <td>Արժեք</td>

                                        {
                                            <td >
                                                {auto.price} <span style={{fontSize:'10px'}}><FontAwesomeIcon icon={faDollarSign}/></span>
                                            </td>
                                        }
                                    </tr>
                                    <tr>
                                        <td>Շարժիչը</td>
                                        <td>{auto.engine}</td>
                                    </tr>
                                    <tr>
                                        <td>Ձիաուժը</td>
                                        <td>{auto.power}</td>
                                    </tr>
                                    <tr>
                                        <td>Տարեթիվ</td>
                                        <td>{auto.year}</td>
                                    </tr>
                                    <tr>
                                        <td>Գույն</td>
                                        <td>{auto.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Փոխանցման տուփը</td>
                                        <td>{auto.transmission}</td>
                                    </tr>
                                    <tr>
                                        <td>Ղեկը</td>
                                        <td>{auto.royle}</td>
                                    </tr>
                                    <tr>
                                        <td>Քարշակը</td>
                                        <td>{auto.traction}</td>
                                    </tr>
                                    <tr>
                                        <td>Նույնացման համար (VIN)</td>
                                        <td>{auto.vin}</td>
                                    </tr>
                                    <tr>
                                        <td>Վառելիքը</td>
                                        <td>{auto.fuel}</td>
                                    </tr>
                                    <tr>
                                        <td>Թափքի տեսակը</td>
                                        <td>{auto.type}</td>
                                    </tr>
                                    <tr>
                                        <td>ՏՄ Տեսակը</td>
                                        <td>{auto.category}</td>
                                    </tr>
                                    <tr>
                                        <td>Վազք</td>
                                        <td>{auto.mileage} {auto.mesuruments}</td>
                                    </tr>
                                    <tr>
                                        <td>Մաս մաս վճարում</td>
                                        {
                                            auto.later == 1?<td><FontAwesomeIcon icon={faCheckCircle}/></td>:<td><FontAwesomeIcon icon={faTimesCircle}/></td>
                                        }
                                    </tr>
                                    <tr>
                                        <td>Մակսազերծված</td>
                                        {
                                            auto.сustoms_cleared == 1?<td><FontAwesomeIcon icon={faCheckCircle}/></td>:<td><FontAwesomeIcon icon={faTimesCircle}/></td>
                                        }
                                    </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="description_text">
                                <p>{auto.desc}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )


    }
}

const MapStateToProps = state => state;
const MainAuto = connect(MapStateToProps)(Auto)
export default MainAuto;
