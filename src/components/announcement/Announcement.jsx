import React, {Component} from "react";
import './Announcement.scss';
import Header from "../Home/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign, faSlidersH, faTimes} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Redirect, Route} from "react-router-dom";
import Result from "./Result";
import Auto from "./Auto";
import {GetSell, GetSellByID} from "../../redux/sellauto/action";
import {GetFavorite} from "../../redux/favorite/action";
import Pagination from "react-js-pagination";
import Menu from '../Menu/Menu'
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetId} from "../../redux/message/action";

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            activePage: 15,
            show: false,
            redirect:false
        }
    }

    componentDidMount() {
        this.props.dispatch(GetSell())
        if(this.props.brjo){
            this.props.dispatch(GetFavorite())
        }
        let id = +window.location.pathname.split('/').pop();
        if (id !== NaN){
            this.props.dispatch(GetSellByID(id))
        }

    }
    componentWillUnmount() {
        this.setState({
            redirect:false
        })
    }

    Count = () =>{
        let arr = [];
        if(this.props.sell.data.count !== undefined){
            if (this.props.sell.data.count % 15 === 0){
                for (let i = 1; i <= (this.props.sell.data.count / 15); i++){

                    arr.push(i)
                }
            }else{
                for (let i = 1; i <= ((this.props.sell.data.count / 15) + 1); i++){
                    arr.push(i)
                }

            }
        }
        return arr
    }

    Search = (e) => {
        this.props.sell.OneAuto = [];
        e.preventDefault();
        this.props.dispatch(GetSell(this.state.id,e.target))
        this.setState({
            show:false,
            redirect:true
        })
        setTimeout(()=>{
            this.setState({
                redirect:false
            })
        },500)
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        pageNumber === 1 ?pageNumber = pageNumber: pageNumber = (pageNumber - 1) * 15;
        console.log(this.props.sell.data);
        this.props.dispatch(GetSell(pageNumber))
    }


    render() {
        console.log(this.state.redirect)
        return (
            <section className="Announcement">
                <div className="burger" onClick={() => {
                    if (this.state.show){
                        this.setState({
                            show:false
                        })
                    }else {
                        this.setState({
                            show:true
                        })
                    }
                }}>
                    {
                        this.state.show?
                            <FontAwesomeIcon icon={faTimes}/>:
                            <FontAwesomeIcon icon={faSlidersH}/>
                    }
                </div>
                <Header />
                <Menu />
                <div className="content">
                    <div>

                    </div>
                    <div className="container row justify-between">
                        {
                            this.state.redirect ? <Redirect to={'/announcement'} />: ''
                        }
                        <form className="Announcement__search" onSubmit={this.Search} style={
                            this.state.show?{left: '0px'}: {left: '-100%'}
                        }>
                            <div>
                                <label >
                                    <DefaultSelect
                                        onChange={(e)=>{
                                            let id = +window.location.pathname.split('/').pop();
                                            this.props.sell.OneAuto = [];
                                            this.props.dispatch(GetModel(e))
                                            this.props.dispatch(GetSellByID(id))
                                            this.props.dispatch(GetId(id))
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
                                        name='traction'
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
                            <div >
                                <label>
                                    <DefaultSelect
                                        name='sort'
                                        data={this.props.auto.sort}
                                    />
                                </label>
                                <label>
                                    <DefaultSelect
                                        name='sircle'
                                        data={this.props.location.sircle}
                                    />
                                </label>
                            </div>
                            <div className="btn">
                                <DefaultBtn
                                    type='submit'
                                    name='Որոնել'
                                    background='#5b716d'
                                />
                            </div>
                        </form>

                        <Route exact path='/announcement'>
                            <div className='auto_content'>
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={15}
                                    totalItemsCount={this.props.sell.data.count || 1}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange.bind(this)}
                                />
                                <Result/>
                            </div>
                        </Route>

                        {
                            this.props.sell.OneAuto?
                                <Route exact path={'/announcement/' + this.props.sell.OneAuto.id}>
                                    <Auto/>
                                </Route>:''
                        }

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
