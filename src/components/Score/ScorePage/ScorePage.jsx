import React, {Component} from "react";
import './ScorePage.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import {
    faCog,
    faExternalLinkAlt,
    faMapMarkerAlt,
    faPhoneSquareAlt,
    faShareAltSquare,
    faPencilAlt, faAngleDoubleRight, faMailBulk, faEnvelopeSquare, faLink,
} from "@fortawesome/free-solid-svg-icons";
import SliderAuto from "../../SliderAuto/SliderAuto";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {connect} from "react-redux";
import {GetScoreList} from "../../../redux/score/action";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {GetCity} from "../../../redux/location/action";
import Loading from "../../Loading";
import ScoreAddImg from "./AddImg";



class ScorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            img: [],
            NameForm: false,
            LocationForm: false,
            PhoneForm: false,
            UrlForm: false,
            EmailForm: false,
            FacebookForm: false,
            InstagramForm: false,
            YoutubeForm: false,
            SircleValue: '',
            CityValue: '',
            loading: false,
            loadingSlider: false
        }
        this.NameRef = React.createRef()
        this.SircleRef = React.createRef()
        this.CityRef = React.createRef()
        this.AddresRef = React.createRef()
        this.PhoneRef1 = React.createRef()
        this.PhoneRef2 = React.createRef()
        this.PhoneRef3 = React.createRef()
        this.UrlRef = React.createRef()
        this.EmailRef = React.createRef()
        this.FacebookRef = React.createRef()
        this.InstagramRef = React.createRef()
        this.YoutubeRef = React.createRef()
    }


    Setings = (e) => {
        this.setState({loading: true})
        let data = new FormData();
        data.append('id', this.props.data.id)
        data.append('name', this.NameRef.current.value)
        data.append('sircle', this.state.SircleValue ? this.state.SircleValue : this.SircleRef.current.props.selected)
        data.append('city', this.state.CityValue ? this.state.CityValue : this.CityRef.current.props.selected)
        data.append('addres', this.AddresRef.current.value)
        data.append('phone[]', this.PhoneRef1.current.value)
        data.append('phone[]', this.PhoneRef2.current.value)
        data.append('phone[]', this.PhoneRef3.current.value)
        data.append('url', this.UrlRef.current.value)
        data.append('email', this.EmailRef.current.value)
        data.append('facebook', this.FacebookRef.current.value)
        data.append('instagram', this.InstagramRef.current.value)
        data.append('youtube', this.YoutubeRef.current.value)

        POST(Url.scoreSetings, data).then(res => {
            if (res) {
                this.setState({loading: false})
            }
            this.props.dispatch(GetScoreList())
            this.setState({
                NameForm: false,
                LocationForm: false,
                PhoneForm: false,
                UrlForm: false,
                EmailForm: false,
                FacebookForm: false,
                InstagramForm: false,
                YoutubeForm: false,
            })
        })
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
            <div className="score_page" style={
                this.state.NameForm ||
                this.state.LocationForm ||
                this.state.PhoneForm ||
                this.state.UrlForm ||
                this.state.EmailForm ||
                this.state.FacebookForm ||
                this.state.InstagramForm ||
                this.state.YoutubeForm
                    ? {background: '#00000050'} : {background: 'none'}}
            >
                <div className="score_page_info">
                    {
                        this.state.loading ?
                            <div className="loading_score_setings"><Loading type='spokes' color='#1c8080' size={150}/>
                            </div> : ''

                    }
                    <div className='info__container' style={this.state.NameForm ? {margin: '10px 0'} : {margin: '0'}}>
                        <h3 style={{color: "brown"}}>{data.name}</h3>
                        <div className="edit" onClick={() => this.setState({NameForm: true})}>
                            <FontAwesomeIcon icon={faPencilAlt}/>
                        </div>
                        <div className="form" style={this.state.NameForm ? {display: 'flex'} : {display: 'none'}}>
                            <input

                                type='text'
                                name='name'
                                defaultValue={data.name}
                                ref={this.NameRef}
                            />
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </li>
                            <div className='info__container'
                                 style={this.state.LocationForm ? {margin: '10px 0'} : {margin: '0'}}>
                                <ul className="addres">
                                    <li>{data.sircle}</li>
                                    <li>{data.city}</li>
                                    <li>{data.addres}</li>
                                </ul>
                                <div className="edit" onClick={() => {
                                    this.props.dispatch(GetCity(this.SircleRef.current.state.optId || 1))
                                    this.setState({LocationForm: true})
                                }}>
                                    <FontAwesomeIcon icon={faPencilAlt}/>
                                </div>
                                <div className="form"
                                     style={this.state.LocationForm ? {display: 'flex'} : {display: 'none'}}>
                                    <DefaultSelect
                                        ref={this.SircleRef}
                                        data={this.props.location.sircle}
                                        onChange={(e) => {
                                            this.props.dispatch(GetCity(e.target.selectedIndex + 1))
                                            this.setState({
                                                SircleValue: e.target.value
                                            })
                                        }}

                                    />
                                    <DefaultSelect
                                        data={this.props.location.city}
                                        width='48%'
                                        ref={this.CityRef}
                                        onChange={(e) => {
                                            this.setState({
                                                CityValue: e.target.value
                                            })
                                        }}
                                    />
                                    <input
                                        type='text'
                                        id='addres'
                                        ref={this.AddresRef}
                                        defaultValue={data.addres}
                                    />
                                </div>
                            </div>
                        </ul>
                        <ul className="phone">
                            <ul>
                                <div className='info__container' style={this.state.PhoneForm?{margin:'10px 0'}:{margin:'0'}}>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhoneSquareAlt}/>
                                        </div>
                                        {data.phone[0].replace(/374/g, '(+374)')}
                                    </li>
                                    <div className="edit" onClick={() => this.setState({PhoneForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.PhoneForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='phone'
                                            type='text'
                                            defaultValue={data.phone[0]}
                                            ref={this.PhoneRef1}
                                        />
                                    </div>
                                </div>

                                <div className='info__container' style={this.state.PhoneForm?{margin:'10px 0'}:{margin:'0'}}>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhoneSquareAlt}/>
                                        </div>
                                        {data.phone[1].replace(/374/g, '(+374)')}
                                    </li>
                                    <div className="edit" onClick={() => this.setState({PhoneForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.PhoneForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='phone'
                                            type='text'
                                            defaultValue={data.phone[1]}
                                            ref={this.PhoneRef2}
                                        />
                                    </div>
                                </div>
                                <div className='info__container' style={this.state.PhoneForm?{margin:'10px 0'}:{margin:'0'}}>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faPhoneSquareAlt}/>
                                        </div>
                                        {data.phone[2].replace(/374/g, '(+374)')}
                                    </li>
                                    <div className="edit" onClick={() => this.setState({PhoneForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.PhoneForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='phone'
                                            type='text'
                                            defaultValue={data.phone[2]}
                                            ref={this.PhoneRef3}
                                        />
                                    </div>
                                </div>

                            </ul>

                        </ul>

                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            </li>
                            <ul className="site_network">

                                <div className='info__container' style={this.state.UrlForm?{margin:'10px 0'}:{margin:'0'}}>
                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faLink}/>
                                        </div>
                                        <a href={data.url} target='_blank'>
                                            {data.url}
                                        </a>
                                    </li>
                                    <div className="edit" onClick={() => this.setState({UrlForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.UrlForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='url'
                                            type='text'
                                            defaultValue={data.url}
                                            ref={this.UrlRef}
                                        />
                                    </div>
                                </div>

                                <div className='info__container'>

                                    <li>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelopeSquare}/>
                                        </div>
                                        {data.email}
                                    </li>
                                    <div className="edit" onClick={() => this.setState({EmailForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.EmailForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='url'
                                            type='text'
                                            defaultValue={data.email}
                                            ref={this.EmailRef}
                                        />
                                    </div>
                                </div>
                            </ul>

                        </ul>

                        <ul>
                            {
                                data.facebook || data.instagram ? <li>
                                    <FontAwesomeIcon icon={faShareAltSquare}/>
                                </li> : ''
                            }
                            <ul className="social_network links">
                                <div className='info__container urls'>
                                    <li>
                                        <a className="facebook" href={data.facebook}>
                                            <FontAwesomeIcon icon={faFacebookSquare} style={{marginRight: '10px'}}/>
                                            Facebook
                                        </a>
                                    </li>
                                    <div className="edit" onClick={() => this.setState({FacebookForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.FacebookForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='url'
                                            type='text'
                                            defaultValue={data.facebook}
                                            ref={this.FacebookRef}
                                        />
                                    </div>
                                </div>
                                <div className='info__container urls'>
                                    <li>
                                        <a className="instagram" href={data.instagram}>
                                            <FontAwesomeIcon icon={faInstagram} style={{marginRight: '10px'}}/>
                                            Instagram
                                        </a>

                                    </li>
                                    <div className="edit" onClick={() => this.setState({InstagramForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.InstagramForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='url'
                                            type='text'
                                            defaultValue={data.instagram}
                                            ref={this.InstagramRef}
                                        />
                                    </div>
                                </div>
                                <div className='info__container urls'>
                                    <li>
                                        <a className="youtube" href={data.youtube}>
                                            <FontAwesomeIcon icon={faYoutubeSquare} style={{marginRight: '10px'}}/>
                                            Youtube
                                        </a>

                                    </li>
                                    <div className="edit" onClick={() => this.setState({YoutubeForm: true})}>
                                        <FontAwesomeIcon icon={faPencilAlt}/>
                                    </div>
                                    <div className="form"
                                         style={this.state.YoutubeForm ? {display: 'flex'} : {display: 'none'}}>
                                        <input
                                            className='url'
                                            type='text'
                                            defaultValue={data.youtube}
                                            ref={this.YoutubeRef}
                                        />
                                    </div>
                                </div>

                            </ul>
                        </ul>
                    </nav>
                    {
                        this.state.NameForm ||
                        this.state.LocationForm ||
                        this.state.PhoneForm ||
                        this.state.UrlForm ||
                        this.state.EmailForm ||
                        this.state.FacebookForm ||
                        this.state.InstagramForm ||
                        this.state.YoutubeForm
                            ?
                            <div className='btns'>
                                <div className="send">
                                    <DefaultBtn
                                        name='Պահպանել․․․'
                                        color='#ffffff'
                                        background='#434455'
                                        onClick={this.Setings}
                                    />
                                </div>
                                <div className="send">
                                    <DefaultBtn
                                        name='Չեղարկել․․․'
                                        color='#ffffff'
                                        background='#434455'
                                        onClick={() => {
                                            this.setState({
                                                NameForm: false,
                                                LocationForm: false,
                                                PhoneForm: false,
                                                UrlForm: false,
                                                EmailForm: false,
                                                FacebookForm: false,
                                                InstagramForm: false,
                                                YoutubeForm: false,
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            : ''
                    }
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