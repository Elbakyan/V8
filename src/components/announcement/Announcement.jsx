import React, {Component} from "react";
import './Announcement.scss';
import Header1 from "../Home/Header";
import Header2 from "../User/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link, Route} from "react-router-dom";
import Result from "./Result";
import Auto from "./Auto";
import {GetSell} from "../../redux/sellauto/action";

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pag: 30
        }
    }
    componentDidMount() {
        this.props.dispatch(GetSell(1))
    }

    Count = () =>{
        let arr = [];
        if(this.props.sell.count != undefined){
            if (this.props.sell.count % 15 == 0){
                for (let i = 1; i <= (this.props.sell.count / 15); i++){

                    arr.push(i)
                }
            }else{
                for (let i = 1; i <= ((this.props.sell.count / 15) + 1); i++){
                    arr.push(i)
                }

            }

        }
        return arr
    }
    GetLimitAuto = (e) =>  {
        this.props.dispatch(GetSell(e.target.id))
        let links = document.querySelectorAll('.pagination_link');

        links.forEach(link => {
            link.classList.remove('active');
        })

        e.target.classList.add('active');
    }
    render() {

        return (
            <section className="Announcement">
                {
                    this.props.user.status? <Header2/>:<Header1/>
                }
                <div className="content">
                    <div className="container row justify-between">
                        <form className="Announcement__search">
                            <div>
                                <label >
                                    <DefaultSelect
                                        onChange={(e)=>{
                                            this.props.dispatch(GetModel(e))
                                        }}
                                        name='mark'
                                        data={this.props.auto.mark}
                                    />
                                </label>
                                <label >
                                    <DefaultSelect

                                        name='model'
                                        data={this.props.auto.model}
                                    />
                                </label>
                            </div>
                            <div>
                                <label >
                                    <select name="year">
                                        {
                                            this.props.auto.year.map((val,id) => {
                                                return (
                                                    <option value={val} key={id}>{val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </label>
                                <label >
                                    <DefaultSelect

                                        name='royle'
                                        data={this.props.auto.royle}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </div>
                                    <DefaultInput
                                        type='number'
                                        name='min'
                                        placeholder='Սկսած․․․'
                                    />
                                </label>
                                <label>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </div>
                                    <DefaultInput
                                        type='number'
                                        name='max'
                                        placeholder='Մինչև․․․'
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <DefaultInput
                                        type='number'
                                        name='power'
                                        placeholder='Ձիաուժ․․․'
                                    />
                                </label>
                                <label >
                                    <DefaultSelect

                                        name='royle'
                                        data={this.props.auto.traction}
                                    />
                                </label>
                            </div>
                            <div>
                                <label >
                                    <DefaultSelect
                                        name='transmission'
                                        data={this.props.auto.transmission}
                                    />
                                </label>
                                <label >
                                    <DefaultSelect
                                        name='fuel'
                                        data={this.props.auto.fuel}
                                    />
                                </label>
                            </div>
                            <div className="btn">
                                <DefaultBtn
                                    type='submit'
                                    name='Որոնել'
                                    background='#32d815'

                                />
                            </div>

                        </form>

                        <Route exact path='/announcement'>
                            <div className='auto_content'>
                                <div className='pagination'>
                                    <ul className='pagination'>
                                        {
                                            this.Count().map((btn,i) => {

                                                return (

                                                    <li >
                                                        <a className='pagination_link' href='#' id={i == 0? 1:i * 15} onClick={this.GetLimitAuto}>
                                                            {i + 1}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <Result/>
                            </div>
                        </Route>
                        <Route exact path='/announcement/1'>
                            <Auto/>
                        </Route>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
const MapStateToProps = state => state;
const MainAnnouncement = connect(MapStateToProps)(Announcement)
export default MainAnnouncement;
