import React, {Component, Fragment} from 'react';
import DefaultSelect from "../forms/select/DefaultSelect";
import {GetModel} from "../../redux/auto/action";


class SpeareParts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mark: false,
            model: false,
            vin:false,
            year: false,
            engine: false,
            valid: true
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

    render() {
        return(
            <Fragment>
                <div className='modal__items'>
                    {/*<textarea*/}
                    {/*    name="message"*/}
                    {/*    placeholder='Նկարագրությունը․․․'*/}
                    {/*    focus={(e)=>{*/}
                    {/*        console.log(e)*/}
                    {/*    }}*/}
                    {/*></textarea>*/}
                    <textarea value={this.state.value}
                              onFocus={e=>{
                                  e.target.classList.toggle('modalTextarea')
                                  document.bgColor='red'
                              }}
                              ref={el=>this.textarea=el}
                    />
                </div>

                <div className='modal__items'>
                    <DefaultSelect name='sircle' data={this.props.sircle} />
                </div>

                <div className='modal__items'>
                    <select onChange={this.MyCar} >
                        <option value=''>Մեքենա</option>
                        {
                            this.props.auto? this.props.auto.map((res,i) => {
                                return (
                                    <option
                                        key={i}
                                        value={res.mark}
                                        data-model={res.model}
                                        data-vin={res.vin}
                                        data-year={res.year}
                                        data-engine={res.engine}

                                    >{res.model}</option>
                                )
                            }):''
                        }
                    </select>
                </div>

                <div className='modal__items'>
                    <select name="year">
                        {
                            this.state.year?
                                this.state.year.map(res => {
                                    return (
                                        <option key={res} value={res}>{res}</option>
                                    )
                                }):
                                this.props.year.map(res => {
                                    return (
                                        <option key={res}>{res}</option>
                                    )
                                })
                        }
                    </select>
                </div>

                <div className='modal__items'>
                    {
                        this.state.mark?
                            <select name="mark" >
                                <option value={this.state.mark}>
                                    {this.state.mark}
                                </option>
                            </select>:
                            <DefaultSelect

                                name='mark'
                                data={this.props.mark}
                                onChange={(e)=>{
                                    this.props.dis(GetModel(e))
                                }}
                            />
                    }
                </div>

                <div className='modal__items'>
                    <select name="engine">
                        {
                            this.state.engine?
                                this.state.engine.map(res => {
                                    return (
                                        <option key={res} value={res}>{res}</option>
                                    )
                                }):
                                this.props.engine.map(res => {
                                    return (
                                        <option key={res}>{res}</option>
                                    )
                                })
                        }
                    </select>
                </div>

                <div className='modal__items'>
                    {
                        this.state.model?
                            <select name="model">
                                <option value={this.state.model}>
                                    {this.state.model}
                                </option>
                            </select>:
                            <DefaultSelect name='model' data={this.props.model} />
                    }
                </div>

                <div className='modal__items'>
                    <input
                        name='vin'
                        defaultValue={this.state.vin?this.state.vin:''}
                        placeholder='VIN'
                        required={this.state.valid?'required':''}
                    />
                </div>

                <div className="modal__items">
                    <input name='code' type="text" required={!this.state.valid?'required':''} placeholder='Դետալի կոդը' onChange={(e) => {
                        if(e.target.value.length >= 3){
                            this.setState({
                                valid: false
                            })
                        }else{
                            this.setState({
                                valid: true
                            })
                        }
                    }}/>
                </div>

                <div className='modal__file'>
                    <label className='modal__file-label'>
                        Ներբեռնել նկար
                        <input name='img' type="file"/>
                    </label>
                </div>

                <div className="modal__items">
                    <label>
                        Նոր
                        <input defaultChecked name='new' value={1} type="checkbox"/>
                    </label>
                </div>

                <div className="modal__items">
                    <label>
                        Օգտ․
                        <input defaultChecked name='old' value={1} type="checkbox"/>
                    </label>
                </div>

                <div className="modal__items">
                    <button className='modal__button'>
                        Ուղարկել
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default SpeareParts;