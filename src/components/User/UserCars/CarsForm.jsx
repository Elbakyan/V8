import React, {Component} from "react";
import './UserCars.scss'
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import ReactAudioPlayer from 'react-audio-player';
import DefaultBtn from "../../forms/buttons/DefaultBtn";



class CarsForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            img: [],
            audio: false
        }
    }

    componentDidMount() {
        this.props.dispatch(GetModel())
    }

    GetImg(e){
        document.querySelector('.file__name').textContent = e.target.value;
        this.setState({
            img: [...this.state.img,e.target.files]
        })

    }
    startAudio = () => {
        this.setState({
            audio: false
        })
    }

    AddAuto(e) {
        e.preventDefault();
        let data = new FormData(e.target)
        this.setState({
            audio: true
        })
        setTimeout(this.startAudio,3700)

        this.state.img.map(file => {
            data.append('image[]', file[0])
        })
        console.log(Array.from(data))
        POST(Url.registration,data).then(res => {
            console.log(res)
        })
    }

    render() {

        return (

                <div className="cars_forma">
                    {
                        this.state.audio ?
                            <ReactAudioPlayer
                            src="https://brutal.am/Server/audio/v8.mp3"
                            autoPlay />  : ''
                    }
                    <h1>Մուտքագրեք ձեր մեքենայի տվյալները</h1>
                    <form id='add__auto' encType='multipart/form-data' onSubmit={this.AddAuto.bind(this)}>
                        <div className='items'>
                            <span>*</span>
                            <select name="mark" >
                                <option value="">Mercedes</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Mercedes E-350</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <label>
                                <DefaultInput
                                    type='text'
                                    placeholder='VIN'
                                />
                            </label>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">2020</option>
                            </select>
                        </div>

                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">3.5</option>

                            </select>
                        </div>
                        <div className="items">
                            <label>
                                <input type="text" placeholder='Ձիաուժ'/>
                            </label>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Left</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Spitak</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Benzin</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Avtomat</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Sedan</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">Mardatar</option>
                            </select>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="" id="">
                                <option value="">4x4</option>
                            </select>
                        </div>

                        <div className="items">
                            <label className='auto__number'>
                                <DefaultInput
                                    type='text'
                                    placeholder='XX YY XXX'
                                    onInput={(e) =>{
                                        switch (e.target.value.length){
                                            case 2:
                                                e.target.value += ' '
                                            case 6:
                                                e.target.value += ' '
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="items">
                            <label className='file row align-center'>
                                <span className='file__name'>Ներբեռնել...</span>
                                <DefaultInput
                                    type='file'
                                    onChange={this.GetImg.bind(this)}
                                />
                            </label>
                            <div className="img_name" style={this.state.img.length> 0 ?{  display:'flex' }:{display:'none'}}>
                                {
                                    this.state.img.map(img =>{
                                        return (
                                            <span>{img[0].name}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <label className="btn">
                            <div className="items ">
                                <DefaultBtn
                                    type='submit'
                                />
                            </div>
                        </label>
                    </form>

                </div>

        )
    }
}

const MapStateToProps = state => state;
const MainCarsForm = connect(MapStateToProps)(CarsForm)
export  default MainCarsForm;

// <div className="img__name">
//     {this.state.img.map(file => {
//         return <span style={{margin:'0px 5px'}}>
//                                     {file[0].name}
//                                     </span>
//     })}
//
// </div>