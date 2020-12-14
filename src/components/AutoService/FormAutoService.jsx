import React, {Component} from "react";
import {service} from "../Menu/autoObj";
import DefaultInput from "../forms/inputs/DefaultInput";
import {connect} from "react-redux";

class FormAutoService extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='formAutoService'>
                <nav className="formAutoService__list">
                    <form>
                        <ul className="formAutoService__score_list">
                            {
                                this.props.score.scoreList.map((el, i) => (
                                    <li key={i}>
                                        <label>
                                            {el.name}
                                            <DefaultInput
                                                type='checkbox'
                                                value={el.id}
                                                name='score[]'
                                                checked
                                            />
                                        </label>
                                    </li>

                                ))
                            }
                        </ul>
                        <ul className="formAutoService__scrollBar">
                            {
                                service.map((service,i)=>{
                                    return(
                                        <li key={i}>
                                           <label className="price_list">
                                               <ul>
                                                   <li><input type="checkbox"/></li>
                                                   <li><input type="hidden"/> {service.name}</li>
                                                   <li><input  type="text" placeholder="Նկարագրություն"/></li>
                                               </ul>
                                           </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="formAutoService__button">
                            <button>Առաջ</button>
                        </div>
                    </form>
                </nav>
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
    }
}

const MainFormAutoService = connect(MapStateToProps)(FormAutoService);
export default MainFormAutoService;
