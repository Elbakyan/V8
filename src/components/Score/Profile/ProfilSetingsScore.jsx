import React, {Component} from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {Link} from "react-router-dom";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {GetCity} from "../../../redux/location/action";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {UserExist} from "../../../redux/user/action";
import Art from "../../Alert";



class ProfilSetingsScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgName: '',
            status:undefined,
            messahe:'',
            modifideData:undefined,
            uploadeImg:undefined,
            modifidePassword:undefined
        }
    }

    componentDidMount() {
        this.props.dispatch(GetCity(1))
    }

    GetCity(e) {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))

    }

    UbdateData = (e)=> {
        e.preventDefault();
        let data = new FormData(e.target)
        let btn = e.target.querySelector('.Signin__btn')

        POST(Url.UserUpdate,data).then(res => {
            if (res.status){
                if (res.message.modifideData){
                    this.setState({
                        status: res.status,
                        message: 'Ձեր տվյալները փոփոխված են․․․'
                    })
                }
                btn.setAttribute('disabled','disabled')
                setTimeout(() => {
                    window.history.back()
                    btn.removeAttribute('disabled')
                },3000)
            }else{
                this.setState({
                    status: res.status,
                    message: res.message
                })
                btn.setAttribute('disabled','disabled')
                setTimeout(() => {
                    window.history.back()
                    btn.removeAttribute('disabled')
                },3000)
            }
            this.props.dispatch(UserExist());
            Art.open()
            console.log(res)
            this.setState({
                modifideData:res.message.modifideData || undefined,
                uploadeImg:res.message.uploadeImg || undefined,
                modifidePassword:res.message.uploadeImg || undefined
            })
        })


    }
    render() {
        return (
            <div className="profile__setings">
                <div className="Signin__alert">
                    {
                        this.state.status === undefined ? '' :
                            this.state.status ?
                                <Art type={'success'}
                                     width={50}
                                     content={this.state.message} />
                                : <Art type={'error'}
                                       width={50}
                                       content={this.state.message} />
                    }
                </div>
                {
                    this.props.score.data === undefined ? '' :
                        (

                            <div>
                                <div className="profile__setings_back">
                                    <Link to='/user/account/persional' onClick={(e) => {
                                        window.history.back()
                                    }}><FontAwesomeIcon icon={faArrowCircleLeft}/></Link>
                                </div>

                                <div className="profile__setings_form" >

                                    <form className="col align-center justify-center" onSubmit={this.UbdateData} encType='multipart/form-data'>
                                        <DefaultInput
                                            defaultValue={this.props.score.data.name}
                                            placeholder='Անուն․․․'
                                            name='name'
                                            width='48%'
                                        />
                                        <DefaultInput
                                            defaultValue={this.props.score.data.surname}
                                            type="text"
                                            placeholder='Ազգանուն․․․'
                                            name='surname'
                                            width='48%'
                                        />
                                        <DefaultInput
                                            defaultValue={this.props.score.data.phone}
                                            type="tel"
                                            placeholder='Հեռախոսահամար․․․'
                                            name='phone'
                                            width='48%'
                                        />
                                        <DefaultInput
                                            defaultValue={this.props.score.data.email}
                                            type="text"
                                            placeholder='E-mail․․․'
                                            name='email'
                                            width='48%'

                                        />
                                        <DefaultInput
                                            type="password"
                                            placeholder='Հին Գաղտնաբառ․․․'
                                            name='old_password'
                                            width='48%'
                                        />
                                        <DefaultInput
                                            type="password"
                                            placeholder='Նոր Գաղտնաբառ․․․'
                                            name='password'
                                            width='48%'
                                        />
                                        <DefaultInput
                                            type="password"
                                            placeholder='Կրկնել Նոր Գաղտնաբառը․․․'
                                            name='password2'
                                            width='48%'
                                        />

                                        <label className='file row align-center' style={{width: '48%'}}>
                                            <span className='file__name'>{this.state.imgName === ''? 'Ներբեռնել լուսանկար․․․': this.state.imgName}</span>
                                            <DefaultInput
                                                onChange={(e) => {
                                                    this.setState({
                                                        imgName: e.target.value.split('\\').pop()
                                                    })
                                                }}
                                                className="file_input"
                                                type="file"
                                                placeholder='Լուսանկար․․․'
                                                name='image'
                                                width='100%'
                                            />
                                        </label>
                                        <DefaultInput type='hidden' name='id' value={this.props.score.id}/>
                                        <DefaultBtn
                                            type='submit'
                                            name='Հաստատել'
                                            background='#143645'
                                            color='#ffffff'
                                            light={30}
                                            className='Signin__btn'
                                        />
                                    </form>
                                </div>
                            </div>

                        )
                }

            </div>
        )


    }
}

const MapStateToProps = state => state;
const MainProfilSetingsScore = connect(MapStateToProps)(ProfilSetingsScore);
export default MainProfilSetingsScore;