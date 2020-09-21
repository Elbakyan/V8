import React,{Component} from 'react';
import Header from "./Header";
import Footer from "../../Footer/Footer";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {Link} from "react-router-dom";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetCity} from "../../../redux/location/action";

class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quantity:1,
            obj:[
                {
                    type:"text",
                    placeholder:'Հեռախոսահամար․․․',
                    name:'mail',
                    width:'48%'
                }
            ]
        }
    }

    add = () =>{
        let x = this.state.obj;

        if(this.state.quantity < 3){

            x.push(this.state.obj[0])
            this.setState({
                // quantity:++this.state.quantity
                obj:x,
                quantity:++this.state.quantity
            })
        }

    }
    clear = () =>{
        let x = this.state.obj;

        if(this.state.quantity){
            x.pop()
            this.setState({
                // quantity:++this.state.quantity
                obj:x,
                quantity:--this.state.quantity
            })
        }
    }
    componentDidMount() {

        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))
    }
    render() {

        console.log(this.props)
        return (
            <div className="Signin-score">
                <Header/>
                <div className="container row align-center justify-center">
                    <div className="Signin-score__score-content score col align-center justify-center">
                        <form className="col align-center justify-center">
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
                                placeholder='Ընկերության Անվանումը․․․'
                                name='surname'
                                width='100%'

                            />
                            <DefaultInput
                                type="text"
                                placeholder='E-mail․․․'
                                name='mail'
                                width='100%'

                            />
                            <div className="phone-block row wrap justify-between">
                                {
                                    this.state.obj.map(({type,placeholder,name,width},i)=>(
                                        i == 0 ?
                                            <DefaultInput
                                                type={type}
                                                placeholder={placeholder}
                                                name={name}
                                                width="100%"
                                            />:
                                            <DefaultInput
                                                type={type}
                                                placeholder={placeholder}
                                                name={name}
                                                width={width}
                                            />
                                    ))
                                }



                            </div>
                            {
                                this.state.obj.length > 1 ?<span onClick={this.clear}><a href="#">Հեռացնել</a> </span>:''
                            }
                            <span onClick={this.add}><a href="#">Ավելացնել հեղախոսահամար</a> </span>

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
                            <DefaultInput
                                type="text"
                                placeholder='Հասցե․․․'
                                name='surname'
                                width='100%'

                            />
                            <DefaultBtn
                                name='Գրանցվել'
                                background='#143645'
                                color='#ffffff'
                                light={30}
                                className='Signin__btn'
                            />
                        </form>
                        <div className="Signin__links row align-start">
                            <Link className='link' to='/score/login'>Մուտք</Link>
                        </div>
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
