import React, {Component} from "react";
import './Announcement.scss';
import Header from "../Home/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign} from '@fortawesome/free-solid-svg-icons'
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import DefaultSelect from "../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../redux/auto/action";
import {Link} from "react-router-dom";

class Announcement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <section className="Announcement">
                <Header/>
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
                                        data={this.props.mark}
                                    />
                                </label>
                                <label >
                                    <DefaultSelect

                                        name='model'
                                        data={this.props.model}
                                    />
                                </label>
                            </div>
                            <div>
                                <label >
                                    <select name="year">
                                        {
                                            this.props.year.map((val,id) => {
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
                                        data={this.props.royle}
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
                                        data={this.props.traction}
                                    />
                                </label>
                            </div>
                            <div>
                                <label >
                                    <DefaultSelect
                                        name='transmission'
                                        data={this.props.transmission}
                                    />
                                </label>
                                <label >
                                    <DefaultSelect
                                        name='fuel'
                                        data={this.props.fuel}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <DefaultInput
                                        type='number'
                                        name='mark'
                                        placeholder='Վազք․․․'
                                    />
                                </label>
                                +-/
                                <label>
                                    <DefaultInput
                                        type='number'
                                        name='mark'
                                        placeholder='Վազք․․․'
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
                        <div className="result">
                            <div className="result_auto">
                                <Link to=''>Audi A5 2020</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        )
    }
}
const MapStateToProps = state => state.auto;
const MainAnnouncement = connect(MapStateToProps)(Announcement)
export default MainAnnouncement;
