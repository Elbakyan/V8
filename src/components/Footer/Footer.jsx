import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faMobileAlt ,faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'
export default function (){
    // <i class="fas fa-mobile-alt"></i>
    const info = [

        {
            icon:<FontAwesomeIcon icon={faMapMarkerAlt} />,
            name:<a target='_blank' href="https://goo.gl/maps/N4F8jzEy9cvaGFbe9">Ք․ԵՐԵՎԱՆ Ռաֆու 19</a>
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