import React, {Component} from "react";
import DefaultSelect from "../forms/select/DefaultSelect";
import {maser} from "../Menu/autoObj";
import FormAutoParts from "./FormAutoParts/FormAutoParts";
import './AutoParts.scss'
import {Redirect, Route} from "react-router";
import MainFormGlobalAutoParts from "./FormAutoParts/FormGlobalAutoParts";
import FormGlobalAutoParts from "./FormAutoParts/FormGlobalAutoParts";



class AutoParts extends Component{
    constructor(props) {
        super(props);
        this.refSelect = React.createRef()
        this.state = {
                category:'0'
        }
    }

    getCategory = (e) =>{
        this.setState({
            category:e.target.selectedOptions[0].dataset.count
        })
    }
    render() {
        return (
            <div className='Auto_parts'>
                <div className="parts_form">
                    <div className="parts_category">
                        <DefaultSelect
                            onChange={this.getCategory}
                            data={maser}
                            width= '20%'
                            name='category'
                        />
                    </div>
                    <div className="get_parts_category">
                        {
                            this.state.category === '0' ?<Redirect to='/score/account/cars'/>:''
                        }
                        {
                            this.state.category === '1' ?<Redirect to='/score/account/cars/aaa'/>:''
                        }
                        {
                            this.state.category === '2' ?<h1>bbb</h1>:''
                        }
                        <Route path='/score/account/cars'>
                            <FormAutoParts />
                        </Route>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoParts;