import React, {Component, createRef} from "react";
import DefaultInput from "../../forms/inputs/DefaultInput";
import Loading from "../../Loading";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {cars} from "../../Menu/autoObj";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {GET, POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {GetAllModel} from "../../../redux/auto/action";


class FormGlobalAutoParts extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            openMarker: false,
        }

    }

    componentDidMount() {
        this.props.dispatch(GetAllModel())
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

        console.log(Array.from(data))
    }

    render() {

        return (
            <div className="add_auto_parts">
                {this.state.message ? <p className="message">{this.state.message}</p> : ''}
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
                            <ul>
                                <li><input type="checkbox" onChange={(e => {
                                    let li = document.querySelectorAll(".li_mark");
                                    if (e.target.checked){
                                        li.forEach(el => {
                                            el.checked = true
                                        })
                                    }else{
                                        li.forEach(el => {
                                            el.checked = false
                                        })
                                    }



                                })}/></li>
                                {
                                    this.props.auto.mark.map((el, i) => {
                                        if (i !== 0) {
                                            return (
                                                <li>
                                                    <ul>
                                                        <li style={{
                                                            width: "20%",
                                                            background: 'rgb(0 117 255)',
                                                            color: "wheat",
                                                            fontSize: '12px'
                                                        }}>{el.name}</li>
                                                        <li style={{
                                                            width: "10%",
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}><input className="li_mark" name='mark[]' value={el.name} onChange={(e) => {
                                                            let newMark = document.querySelectorAll('.new_mark');
                                                            console.log(newMark)
                                                        }} type='checkbox'/></li>
                                                        <li style={{
                                                            width: "15%",
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>Նոր <input className='new_mark' name='mark_new' defaultChecked type='checkbox'/></li>
                                                        <li style={{
                                                            width: "15%",
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>օգտ. <input name='mark_old' type='checkbox'/></li>
                                                        <li style={{width: "5%"}}
                                                            className={"open_models open_models" + el.name}
                                                            data-count={i} data-id={el.id} onClick={this.openModels}>
                                                            {
                                                                <FontAwesomeIcon icon={faArrowDown}/>
                                                            }
                                                        </li>
                                                    </ul>


                                                    <ul className={"open_models" + el.name} style={{display: "none"}}
                                                        data-count={i} ref={el => this.getModels = el}>
                                                        <li><input type="checkbox" onChange={(e => {
                                                            let li = document.querySelectorAll(".li_model");
                                                            if (e.target.checked){
                                                                li.forEach(el => {
                                                                    el.checked = true
                                                                })
                                                            }else{
                                                                li.forEach(el => {
                                                                    el.checked = false
                                                                })
                                                            }



                                                        })}/></li>
                                                        {
                                                            this.props.auto.allModels.map(model => {
                                                                if (el.id == model['id_mark']){
                                                                    return (
                                                                        <li>
                                                                            <ul>
                                                                                <li>{model.name}</li>
                                                                                <li>
                                                                                    <input className='li_model' type="checkbox" name='model[]' value={model.name}/>
                                                                                    <label>
                                                                                        <input defaultChecked type="checkbox" name='model_new' value={1}/>
                                                                                        Նոր
                                                                                    </label>
                                                                                    <label>
                                                                                        <input type="checkbox" name='model_old' value={1}/>
                                                                                        Օգտ.
                                                                                    </label>
                                                                                    <input type="hidden" />
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }
                                                            })
                                                        }

                                                    </ul>
                                                </li>
                                            )
                                        }
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
