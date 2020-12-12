import React, {Component} from "react";
import {service} from "../Menu/autoObj";

class FormAutoService extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='formAutoService'>
                <nav className="formAutoService__list">
                    <form>
                        <ul className="formAutoService__scrollBar">
                            {
                                service.map((service,i)=>{
                                    return(
                                        <li key={i}>
                                           <label className="price_list">
                                               <ul>
                                                   <li><input type="checkbox"/></li>
                                                   <li><input type="hidden"/> {service.name}</li>
                                                   <li><input type="text" placeholder="Նկարագրություն"/></li>
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

export default FormAutoService;