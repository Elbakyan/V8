import React, {Component, Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import './About.scss'
import Header from "../Home/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import { YMaps, Map } from 'react-yandex-maps';
// 043 888844
// 41 888844
// 93 808844

class About extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
            <div className="container">

                <div className="about">
                    <div className="about__container">
                        <nav className='about__phone'>
                            <ul>
                                <li>
                                    Կոնտակտային տվյալներ
                                </li>
                                <li>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMobileAlt} /></li>
                                        <li>+374 (43) 88 88 44</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMobileAlt} /></li>
                                        <li>+374 (41) 88 88 44</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMobileAlt} /></li>
                                        <li>+374 (93) 80 88 44</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faEnvelope} /></li>
                                        <li>info@v8.am</li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className='about__address'>
                            <ul>
                                <li>
                                    Հասցե
                                </li>
                                <li>
                                    Ք․Երևան փ․Րաֆֆու 19
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="about__map">
                        <YMaps >
                            <div>
                                <Map
                                    defaultState={{ center: [40.174045, 44.452081], zoom: 16 }}
                                    geometry = {{type: "Point", coordinates: [40.174045, 44.452081]}}
                                    properties={{
                                        clusterCaption: 'Geo object №2',
                                        balloonContentBody: 'Balloon content for geo object №2'
                                    }}
                                />
                            </div>
                        </YMaps>
                    </div>
                </div>

            </div>
                <Footer />
            </Fragment>
        )
    }
}

export default About