import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMapMarkerAlt,faMobileAlt ,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'
// import  {Icon} from "rsuite";
export default function (){
    // <i class="fas fa-mobile-alt"></i>
    const info = [

        {
            icon:<FontAwesomeIcon icon={faMapMarkerAlt} />,
            name:'Ք․ԵՐԵՎԱՆ Ռաֆու 19'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-41-888844'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-41-888844'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-93-888044'
        },
        {
            icon:<FontAwesomeIcon icon={faEnvelopeOpenText} />,
            name:'info@v8.am'
        },
    ]

    return (
        <footer >
            <div className="container row footer_container ">
                    <nav className="Footer_nav">

                            <h4>Հասցե</h4>
                            {
                                info.map(({icon,name},i)=>(
                                    <ul>
                                        <li>{icon}</li>
                                        <li>{name}</li>
                                    </ul>
                                ))
                            }

                    </nav>
            </div>
        </footer>
    )
}