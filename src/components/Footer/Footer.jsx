import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faMobileAlt, faEnvelopeOpenText, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-router-dom";
import {faFacebook, faFacebookF, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import Art from "../Alert";
import './Footer.scss'
export default class Footer extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backConection: false,
            alert: false
        }
    }
    Send = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.mail,data).then(res => {
            if (res.status){
                this.setState({
                    alert: true
                })
                setTimeout(() => {
                    this.setState({
                        backConection: false,
                        alert: false
                    })
                },1500)
            }
        })
    }
    render() {
        return (
            <footer >
                {
                    this.state.backConection?<div className="back__conection">
                        {
                            this.state.alert?
                                <Art type='success' content='Հաղորդագրությունը ուղարկված է․' />:''
                        }

                        <form onSubmit={this.Send}>
                            <div className="inputs">
                                <input type="text" name='name' placeholder='Անուն' required/>
                                <input type="text" name='surname' placeholder='Ազգանուն' required/>
                                <input type="number" name='phone' placeholder='Հեռախոսահամար' required/>
                            </div>
                            <div className="text">
                                <textarea name="message" placeholder='Հաղորդագրություն' required></textarea>
                            </div>
                            <div className="button">
                                <input type="email" name='email' placeholder='E-mail' required/>
                                <button className='close' onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({backConection: false})
                                }}>Չեղարկել</button>
                                <button className='send' type='submit'>Ուղարկել</button>
                            </div>
                        </form>
                    </div>:''
                }
                <div className="container Footer">
                    <nav className="Footer_nav">
                        <ul className='Footer_nav__about'>
                            <li>
                                <Link to={''}>
                                    Մեր Մասին
                                </Link>
                            </li>
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({backConection: true})
                                }}>
                                    Հետադարձ կապ
                                </a>
                            </li>
                            <li>
                                <Link to={''}>
                                    Գնացուցակ
                                </Link>
                            </li>
                        </ul>
                        <div className='Designed_Elbakyan'>
                            <span>
                                Copyright  2016-2021. <a href="https://www.facebook.com/ElbakyanSoft" target="_blank">All rights reserved. <span style={{color:'rgb(255 173 173)'}}>Elbakyan Soft</span></a>. <sup>&copy;</sup>
                            </span>
                        </div>
                    </nav>
                    <nav>
                        <ul className='social_network'>
                            <li className='facebook'>
                                <a href='https://www.facebook.com/groups/V8Armenia' target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li className='instagram'>
                                <a href='https://www.instagram.com/avtoteghekatu' target="_blank">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                            </li>
                        </ul>

                        <ul className='our__phone'>
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <a href="tel:+37443888844">+374 41 88 88 44</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <a href="tel:+37443888844">+374 43 88 88 44</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <a href="tel:+37443888844">+374 93 88 80 44</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </footer>
        )
    }
}