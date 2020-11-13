import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";



class Respondent extends Component {
    render() {
        return (

            <div className={this.props.active?"respondent_user respondent_user_active":"respondent_user"}>
                <div className="click" onClick={this.props.onClick} id={this.props.id} data-id={this.props.data?this.props.id:''} data-dialog-id={this.props.dialogId}></div>

                <div className="respondent_user_image" style={{backgroundImage:`url(${this.props.data?this.props.data.img:''})`}}>

                </div>
                <div className="respondent_user_name">
                    <div>
                        <span>{this.props.data? this.props.data.name: ''}</span>
                        <span>{this.props.data?this.props.data.surname: ''}</span>
                    </div>
                    <div>
                        <span >{this.props.time.split(' ')[1].slice(0,5)}</span>
                        {
                            +this.props.status > 0?
                                <span className='status'></span>:''
                        }

                    </div>
                </div>
                <div className="respondent_user_clear" onClick={this.clear} data-id={this.props.data?this.props.data.id: ''}>
                    <div className="click"></div>
                    <span ><FontAwesomeIcon icon={faTrashAlt} /></span>
                </div>
            </div>
        )
    }
}

export default Respondent