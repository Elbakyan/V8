import React from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import DefaultInput from "../forms/inputs/DefaultInput";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {Link} from "react-router-dom";
import DefaultSelect from "../forms/select/DefaultSelect";

class Signin extends React.Component{
    render() {
        return (
            <div className="Signin">
                <Header/>
                <div className="container row align-center justify-center">
                    <div className="Signin__content col align-center justify-center">
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
                                    data={[{name:"Noro"},{name:"Noro"},{name:"Noro"}]}
                                    width= '48%'

                                />
                                <DefaultSelect
                                    data={[{name:"Noro"},{name:"Noro"},{name:"Noro"}]}
                                    width= '48%'
                                />
                            </div>
                            <DefaultBtn
                                name='Գրանցվել'
                                background='#143645'
                                color='#ffffff'
                                light={30}
                                className='Signin__btn'
                            />
                        </form>
                        <div className="Signin__links row align-start">
                            <Link to='/user/login'>Մուտք</Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export  default Signin;
