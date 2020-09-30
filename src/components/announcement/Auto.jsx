import React, {Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";
import SliderAuto from "../User/UserCars/SliderAuto";

class Auto extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            id,
            ser_id,
            mark,
            model,
            transmission_box,
            color,
            year,
            fuel,
            engine,
            phone,
            number,
            vin,
            img,
            power,
            type,
            category,
            traction,
            royle,
            mileage,
            mesuruments,
            price,
            desc
        } = this.props.data
        return (
            <div className="Auto">
                <div className="car_name">
                    <span>{model}</span>
                    <span className="phone_car_owner"><FontAwesomeIcon icon={faMobileAlt} />{phone}</span>
                </div>
                <div className="block">
                    <div className='block-left'>
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
                                <tr>
                                    <td>Վազք</td>
                                    <td>{mileage} {mesuruments}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="description_text">
                            <p>{desc}</p>
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
