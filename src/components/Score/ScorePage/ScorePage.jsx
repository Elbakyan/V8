import React, {Component} from "react";
import './ScorePage.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneSquareAlt,
    faLink,
    faCreditCard,
    faTimesCircle,
    faCalendarAlt,
    faBuilding,
    faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import SliderAuto from "../../SliderAuto/SliderAuto";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {connect} from "react-redux";
import {GetScoreList, GetScoreListId} from "../../../redux/score/action";
import ScoreAddImg from "./AddImg";
import {faCheckCircle, faClock} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";



class ScorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            img: []
        }
    }
    componentDidMount() {
        this.props.dispatch(GetScoreListId(window.location.pathname.split('/').pop()))

    }

    UbdateImg = (e) => {
        this.setState({
            loadingSlider: true
        })
        let data = new FormData();
        data.append('id', this.props.data.id)
        data.append('img_url', e.target.dataset.url)
        data.append('img', this.props.data.img)
        if (e.target.dataset.url != undefined || e.target.dataset.img != undefined){
            POST(Url.scoreSetings, data).then(res => {

                if (res){
                    this.props.dispatch(GetScoreList())
                    this.setState({
                        loadingSlider: false
                    })
                }
            })
        }else {
            this.setState({
                loadingSlider: false
            })
        }

    }
    AddSliderImg = (e) => {
        this.setState({loadingSlider: true})
        let data = new FormData()
        let tmpImg = this.state.img;

        Object.values(e.target.files).map(img => {
            data.append('file[]', img);
            tmpImg.push(img);
        })
        data.append('id', this.props.data.id);

        this.setState({
            img: tmpImg,
        })
        if ((this.props.data.img.length + Array.from(data).length) <= 11) {
            POST(Url.scoreSetings, data).then(res => {
                if (res) {
                    this.props.dispatch(GetScoreList())
                    this.setState({loadingSlider: false})
                }
            })
        } else {
            alert('Chi kareli' + (this.props.data.img.length + Array.from(data).length) + 'nkar gcel')
            this.setState({loadingSlider: false})
        }

    }
    render() {
        let data = this.props.data;
        return (
            <div className="score__page">
                <div className="spage__container">
                    <div className="spage__title">
                        <h2>{data.name}</h2>
                        <div className="spage__settings">
                            <Link to={'/score/account/settings/' + data.id}><FontAwesomeIcon icon={faSlidersH}/></Link>
                        </div>
                    </div>
                    <div className="spage__working__days">
                        <h3 className='spage__subtitle'>Աշխատանքաին օրեր և ժամեր․</h3>
                        <ul>
                            <li>
                                <span className='spage__icon'>
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </span>
                                {data['working_days']}
                            </li>
                            <li>
                                <span className='spage__icon'>
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                                {data['work_to']}-
                                {data['work_from']}
                            </li>
                        </ul>
                    </div>
                    <div className="spage__location">
                        <h3 className="spage__subtitle">Տարածաշրջան․</h3>
                        <ul>
                            <span className="spage__icon">
                                <FontAwesomeIcon icon={faBuilding} />
                            </span>
                            <li>{data.sircle}</li>
                            <li>{data.city}</li>
                            <li>{data.addres}</li>
                        </ul>
                    </div>
                    <div className="spage__phone">
                        <h3 className="spage__subtitle">Հեռախոսահամար․</h3>
                        <ul>
                            <span className="spage__icon">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </span>
                            {
                                data.phone.map(phone =>{
                                    let p1 = phone.slice(0,2)
                                    let p2 = phone.slice(2,4)
                                    let p3 = phone.slice(4,6)
                                    let p4 = phone.slice(6,8)
                                    if (phone){
                                        return <li key={phone}>(0{`${p1} ${p2} ${p3} ${p4}`})</li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                    {
                        data.url || data.facebook || data.instagram || data.youtube?
                            <div className="spage__links">
                                <h3 className="spage__subtitle">Հղումներ․</h3>
                                <ul>
                                    {
                                        data.url?
                                            <li><a href={data.url} className="spage__links"><FontAwesomeIcon icon={faLink} /></a></li>:''
                                    }
                                    {
                                        data.facebook?
                                            <li><a href={data.facebook} className="spage__links"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>:''
                                    }
                                    {
                                        data.instagram?
                                            <li><a href={data.instagram} className="spage__links"><FontAwesomeIcon icon={faInstagram} /></a></li>:''
                                    }
                                    {
                                        data.youtube?
                                            <li><a href={data.youtube} className="spage__links"><FontAwesomeIcon icon={faYoutube} /></a></li>:''
                                    }
                                </ul>
                            </div>:''
                    }
                    <div className="spage__credit">
                        <span className="spage__icon"><FontAwesomeIcon icon={faCreditCard} /></span>
                        <h3 className="spage__subtitle">Ապառիկ վաճառք․</h3>
                        {
                            +data.credit?
                                <span className="spage__icon yes"><FontAwesomeIcon icon={faCheckCircle} /></span>:
                                <span className="spage__icon no"><FontAwesomeIcon icon={faTimesCircle} /></span>
                        }
                    </div>
                </div>
                <div className="slider__container">
                    {
                        data.img != false?
                            <SliderAuto autoImage={data.img} edit={true} onClick={this.UbdateImg} id={data.id} loading={this.state.loadingSlider} AddImg={this.AddSliderImg}/>:
                            <ScoreAddImg autoImage={data.img} id={data.id} onChange={this.AddSliderImg} loading={this.state.loadingSlider}/>
                    }
                </div>
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location
    }
}

const MainScorePage = connect(MapStateToProps)(ScorePage);
export default MainScorePage;