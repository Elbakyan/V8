import React from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link, Redirect} from "react-router-dom";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetCity} from "../../../redux/location/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            status: undefined,
            message: '',
            redirect: false
        }


    }


    componentDidMount() {
        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))

    }
    Signin = (e) =>{
        e.preventDefault();
        let data = new FormData(e.target)

       POST(Url.registration,data).then(res => {
            this.setState({
                status: res.status,
                message:res.message
            })
           setTimeout(() => {
               this.setState({
                   redirect: res.status
               })
           },1000)

        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="Signin">
                {
                    this.state.redirect ? <Redirect to='/user/login'/> : ''
                }

                <Header/>
                <div className="container row align-center justify-center">

                    <div className="Signin__content col align-center justify-center">

                        <form className="col align-center justify-center" onSubmit={this.Signin.bind(this)}>
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
                                name='email'
                                width='100%'

                            />
                            <label htmlFor="">
                                +374
                                <DefaultInput
                                    type="tel"
                                    placeholder='Հեռախոսահամար․․․'
                                    name='phone'

                                />
                            </label>

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
                                    name='sircle'
                                />
                                <DefaultSelect
                                    data={this.props.city}
                                    width= '48%'
                                    name={'city'}
                                />
                            </div>
                            <label className='file row align-center'>
                                <span className='file__name'>{this.state.img === ""?'Ներբեռնել լուսանկար․․․':this.state.img}</span>
                                <DefaultInput
                                    onChange={(e) => {
                                        this.setState({
                                            img: e.target.value
                                        })
                                    }}
                                    className="file_input"
                                    type="file"
                                    placeholder='Լուսանկար․․․'
                                    width='100%'
                                    name='image'

                                />
                            </label>

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