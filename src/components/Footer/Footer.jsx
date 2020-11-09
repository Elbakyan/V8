import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faMobileAlt ,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'
export default function (){
    // <i class="fas fa-mobile-alt"></i>
    const info = [

        {
            icon:<FontAwesomeIcon icon={faMapMarkerAlt} />,
            name:'Ք․ԵՐԵՎԱՆ Ռաֆու 19'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-41-88-88-44'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-43-88-88-44'
        },
        {
            icon:<FontAwesomeIcon icon={faMobileAlt} />,
            name:'(374)-93-88-80-44'
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
                                       <ul key={i}>
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