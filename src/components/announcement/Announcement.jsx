import React, {Component} from "react";
import './Announcement.scss';
import Header1 from "../Home/Header";
import Header2 from "../User/Header";
import Header3 from "../Score/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import { Redirect, Route} from "react-router-dom";
import Result from "./Result";
import Auto from "./Auto";
import {GetSell, GetSellByID} from "../../redux/sellauto/action";
import {GetFavorite} from "../../redux/favorite/action";
import Pagination from "react-js-pagination";
import {TEST_POST} from "../config/Requsest";

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            activePage: 15
        }
    }

    componentDidMount() {
        this.props.dispatch(GetSell(1))
            this.props.dispatch(GetFavorite())

        let id = +window.location.pathname.split('/').pop();
        if (id !== NaN){
            this.props.dispatch(GetSellByID(id))
        }



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

    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        pageNumber === 1 ?pageNumber = pageNumber: pageNumber = (pageNumber - 1) * 15;
        console.log(this.props.sell.data);
        this.props.dispatch(GetSell(pageNumber))

    }
    render() {
        return (
            <section className="Announcement">
                {
                    this.props.user.status? <Header2/>:
                    this.props.score.score.status?<Header3/>:
                                            <Header1/>
                }

                <div className="content">
                    <div>

                    </div>
                    <div className="container row justify-between">
                        <form className="Announcement__search" onSubmit={this.Search}>
                            <div>
                                <label >
                                    <DefaultSelect
                                        onChange={(e)=>{
                                            this.props.sell.OneAuto = [];
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
                                <label style={{width: '100%'}}>
                                    <DefaultSelect

                                        name='sort'
                                        data={this.props.auto.sort}
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
