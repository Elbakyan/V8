import React, {Component} from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link, Route} from "react-router-dom";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {GetCity} from "../../../redux/location/action";
import DefaultBtn from "../../forms/buttons/DefaultBtn";


class ProfilSetings extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))
    }

    render() {
        return (
            <div className="profile__setings">
                <div className="profile__setings_back">
                    <Link to='/score/account/persional'><FontAwesomeIcon icon={faArrowCircleLeft}/></Link>
                </div>

                <div className="profile__setings_form" >
                    <form className="col align-center justify-center">
                        <DefaultInput
                            defaultValue='Name'
                            type="text"
                            placeholder='Անուն․․․'
                            name='name'
                            width='48%'
                        />
                        <DefaultInput
                            defaultValue='NameYan'
                            type="text"
                            placeholder='Ազգանուն․․․'
                            name='name'
                            width='48%'
                        />
                        <DefaultInput
                            type="tel"
                            placeholder='Հեռախոսահամար․․․'
                            name='phone'
                            width='48%'
                        />
                        <DefaultInput
                            defaultValue='info@v8.am'
                            type="text"
                            placeholder='E-mail․․․'
                            name='mail'
                            width='48%'

                        />

                        <DefaultInput
                            type="password"
                            placeholder='Գաղտնաբառ․․․'
                            name='password'
                            width='48%'
                        />
                        <DefaultInput
                            type="password"
                            placeholder='Կրկնել Գաղտնաբառը․․․'
                            name='password2'
                            width='48%'
                        />

                        <div className='row justify-between' style={{width: '48%'}}>
                            <DefaultSelect
                                onChange={this.GetCity.bind(this)}
                                data={this.props.sircle}
                                width= '48%'
                            />

                            <DefaultSelect
                                data={this.props.city}
                                width= '48%'
                            />
                        </div>
                        <label className='file row align-center' style={{width:'48%'}}>
                            <span className='file__name'>Ներբեռնել լուսանկար․․․</span>
                            <DefaultInput
                                onChange={(e) => {
                                    document.querySelector('.file__name').textContent = e.target.value;
                                }}
                                className="file_input"
                                type="file"
                                placeholder='Լուսանկար․․․'
                                name='image'
                                width='100%'
                            />
                        </label>
                        <DefaultBtn
                            type='submit'
                            name='Հաստատել'
                            background='#143645'
                            color='#ffffff'
                            light={30}
                            className='Signin__btn'
                        />0
                    </form>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state.location;
const MainProfilSetings = connect(MapStateToProps)(ProfilSetings);
export  default MainProfilSetings;