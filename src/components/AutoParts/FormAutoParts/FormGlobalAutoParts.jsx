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


class FormGlobalAutoParts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            openMarker: false,
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

        POST(Url.addMarkModelAutoParts,data).then(res => {
            console.log(res)
        })
    }
    getChecked = (e) => {
            let lists = document.querySelectorAll('.'+ e.target.className)

            if(e.target.checked){
                lists[0].childNodes[2].children[0].disabled = false
                lists[0].childNodes[2].children[0].checked = true
                lists[0].childNodes[3].children[0].disabled = false
                lists[0].childNodes[3].children[0].checked = true
            }else{
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
                            <ul className='all_check'>
                                {
                                    this.props.auto.mark.map((el, i) => {
                                        if (i !== 0) {
                                            return (
                                                <li key={i} className='all_check'>
                                                    <ul className={"li_mark li_mark" + i}>
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
                                                        }}><input className={"li_mark" + i} data-check ={1} name='mark[]' value={el.name} onChange={this.getChecked} type='checkbox'/></li>
                                                        <li style={{
                                                            width: "15%",
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>Նոր <input className='new_mark' name='mark_new' value={1} disabled  type='checkbox'/></li>
                                                        <li style={{
                                                            width: "15%",
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}>օգտ. <input name='mark_old' value={1} disabled type='checkbox'/></li>
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
                                                            this.props.auto.allModels.map((model,i) => {
                                                                if (el.id === model['id_mark']){
                                                                    return (
                                                                        <li key={i}>
                                                                            <ul className={`li_model${i}`}>
                                                                                <li>{model.name}</li>
                                                                                    <li>
                                                                                        <input data-check ={2} className={'li_model'+i} onChange={this.getChecked} type="checkbox" name='model[]' value={model.name}/>
                                                                                    </li>
                                                                                    <li>
                                                                                        <input  type="checkbox" disabled name='model_new' value={1}/>
                                                                                        Նոր
                                                                                    </li>
                                                                                    <li>
                                                                                        <input type="checkbox" disabled name='model_old' value={1}/>
                                                                                        Օգտ.
                                                                                    </li>
                                                                                    <input type="hidden" />

                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }else return false;
                                                            })
                                                        }

                                                    </ul>
                                                </li>
                                            )
                                        }else return false;
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
