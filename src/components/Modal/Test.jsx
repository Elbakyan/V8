import React, {Component, Fragment} from 'react';
import DefaultSelect from "../forms/select/DefaultSelect";


class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mark: false,
            model: false,
            vin:false,
            year: false,
            engine: false,
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
                    <textarea name="" placeholder='jjjjjj․․․'></textarea>
                </div>

                <div className='modal__items'>
                    {/*<DefaultSelect name='sircle' data={this.props.sircle} />*/}
                </div>

                <div className='modal__items'>
                    {/*<select onChange={this.MyCar}>*/}
                    {/*    <option value=''>Մեքենա</option>*/}
                    {/*    {*/}
                    {/*        this.props.auto? this.props.auto.map(res => {*/}
                    {/*            return (*/}
                    {/*                <option*/}
                    {/*                    value={res.mark}*/}
                    {/*                    data-model={res.model}*/}
                    {/*                    data-vin={res.vin}*/}
                    {/*                    data-year={res.year}*/}
                    {/*                    data-engine={res.engine}*/}
                    {/*                >{res.model}</option>*/}
                    {/*            )*/}
                    {/*        }):''*/}
                    {/*    }*/}
                    {/*</select>*/}
                </div>

                <div className='modal__items'>
                    {/*<select name="year">*/}
                    {/*    {*/}
                    {/*        this.state.year?*/}
                    {/*            this.state.year.map(res => {*/}
                    {/*                return (*/}
                    {/*                    <option key={res} value={res}>{res}</option>*/}
                    {/*                )*/}
                    {/*            }):*/}
                    {/*            this.props.year.map(res => {*/}
                    {/*                return (*/}
                    {/*                    <option key={res}>{res}</option>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*    }*/}
                    {/*</select>*/}
                </div>

                <div className='modal__items'>
                    {/*{*/}
                    {/*    this.state.mark?*/}
                    {/*        <select name="mark">*/}
                    {/*            <option value={this.state.mark}>*/}
                    {/*                {this.state.mark}*/}
                    {/*            </option>*/}
                    {/*        </select>:*/}
                    {/*        <DefaultSelect name='mark' data={this.props.mark} />*/}
                    {/*}*/}
                </div>

                <div className='modal__items'>
                    {/*<select name="engine">*/}
                    {/*    {*/}
                    {/*        this.state.engine?*/}
                    {/*            this.state.engine.map(res => {*/}
                    {/*                return (*/}
                    {/*                    <option key={res} value={res}>{res}</option>*/}
                    {/*                )*/}
                    {/*            }):*/}
                    {/*            this.props.engine.map(res => {*/}
                    {/*                return (*/}
                    {/*                    <option key={res}>{res}</option>*/}
                    {/*                )*/}
                    {/*            })*/}
                    {/*    }*/}
                    {/*</select>*/}
                </div>

                <div className='modal__items'>
                    {/*{*/}
                    {/*    this.state.model?*/}
                    {/*        <select name="model">*/}
                    {/*            <option value={this.state.model}>*/}
                    {/*                {this.state.model}*/}
                    {/*            </option>*/}
                    {/*        </select>:*/}
                    {/*        <DefaultSelect name='model' data={this.props.model} />*/}
                    {/*}*/}
                </div>

                <div className='modal__items'>
                    <input
                        name='vin'
                        defaultValue={this.state.vin?this.state.vin:''}
                        placeholder='VIN'
                    />
                </div>

                <div className="modal__items">
                    <input name='code' type="text" placeholder='Դետալի կոդը'/>
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

export default Test;