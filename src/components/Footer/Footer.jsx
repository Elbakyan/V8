import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faMobileAlt ,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'
import {Link} from "react-router-dom";
import {faFacebook, faFacebookF, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
export default function (){
    // <i class="fas fa-mobile-alt"></i>
    const info = [

        {
            icon:<FontAwesomeIcon icon={faMapMarkerAlt} />,
            name:<a target='_blank' href="https://www.google.com/maps/@40.1742553,44.4522407,20.75z">Ք․ԵՐԵՎԱՆ Ռաֆու 19</a>
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:<a href="tel:+37441888844">(+374)-41-88-88-44</a>
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:<a href="tel:+37443888844">(+374)-43-88-88-44</a>
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:<a href="tel:+37493888044">(+374)-93-88-80-44</a>
        },
        {
            icon:<FontAwesomeIcon icon={faEnvelopeOpenText} />,
            name:<a href="mailto:'info@v8.am">info@v8.am</a>
        },
    ]

    return (
        <footer >
            <div className="container Footer">
                    <nav className="Footer_nav">
                        <ul className='Footer_nav__about'>
                            <li>
                                <Link to={''}>
                                    Մեր Մասին
                                </Link>
                            </li>
                            <li>
                                <Link to={''}>
                                    Հետադարձ կապ
                                </Link>
                            </li>
                            <li>
                                <Link to={''}>
                                    Դառնալ գործընկեր
                                </Link>
                            </li>
                            <li>
                                <Link to={''}>
                                    Գնացուցակ
                                </Link>
                            </li>
                        </ul>
                        <div className='Designed_Elbakyan'>
                            <span>
                                Copyright © 2016-2020. All rights reserved.
                            </span>
                            <span>
                                Elbakyan Soft.<sup>&copy;</sup>
                            </span>
                        </div>
                    </nav>
                    <nav>
                        <ul className='social_network'>
                            <li className='facebook'>
                                <Link to={''}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                            </li>
                            <li className='instagram'>
                                <Link to={''}>
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </footer>
    )
}