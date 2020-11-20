import React, {Component} from "react";
import DefaultSelect from "../forms/select/DefaultSelect";
import {maser} from "../Menu/autoObj";
import FormAutoParts from "./FormAutoParts/FormAutoParts";
import './AutoParts.scss'
import {Redirect, Route} from "react-router";
import MainFormGlobalAutoParts from "./FormAutoParts/FormGlobalAutoParts";
import FormGlobalAutoParts from "./FormAutoParts/FormGlobalAutoParts";
import Soon from "../Soon/Soon";



class AutoParts extends Component{
    constructor(props) {
        super(props);
        this.refSelect = React.createRef()
        this.state = {
                category:'0'
        }
    }

    componentDidMount() {
        switch(window.location.pathname){
            case '/score/account/cars/spare_parts/with_mark':this.select['0'].selected = true;this.setState({category:'0'})
                break
            case '/score/account/cars/soon':this.select['1'].selected = true;this.setState({category:'1'})
                break

        }



    }

    getCategory = (e) =>{
        this.setState({
            category:e.target.selectedOptions[0].dataset.count
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className='Auto_parts'>
                <div className="parts_form">
                    <div className="parts_category">
                        <select
                            ref = {el => this.select = el}
                            onChange={this.getCategory}

                        >
                            {
                                maser.map((el,i)=>{
                                    return (
                                        <option
                                            value={el.name}
                                            key={i}
                                            data-count={i}
                                        >
                                            {el.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {/*<h1 ref = {el => this.select = el} ></h1>*/}
                    </div>
                    <div className="get_parts_category">
                        {
                            this.state.category === '0' ?<Redirect to='/score/account/cars/spare_parts'/>:''
                        }

                        {
                            this.state.category === '1' ?<Redirect to='/score/account/cars/soon'/>:''
                        }

                        {
                            +this.state.category >= 2 ?<Redirect to='/score/account/cars/soon'/>:''
                        }
                        <Route path='/score/account/cars/spare_parts'>
                            <FormAutoParts />
                        </Route>
                        <Route path='/score/account/cars/soon'>
                            <Soon />
                        </Route>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoParts;