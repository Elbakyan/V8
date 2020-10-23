import React, {Component} from "react";
import './ScorePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import {
    faCog,
    faExternalLinkAlt,
    faMapMarkerAlt,
    faPhoneSquareAlt,
    faShareAltSquare
} from "@fortawesome/free-solid-svg-icons";
import SliderAuto from "../../User/UserCars/SliderAuto/SliderAuto";
import {Link} from "react-router-dom";


let data = {
    name:'AutoDoc',
    email:'info@autoDoc.am',
    sircle:'Yerevan',
    city:'Malatia',
    addres:'andraniki 12',
    phone:[
        '37477447744',
        '37455667744',
        '37455667844'
    ],
    url:'https://autodoc.am',
    facebook:'https://www.facebook.com/',
    instagram:'https://www.instagram.com/',
    youtube:'https://www.youtube.com/',
    img:[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYi7lRMz8JpCvSqfXjmFNSjWqqpQ823UHzBw&usqp=CAU',
        'https://www.free4euroalternatives.org/wp-content/uploads/2018/07/auto-shops-5.jpg',
        'https://www.impacttalks.org/wp-content/uploads/2019/02/Auto-Garage-Safety-How-to-Prevent-Property-Damage-Personal-Injury-818x490.jpg'
    ]
}

class ScorePage extends Component {
    render() {
        return(
            <div className="score_page">
                <div className="score_page_info">
                    <h3 style={{color:"brown"}}>{data.name}</h3>
                    <nav>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </li>
                           <ul className="addres">
                               <li>{data.sircle}</li>
                               <li>{data.city}</li>
                               <li>{data.addres}</li>
                           </ul>
                        </ul>
                        {/*---*/}
                        <ul className="phone">
                            <li>
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </li>
                            <ul>
                                {
                                    data.phone.map((el,i)=>(
                                        <li key={i}>
                                            {el.replace(/374/g,'(+374)')}
                                        </li>
                                    ))
                                }
                            </ul>

                        </ul>

                        <ul >
                            <li>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </li>
                            <ul className="site_network">
                                {
                                    data.url?<li>
                                        <a href={data.url}>
                                            {data.url}
                                        </a>
                                    </li>:''
                                }
                                <li>
                                    {data.email}
                                </li>
                            </ul>

                        </ul>

                        {/*---*/}
                        <ul >
                            {
                                data.facebook || data.instagram?<li>
                                    <FontAwesomeIcon icon={faShareAltSquare} />
                                </li>:''
                            }
                            <ul className="social_network">
                                {
                                    data.facebook?<li>
                                        <a className="facebook" href={data.facebook}>
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </a>
                                    </li>:''
                                }
                                {
                                    data.instagram?<li>
                                        <a className="instagram" href={data.instagram}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>:''
                                }
                                {
                                    data.youtube?<li>
                                        <a className="youtube" href={data.youtube}>
                                            <FontAwesomeIcon icon={faYoutubeSquare} />
                                        </a>
                                    </li>:''
                                }
                            </ul>
                        </ul>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCog} /></li>
                            <ul>
                                <li>
                                    <Link to={'/'}>Կարգավորումներ</Link>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>

                <div className="score_page_img-map">
                    <div className="score_page_slider">
                        <SliderAuto autoImage={data.img}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScorePage