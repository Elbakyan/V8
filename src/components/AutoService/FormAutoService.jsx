import React, {Component} from "react";
import {service} from "../Menu/autoObj";
import DefaultInput from "../forms/inputs/DefaultInput";
import {connect} from "react-redux";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";

class FormAutoService extends Component {
    constructor() {
        super();
        this.state = {
            desc: []
        }
    }
    AddServices = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.addServices,data).then(res => {
            console.log(res)
        })
    }
    render() {

        return(
            <div className='formAutoService'>
                <nav className="formAutoService__list">
                    <form onSubmit={this.AddServices}>
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
                                this.props.service.service.map((service,i)=>{
                                    return(
                                        <li key={i}>
                                           <label className="price_list">
                                               <ul>
                                                   <li>
                                                       <input name='service[]' type="checkbox" value={service.name + '//' + service.id} onChange={(e) => {
                                                           if (e.target.checked){
                                                               e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = false
                                                           }else{
                                                               e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = true
                                                           }
                                                       }}/>
                                                   </li>
                                                   <li>{service.name}</li>
                                                   <li><input  disabled name={'desc[]'} type="text" placeholder="Նկարագրություն"/></li>

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


const MapStateToProps = state => state;

const MainFormAutoService = connect(MapStateToProps)(FormAutoService);
export default MainFormAutoService;
