import React, {Component} from "react";
import './StoreInfo.scss';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkerAlt,
    faPhoneSquareAlt, faTag, faAt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import SliderAuto from "../SliderAuto/SliderAuto";
import {connect} from "react-redux";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {SendMessage} from "../../redux/message/action";



class StoreInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        let data = new FormData()
        data.append('id', this.props.id || window.location.pathname.split('/').pop())
        POST(Url.getstoreforcustomer,data).then(res => {
            this.setState({
                data: res[0]
            })
        })
    }
    Send = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        console.log(Array.from(data))
        this.props.dispatch(SendMessage(data))
        this.setState({
            message:true
        })
        setTimeout(()=>{
            this.setState({
                message:false
            })
        },1500)
    }

    render() {

        return(
            <div className="container">
                {
                    this.state.data?
                        <div className='store'>

                            <div className='store__info'>
                                <div className='store__name'>
                                    <p>{this.state.data.name}</p>
                                </div>

                                <nav className="store__getInfo">
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /></li>
                                        <li style={{fontWeight:'bold'}}>Հասցե:</li>
                                        <li>{this.state.data.sircle}</li>
                                        <li>{this.state.data.city}</li>
                                        <li>{this.state.data.addres}</li>
                                    </ul>
                                    <ul className='store_phone'>
                                        <li><FontAwesomeIcon icon={faPhoneSquareAlt } /></li>
                                        <li style={{fontWeight:'bold'}}>Հեռախոսահամար:</li>
                                        <ul>
                                            {
                                                this.state.data.phone.map(p => {
                                                    if (p){
                                                        return (
                                                            <li>{p}</li>
                                                        )
                                                    }
                                                })
                                            }

                                        </ul>

                                    </ul>
                                    {
                                        this.state.data.url?
                                            <ul>
                                                <li><FontAwesomeIcon icon={faTag} /></li>
                                                <li style={{fontWeight:'bold'}}>Կայք:</li>
                                                <li><a href={this.state.data.url} target='_blank'>{this.state.data.url}</a></li>
                                            </ul>:''
                                    }
                                    <ul>
                                        <li><FontAwesomeIcon icon={faAt} /></li>
                                        <li style={{fontWeight:'bold'}}>Էլ․ հասցե:</li>
                                        <li>{this.state.data.email}</li>
                                    </ul>
                                    {
                                        this.state.data.facebook?
                                            <ul>
                                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                                <li><a href={this.state.data.facebook} target='_blank'>Facebook</a></li>
                                            </ul>: ''
                                    }
                                    {
                                        this.state.data.instagram?
                                            <ul>
                                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                                <li><a href={this.state.data.instagram} target='_blank'>Instagram</a></li>
                                            </ul>: ''
                                    }
                                    {
                                        this.state.data.youtube?
                                            <ul>
                                                <li><FontAwesomeIcon icon={faYoutube} /></li>
                                                <li><a href={this.state.data.youtube} target='_blank'>Youtube</a></li>
                                            </ul>: ''
                                    }

                                </nav>
                                <ul className='store_message'>
                                    <li>
                                        {
                                            this.state.data.id?
                                                <form onSubmit={this.Send}>
                                                    <textarea placeholder='Ուղարկել հաղորդագրություն․․․' name='message'></textarea>
                                                    <input type="hidden" name='get_id' value={this.state.data.id}/>
                                                    <input type="hidden" name='send_id' value={this.props.user.id}/>
                                                    <input type="hidden" name='score' value='score'/>
                                                    <button type='submit' className='send'>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </button>
                                                </form>:''
                                        }


                                    </li>

                                </ul>
                            </div>
                            <div className="store__slider">
                                <SliderAuto autoImage={this.state.data.img}/>
                            </div>
                        </div>: ''
                }

            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        search: state.search,
        user: state.user
    }
};
const MainStoreInfo = connect(MapStateToProps)(StoreInfo);
export default MainStoreInfo;
