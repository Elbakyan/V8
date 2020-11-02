import React, {Component} from "react";
import DefaultSelect from "../forms/select/DefaultSelect";
import {maser} from "../Menu/autoObj";
import FormAutoParts from "./FormAutoParts";
import './AutoParts.scss'
import Message from "../message/Message";

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
                            ref={this.refSelect}
                        />
                    </div>
                    <div className="get_parts_category">
                        {
                            this.state.category === '0' ?<FormAutoParts />:''
                        }
                        {
                            this.state.category === '1' ?<Message />:''
                        }
                        {
                            this.state.category === '2' ?<h1>bbb</h1>:''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoParts;