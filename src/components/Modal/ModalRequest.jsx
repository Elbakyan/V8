import React, {Fragment} from 'react';
import './modal.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {parts} from '../Menu/autoObj'
import DefaultSelect from "../forms/select/DefaultSelect";
import DefaultInput from "../forms/inputs/DefaultInput";
import SpeareParts from "./SpeareParts";
import Test from "./Test";
import {GetModel} from "../../redux/auto/action";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import Art from "../Alert";
import {Redirect} from "react-router";

class ModalRequest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mark: false,
            model: false,
            vin:false,
            year: false,
            engine: false,
            imgName: 'Ներբեռնել նկար',
            message: undefined,
            redirect: false
        }
    }
    MyCar = (e) => {
        let data = e.target.selectedOptions[0].dataset;
        if (e.target.value !== ''){
            this.setState({
                mark: [e.target.value],
                model: [data.model],
                vin:data.vin,
                year: [data.year],
                engine: [data.engine],
            })
        }else{
            this.setState({
                mark: false,
                model: false,
                vin:false,
                year: false,
                engine: false,
            })
        }

    }
    SendRequest = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.addrequest,data).then(res => {
            if (res.status !== undefined){
                this.setState({
                    message: res.message
                })
                setTimeout(() => {
                    this.setState({
                       message: undefined
                    })
                },2000)
            }else{
                window.location.reload(true)
            }
        })
    }

    render() {

        return (

            <form className='ModalRequest' onSubmit={this.SendRequest}>
                <input type="hidden" name='phone' value={this.props.phone}/>
                <div className="overlay" onClick={this.props.close}></div>
                <div className='modal__content'>
                    {
                        this.state.message !== undefined?
                            <Art type='warning' content={this.state.message} />: ''
                    }
                    <div className="close" onClick={this.props.close}>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </div>
                    <div className="modal__title">
                        <h2>ՈՒղարկել հարցում</h2>
                    </div>
                    <div className="modal__block">
                        <div className='modal__items'>
                            <select disabled>
                                <option value="">
                                    Պահեստամասեր
                                </option>
                            </select>
                            {/*<DefaultSelect name='' data={parts} />*/}
                        </div>
                        <SpeareParts
                            sircle={this.props.location.sircle}
                            auto={this.props.auto.auto.data}
                            year={this.props.auto.year}
                            mark={this.props.auto.mark}
                            engine={this.props.auto.engine}
                            model={this.props.auto.model}
                            dis={this.props.dispatch}
                        />
                    </div>
                </div>
                <input type="hidden" name='id' value={this.props.user.status?this.props.user.id:this.props.score.score.id}/>
            </form>
        )
    }
}

const MapStateToProps = state => state;
const MainModalRequest = connect(MapStateToProps)(ModalRequest)

export default MainModalRequest;
