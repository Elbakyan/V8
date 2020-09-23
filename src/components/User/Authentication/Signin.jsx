import React from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link} from "react-router-dom";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetCity} from "../../../redux/location/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

class Signin extends React.Component{
    constructor(props) {
        super(props);

    }


    componentDidMount() {

        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))
    }
    Signin(e){
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.login,data).then(res => {
            console.log(res)
        })
    }
    render() {

        console.log(this.props)
        return (
            <div className="Signin">
                <Header/>
                <div className="container row align-center justify-center">
                    <div className="Signin__content col align-center justify-center">
                        <form className="col align-center justify-center" onSubmit={this.Signin}>
                            <div className="row justify-between">
                                <DefaultInput
                                    type="text"
                                    placeholder='Անուն․․․'
                                    name='name'
                                    width='48%'

                                />
                                <DefaultInput
                                    type="text"
                                    placeholder='Ազգանուն․․․'
                                    name='surname'
                                    width='48%'

                                />
                            </div>
                            <DefaultInput
                                type="text"
                                placeholder='E-mail․․․'
                                name='mail'
                                width='100%'

                            />
                            <DefaultInput
                                type="tel"
                                placeholder='Հեռախոսահամար․․․'
                                name='phone'
                                width='100%'

                            />
                            <div className="row justify-between">
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
                            </div>
                            <div className='row justify-between' style={{width: '100%'}}>
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
                            <label className='file row align-center'>
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
<<<<<<< HEAD
                            <div className="Signin__links row align-end justify-between">
                                <Link className='link' to='/user/login'>Մուտք</Link>

                                <DefaultBtn
                                    type='submit'
                                    name='Գրանցվել'
                                    background='#143645'
                                    color='#ffffff'
                                    light={30}
                                    className='Signin__btn'
                                />
                            </div>
                        </form>

=======
                        <div className="Signin__links row align-end justify-between">
                            <Link className='link' to='/user/login'>Մուտք</Link>

                                <DefaultBtn
                                    type='submit'
                                    name='Գրանցվել'
                                    background='#143645'
                                    color='#ffffff'
                                    light={30}
                                    className='Signin__btn'
                                />
                            </div>
                        </form>

>>>>>>> fbea8a74f658d567abf2a46e3eb3a687659ef11b
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const MapStateToProps = state => state.location;
const MainSignin = connect(MapStateToProps)(Signin)
export  default MainSignin;