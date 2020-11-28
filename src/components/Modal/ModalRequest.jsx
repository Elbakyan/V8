import React from 'react';
import './modal.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {maser} from '../Menu/autoObj'
import DefaultSelect from "../forms/select/DefaultSelect";
import DefaultInput from "../forms/inputs/DefaultInput";

class ModalRequest extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.auto)
        return (
            <div className='ModalRequest' style={this.props.modal? {transform: 'scaleX(1)'}:{transform: 'scaleX(0)'}}>
                <div className="overlay" onClick={this.props.close}></div>
                <div className='modal__content'>
                    <div className="close" onClick={this.props.close}>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </div>
                    <div className="modal__title">
                        <h2>ՈՒղարկել հարցում</h2>
                    </div>
                    <div className="modal__block">
                        <div className='modal__items'>
                            <DefaultSelect data={maser} />
                        </div>
                        <div className='modal__items'>
                            <textarea name="" placeholder='Նկարագրությունը․․․'></textarea>
                        </div>
                        <div className='modal__items'>
                            <DefaultSelect data={this.props.location.sircle} />
                        </div>
                        <div className='modal__items'>Four</div>
                        <div className='modal__items'>
                            <label className=''>
                                <input type="file"/>
                            </label>
                        </div>
                        <div className='modal__items'>
                            <DefaultSelect data={this.props.auto.mark} />
                        </div>
                        <div className='modal__items'>
                            <DefaultSelect data={this.props.auto.model} />
                        </div>
                        <div className='modal__items'>
                            <DefaultInput
                                placeholder='VIN'
                            />
                        </div>
                        <div className='modal__items'>
                            <select name="" id="">
                                {
                                    this.props.auto.year.map(res => {
                                        return (
                                            <option key={res} value="res">{res}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='modal__items'>
                            <select name="" id="">
                                {
                                    this.props.auto.engine.map(res => {
                                        return (
                                            <option key={res} value="res">{res}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainModalRequest = connect(MapStateToProps)(ModalRequest)

export default MainModalRequest;
