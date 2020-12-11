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

import {NavLink, Redirect, Route} from "react-router-dom";
import MainListGlobalAutoParts from "./ListGlobalAutoParts";
import TypeCars from "../TypeCars";
import Art from "../../Alert";



class FormGlobalAutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            openMarker: false,
            loading:false,
            redirect: false
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
            if (res.status) {
                this.props.dispatch(GetMarkModelAutoParts())
                this.setState({
                    loading: false,
                    message: "",
                    redirect: true

                })
            }else {
                this.setState({
                    loading: false,
                    message: res.message
                })
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        message: ''
                    })
                },2500)
            }
        })
    }

    getChecked = (e) => {
        let lists = document.querySelectorAll('.' + e.target.className)
        if (e.target.checked) {
            lists[0].childNodes[2].children[0].disabled = false
            lists[0].childNodes[2].children[0].checked = true
            lists[0].childNodes[3].children[0].disabled = false
            lists[0].childNodes[3].children[0].checked = true
            if(lists[0].childNodes[5]){
                lists[0].childNodes[5].children[0].checked = true
            }

        } else {
            lists[0].childNodes[2].children[0].disabled = true
            lists[0].childNodes[2].children[0].checked = false
            lists[0].childNodes[3].children[0].disabled = true
            lists[0].childNodes[3].children[0].checked = false
            if(lists[0].childNodes[5]){
                lists[0].childNodes[5].children[0].checked = false
            }

        }
    }

    render() {
        let myMark = [];
        return (
            <div className="add_auto_parts">
                {
                    this.state.redirect? <Redirect to='/score/account/cars/spare_parts/with_mark/cars/lists'/>:''
                }
                <div className="add_auto_parts-links">

                    <NavLink to='/score/account/cars/spare_parts/with_mark/cars/add' >Ավելացնել...</NavLink>
                    <NavLink to='/score/account/cars/spare_parts/with_mark/cars/lists' >Ցանկ...</NavLink>
                </div>
                    {
                        this.state.message?
                            <Art type='warning' content={this.state.message}/>:''
                    }
                <Route path='/score/account/cars/spare_parts/with_mark/cars/add'>
                    <form onSubmit={this.AddScorPartsLists}>
                        <input type="hidden" name='type' value='car'/>
                        <div className="score_list">
                            {
                                this.props.score.scoreList.map((el, i) => (
                                    <label key={i}>
                                        {el.name}
                                        <DefaultInput
                                            type='checkbox'
                                            value={el.id}
                                            name='score[]'
                                            checked
                                        />
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
                                                            <li><input className={"li_mark" + i} data-id={el.id}
                                                                       name='mark[]' value={el.name}
                                                                       onChange={this.getChecked} type='checkbox' />
                                                            </li>

                                                            <li>
                                                                <input className='checkbox new_mark'
                                                                       name='mark_new'
                                                                       value={1} disabled type='checkbox'
                                                                />
                                                                Նոր
                                                            </li>
                                                            <li> <input name='mark_old' value={1} disabled
                                                                        type='checkbox'/>օգտ.</li>
                                                            <li style={{width: "5%"}}
                                                                className={"open_models open_models" + el.name}
                                                                data-count={i} data-id={el.id} onClick={this.openModels}>
                                                                {
                                                                    <FontAwesomeIcon icon={faArrowDown}/>
                                                                }
                                                            </li>
                                                            <li style={{display: "none"}}>
                                                                <input type="checkbox" name='mark_id[]' value={el.id}/>
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
                                                                                               value={model.name + '/' + model['id_mark']}/>
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


                        <div className="add_auto_parts-btn">
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
                <Route path='/score/account/cars/spare_parts/with_mark/cars/lists'>
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
