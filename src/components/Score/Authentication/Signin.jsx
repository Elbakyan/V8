import React, {Component, createRef} from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GetCity} from "../../../redux/location/action";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import Art from "../../Alert";


class Signin extends Component {
    constructor(props) {
        super(props);
        this.message = createRef()
        this.state = {
            quantity: 1,
            obj: [
                {
                    type: "tel",
                    placeholder: 'Հեռախոսահամար․․․',
                    name: 'mail',
                    width: '100%'
                }
            ],
            message: '',
            status: undefined,
            scoreCreated: false,
            redirect: false,
            mes:false

        }

    }

    add = () => {
        let x = this.state.obj;

        if (this.state.quantity < 3) {

            x.push(this.state.obj[0])
            this.setState({
                // quantity:++this.state.quantity
                obj: x,
                quantity: ++this.state.quantity
            })
        }

    }
    clear = () => {
        let x = this.state.obj;

        if (this.state.quantity) {
            x.pop()
            this.setState({
                // quantity:++this.state.quantity
                obj: x,
                quantity: --this.state.quantity
            })

        }
    }

    componentDidMount() {

        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))
    }


    addScore = (e) => {

        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.addscore, data).then(res => {
            this.setState({
                status: res.status,
                message:res.message,
                mes: true
            })
            setTimeout(() => {
                this.setState({
                    mes: false,
                    redirect: res.status
                })
                setTimeout(() => {
                    this.setState({
                        redirect: false
                    })
                },1000)
            },2000)
        })

    }

    render() {

        return (
            <div className="Signin-score">
                {
                    this.state.redirect ? <Redirect to='/score/login'/> : ''
                }
                <Header/>
                <div className="container row align-center justify-center">
                    {
                        this.state.mes?
                            this.state.status?
                                <Art  type='success' content={this.state.message}/>:
                                <Art  type='warning' content={this.state.message}/>
                            :''
                    }
                    <div className="Signin-score__score-content score col align-center justify-center">
                        <form className="col align-center justify-center" onSubmit={this.addScore}
                              encType='multipart/form-data'>
                            <div className="div row justify-between">
                                <DefaultInput
                                    type="text"
                                    placeholder='Անուն․․․'
                                    name='name'
                                    width='48%'
                                    requred
                                />
                                <DefaultInput
                                    type="text"
                                    placeholder='Ազգանուն․․․'
                                    name='surname'
                                    width='48%'
                                    requred

                                />
                            </div>


                            <DefaultInput
                                type="email"
                                placeholder='E-mail․․․'
                                name='email'
                                width='100%'
                                requred

                            />

                            <label className='phone_style'>
                                <DefaultInput
                                    type='number'
                                    placeholder="Հեռախոսահամար"
                                    name='phone'
                                    requred
                                    onChange={
                                        (e)=>{
                                            let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                            if (str){
                                                let num = str[0].match(/\d{8}$/)[0];
                                                e.target.value = num
                                            }
                                        }
                                    }
                                />
                            </label>


                            <div className="div row justify-between">
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


                            <div className="Signin__links row align-end justify-between">
                                <Link className='link' to='/score/login'>Մուտք</Link>
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
export default MainSignin;
