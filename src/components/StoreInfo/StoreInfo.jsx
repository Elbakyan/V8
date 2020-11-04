import React, {Component} from "react";
import './StoreInfo.scss';
import {Slider} from "@material-ui/core";
import {
    faFacebookF,
    faFacebookSquare,
    faInstagram,
    faYoutube,
    faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";
import {
    faCog,
    faExternalLinkAlt,
    faMapMarkerAlt,
    faPhoneSquareAlt,
    faShareAltSquare,
    faPencilAlt, faAngleDoubleRight, faMailBulk, faEnvelopeSquare, faLink, faTag, faAt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import SliderAuto from "../SliderAuto/SliderAuto";


class StoreInfo extends Component{
    render() {
        return(
            <div className="container">
                <div className='store'>

                    <div className='store__info'>
                        <div className='store__name'>
                            <p>Anvanumy</p>
                        </div>

                        <nav className="store__getInfo">
                            <ul>
                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                                <li>Հասցե</li>
                                <li>hasce</li>
                            </ul>
                            <ul className='store_phone'>
                                <li><FontAwesomeIcon icon={faPhoneSquareAlt } /></li>
                                <li>Հեռախոսահամար</li>
                                <ul>
                                    <li>(+374)-94-666-222</li>
                                    <li>(+374)-94-666-222</li>
                                    <li>(+374)-94-666-222</li>
                                </ul>

                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faTag} /></li>
                                <li>Կայք</li>
                                <li>hasce</li>
                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faAt} /></li>
                                <li>Էլ․ հասցե</li>
                                <li>hasce</li>
                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li>hasce</li>
                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li>hasce</li>
                            </ul>
                            <ul>
                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                <li>hasce</li>
                            </ul>
                            <ul className='store_message'>
                                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                                <li>
                                    <textarea>

                                    </textarea>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="store__slider">
                        <SliderAuto autoImage={this.props.img}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreInfo