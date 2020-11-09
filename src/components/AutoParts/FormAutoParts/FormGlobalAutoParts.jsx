import React, {Component} from "react";
import DefaultInput from "../../forms/inputs/DefaultInput";
import Loading from "../../Loading";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {GetAllModel} from "../../../redux/auto/action";

import {GetMarkModelAutoParts} from "../../../redux/score/action";
import {Link, Route} from "react-router-dom";
import MainListGlobalAutoParts from "./ListGlobalAutoParts";



class FormGlobalAutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            openMarker: false,
            getList:false
        }

    }

    componentDidMount() {
        this.props.dispatch(GetAllModel())
        this.props.dispatch(GetMarkModelAutoParts())
    }

    openModels = e => {
        let el = document.querySelectorAll('.' + e.target.className.split(' ')[1])
        this.setState({
            openMarker: !this.state.openMarker,
        })
        if (el[1].style.display === 'block') {
            el[1].style.display = 'none'
        } else {
            el[1].style.display = 'block'
        }


    }
    AddScorPartsLists = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)

        POST(Url.addMarkModelAutoParts, data).then(res => {
            console.log(res)
        })
    }
    getChecked = (e) => {
        let lists = document.querySelectorAll('.' + e.target.className)

        if (e.target.checked) {
            lists[0].childNodes[2].children[0].disabled = false
            lists[0].childNodes[2].children[0].checked = true
            lists[0].childNodes[3].children[0].disabled = false
            lists[0].childNodes[3].children[0].checked = true
        } else {
            lists[0].childNodes[2].children[0].disabled = true
            lists[0].childNodes[2].children[0].checked = false
            lists[0].childNodes[3].children[0].disabled = true
            lists[0].childNodes[3].children[0].checked = false
        }
    }

    render() {
        console.log(this.props.score.MarkModelParts)
        return (
            <div className="add_auto_parts">
                <div className="add_auto_parts-links">
                    <Link to='/score/account/cars/add' >Ավելացնել...</Link>
                    <Link to='/score/account/cars/lists' >Ցանկ...</Link>
                </div>
                <Route path='/score/account/cars/add'>
                    <form onSubmit={this.AddScorPartsLists}>
                        <div className="score_list">
                            {
                                this.props.score.scoreList.map((el, i) => (
                                    <label key={i}>
                                        {el.name}
                                        <DefaultInput
                                            type='checkbox'
                                            value={el.name}
                                            name='score[]'
                                            width="5%"
                                            checked
                                        />
                                        <input type="hidden" name='store_id[]' value={el.id}/>
                                    </label>
                                ))
                            }
                        </div>

                        <div className="score_parts_form">
                            <nav className="auto_mark">
                                <ul className='all_check'>
                                    {
                                        this.props.auto.mark.map((el, i) => {
                                            if (i !== 0) {
                                                return (
                                                    <li key={i} className='all_check'>
                                                        <ul className={"li_mark li_mark" + i}>
                                                            <li>{el.name}</li>
                                                            <li><input className={"li_mark" + i} data-check={1}
                                                                       name='mark[]' value={el.name}
                                                                       onChange={this.getChecked} type='checkbox'/></li>
                                                            <li> <input className='checkbox new_mark' name='mark_new'
                                                                        value={1} disabled type='checkbox'/>Նոր</li>
                                                            <li> <input name='mark_old' value={1} disabled
                                                                        type='checkbox'/>օգտ.</li>
                                                            <li style={{width: "5%"}}
                                                                className={"open_models open_models" + el.name}
                                                                data-count={i} data-id={el.id} onClick={this.openModels}>
                                                                {
                                                                    <FontAwesomeIcon icon={faArrowDown}/>
                                                                }
                                                            </li>
                                                        </ul>


                                                        <ul className={`open_models${el.name}`} style={{display: "none"}}
                                                            data-count={i} ref={el => this.getModels = el}>
                                                            {
                                                                this.props.auto.allModels.map((model, i) => {
                                                                    if (el.id === model['id_mark']) {
                                                                        return (
                                                                            <li key={i}>
                                                                                <ul className={`li_model${i}`}>
                                                                                    <li className='model__li'>{model.name}</li>
                                                                                    <li>
                                                                                        <input data-check={2}
                                                                                               className={'li_model' + i}
                                                                                               onChange={this.getChecked}
                                                                                               type="checkbox"
                                                                                               name='model[]'
                                                                                               value={model.name}/>
                                                                                    </li>
                                                                                    <li>
                                                                                        <input type="checkbox" disabled
                                                                                               name='model_new' value={1}/>
                                                                                        Նոր
                                                                                    </li>
                                                                                    <li>
                                                                                        <input type="checkbox" disabled
                                                                                               name='model_old' value={1}/>
                                                                                        Օգտ.
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        )
                                                                    } else return false;
                                                                })
                                                            }

                                                        </ul>
                                                    </li>
                                                )
                                            } else return false;
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>


                        <div className="add__product-btn">
                            {
                                this.state.loading ?
                                    <div className="loading_btn"><Loading type='spin' color='#ff0000' size={30}/></div> : ''
                            }
                            <DefaultBtn
                                type="submit"
                                name='Առաջ'
                                color="#fff"
                                width='15%'
                                background="rgb(74 141 210)"
                            />
                        </div>
                    </form>
                </Route>
                <Route path='/score/account/cars/lists'>
                    <MainListGlobalAutoParts />
                </Route>

            </div>


        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location,
        auto: state.auto
    }
}

const MainFormGlobalAutoParts = connect(MapStateToProps)(FormGlobalAutoParts);
export default MainFormGlobalAutoParts;
