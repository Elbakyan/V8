import React, {Component} from "react";

import DefaultInput from "../forms/inputs/DefaultInput";
import {connect} from "react-redux";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetMyService} from "../../redux/Service/action";
import './AutoService.scss'

class FormAutoService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: [],
            activeStore:[]
        }
    }
    componentDidMount() {
        this.props.dispatch(GetMyService())
    }

    AddServices = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.addServices,data).then(res => {
            if(res){
                this.props.dispatch(GetMyService())
            }
        })
    }
    render() {
            return(
                <div className='formAutoService'>
                    <nav className="formAutoService__list">
                        <form onSubmit={this.AddServices}>
                            <ul className="formAutoService__score_list">
                                {
                                    this.props.score.scoreList.map((el, i) => {
                                        return(
                                            <li key={i}>
                                                <label>
                                                    {el.name}
                                                    <DefaultInput
                                                        type='checkbox'
                                                        className={'store_check ' + 'store_check' + el.id}
                                                        value={el.id}
                                                        name='score[]'
                                                        onChange={(e) => {
                                                            console.log(e.target.classList)
                                                            let storsCheck = document.querySelectorAll(`.${e.target.classList[0]}`)
                                                            storsCheck.forEach(el => {
                                                                if (el.classList[1] !== e.target.classList[1] && el.checked == true) {
                                                                    console.log(el.checked)
                                                                    el.click()
                                                                }
                                                            })
                                                            if (e.target.checked) {
                                                                this.state.activeStore.push(e.target.value)
                                                                this.setState({
                                                                    activeStore: this.state.activeStore
                                                                })
                                                            }else {
                                                                for (let i = 0; i < this.state.activeStore.length; i++) {
                                                                    if (this.state.activeStore[i] === e.target.value) {
                                                                        this.state.activeStore.splice(i, 1)
                                                                        this.setState({
                                                                            activeStore: this.state.activeStore
                                                                        })
                                                                    }
                                                                }
                                                            }
                                                            // console.log(this.state.activeStore)
                                                        }}
                                                    />
                                                </label>
                                            </li>
                                            )


                                    })
                                }
                            </ul>
                            <ul className="formAutoService__scrollBar">
                                {
                                    this.props.service.service.map((service,iS)=>{
                                        let check = false
                                        let value = ''

                                        this.props.service.myService.data.map((myService,iMS)=>{
                                            this.state.activeStore.map((store,ind)=>{
                                                if(store == myService.score_id && service.id == myService.service_id){
                                                    check = true
                                                    value = myService.desc
                                                }
                                            })
                                        })

                                        if(this.state.activeStore.length >=1){
                                            return(
                                                <li key={iS}>
                                                    <label className="price_list">
                                                        <ul>
                                                            <li>
                                                                {
                                                                    check?
                                                                        <input name='service[]' defaultChecked={true} type="checkbox" value={service.name + '//' + service.id} onChange={(e) => {
                                                                            if (e.target.checked){
                                                                                e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = false
                                                                            }else{
                                                                                e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = true
                                                                            }
                                                                        }}/>: <DefaultInput
                                                                            type="checkbox"
                                                                            name='service[]'
                                                                            value={service.name + '//' + service.id}
                                                                            onChange={(e) => {
                                                                                if (e.target.checked){
                                                                                    e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = false
                                                                                }else{
                                                                                    e.target.parentElement.nextSibling.nextSibling.childNodes[0].disabled = true
                                                                                }
                                                                            }}
                                                                        />
                                                                }

                                                            </li>
                                                            <li>{service.name}</li>
                                                            <li>{
                                                                check?<input   name={'desc[]'} defaultValue={value} type="text" placeholder="Նկարագրություն"/>
                                                                    :<input  disabled name={'desc[]'} defaultValue={''} type="text" placeholder="Նկարագրություն"/>
                                                            }
                                                            </li>
                                                        </ul>
                                                    </label>
                                                </li>
                                            )
                                        }

                                    })
                                }
                            </ul>
                            {
                                this.state.activeStore.length >=1?
                                <div className="formAutoService__button">
                                    <button>Առաջ</button>
                                </div> :''
                            }

                        </form>
                    </nav>
                </div>
            )


    }
}


const MapStateToProps = state => state;

const MainFormAutoService = connect(MapStateToProps)(FormAutoService);
export default MainFormAutoService;
