import React, {Component} from "react";
import './StoreInfo.scss';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkerAlt,
    faPhoneSquareAlt, faTag, faAt, faClock, faCreditCard, faTruck,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import SliderAuto from "../SliderAuto/SliderAuto";
import {connect} from "react-redux";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {GetMessage, SendMessage} from "../../redux/message/action";
import Art from "../Alert";
import Loading from "../Loading";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";



class StoreInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            message:false
        }
    }

    componentDidMount() {
        let data = new FormData()
        data.append('id', this.props.id || window.location.pathname.split('/').pop())
        POST(Url.getstoreforcustomer,data).then(res => {
            if(res){
                this.OpenClose(res[0]['work_to'],res[0]['work_from'])
                this.setState({
                    data: res[0]
                })
            }
        })
    }
    
    Send = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);

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

    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.form);
            if (this.textareaRef.value.trim().length > 0){
                this.props.dispatch(SendMessage(data))
            }
            this.props.dispatch(GetMessage())
            this.textareaRef.value = ''
            this.setState({
                message:true
            })
            setTimeout(()=>{
                this.setState({
                    message:false
                })
            },1500)
        }
    }
    OpenClose = (to, from) => {
        let hourse = new Date().getHours(),
            minute = new Date().getMinutes(),
            time = (hourse * 60) + minute,
            toHourse = +to.split(':')[0],
            toMinute = +to.split(':')[1],
            toTime = (toHourse * 60) + toMinute,
            fromHourse = +from.split(':')[0],
            fromMinute = +from.split(':')[1],
            fromTime = (fromHourse * 60) + fromMinute;

        if (toHourse < fromHourse){
            if (time >= toTime && time <= fromTime){
                this.setState({
                    open: true
                })
            }else{
                this.setState({
                    open: false
                })
            }
        }else{
            if (hourse <= toHourse && minute >= toMinute && hourse >= fromHourse && minute  >= fromMinute){
                this.setState({
                    open: true
                })
            }else{
                this.setState({
                    open: false
                })
            }
        }
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
                                    <ul className='working__days'>

                                        <li><FontAwesomeIcon icon={faCalendar} /></li>
                                        <li style={{fontWeight:'bold'}}>Աշխ․ օր․</li>
                                        {
                                            this.state.data.working_days.map((el,i)=>{
                                                return(
                                                    <li key={i} style={{fontSize:'14px'}}>{el} </li>
                                                )
                                            })

                                        }

                                    </ul>
                                    <ul className='store_phone'>
                                        <li><FontAwesomeIcon icon={faPhoneSquareAlt } /></li>
                                        <li style={{fontWeight:'bold'}}>Հեռախոսահամար:</li>
                                        <ul>
                                            {
                                                this.state.data.phone.map((p,i) => {
                                                    if (p){
                                                        let p1 = p.slice(0,2)
                                                        let p2 = p.slice(2,4)
                                                        let p3 = p.slice(4,6)
                                                        let p4 = p.slice(6,8)
                                                        return (
                                                            <li key={i}>0{`${p1} ${p2} ${p3} ${p4}`}</li>
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
                                    <ul className='store_phone'>
                                        <li><FontAwesomeIcon icon={faClock} /></li>
                                        <li style={{fontWeight:'bold'}}>Աշխ-Ժամերը:</li>
                                        <ul>
                                            {
                                                this.state.data['work_to']?
                                                    <li>
                                                        {this.state.data['work_to'] + '-' + this.state.data['work_from']}
                                                        {
                                                            this.state.open?
                                                                <span style={{color:"green",margin: "0px 10px", fontWeight:"bold"}}>Բաց է</span>:
                                                                <span style={{color:"red",margin: "0px 10px", fontWeight:"bold"}}>Փակ է</span>
                                                        }


                                                    </li>:''
                                            }

                                        </ul>

                                    </ul>
                                    {
                                        +this.state.data.credit === 1?
                                            <ul className='store_phone'>
                                                <li><FontAwesomeIcon icon={faCreditCard} /></li>
                                                <li style={{fontWeight:'bold'}}>Ապառիկ վաճառք․․․</li>

                                            </ul>:''
                                    }
                                    {
                                        +this.state.data.delivery === 1?
                                            <ul className='store_phone'>
                                                <li><FontAwesomeIcon icon={faTruck} /></li>
                                                <li style={{fontWeight:'bold'}}>Առաքում</li>

                                            </ul>:''
                                    }

                                </nav>
                                {
                                    this.state.message?
                                        <Art width={100} content="Հաղորդագրությունը ուղարկված է"/>:''
                                }
                                <ul className='store_message'>
                                    <li>
                                        {
                                            this.state.data.id && this.props.user.id?
                                                <form onSubmit={this.Send} ref={el => this.form = el}>
                                                    <textarea placeholder='Ուղարկել հաղորդագրություն․․․' ref={el => this.textareaRef = el} name='message' onKeyDown={this.onEnterPress}></textarea>
                                                    <input type="hidden" name='get_id' value={this.state.data.id}/>
                                                    <input type="hidden" name='send_id' value={this.props.user.id}/>
                                                    <input type="hidden" name='state' value='score'/>
                                                    <button type='submit' className='send'>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </button>
                                                </form>:''
                                        }
                                        {
                                            this.state.data.score_id && this.props.score.score.id?
                                                <form onSubmit={this.Send} ref={el => this.form = el}>
                                                    <textarea placeholder='Ուղարկել հաղորդագրություն․․․' name='message' ref={el => this.textareaRef = el} onKeyDown={this.onEnterPress}></textarea>
                                                    <input type="hidden" name='get_id' value={this.state.data.score_id}/>
                                                    <input type="hidden" name='send_id' value={this.props.score.score.id}/>
                                                    <input type="hidden" name='state' value='scores'/>
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
                        </div>: <Loading type="spinningBubbles" size={500} color="#101423"/>
                }

            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        search: state.search,
        user: state.user,
        score: state.score
    }
};
const MainStoreInfo = connect(MapStateToProps)(StoreInfo);
export default MainStoreInfo;
