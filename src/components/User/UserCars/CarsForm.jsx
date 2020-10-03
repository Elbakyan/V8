import React, {Component} from "react";
import './UserCars.scss'
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetModel} from "../../../redux/auto/action";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import ReactAudioPlayer from 'react-audio-player';
import DefaultBtn from "../../forms/buttons/DefaultBtn";



class CarsForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            img: [],
            audio: false,
            message: 'Մուտքագրեք ձեր մեքենայի տվյալները',
            status: true
        }
    }

    componentDidMount() {
        this.props.dispatch(GetModel())
    }

    GetImg(e){
        // document.querySelector('.file__name').textContent = e.target.value;
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
        setTimeout(this.startAudio,2000)
        this.state.img.map(file => {
            data.append('image[]', file[0])
        })
        POST(Url.addauto,data).then(res => {
            console.log(res)
            this.setState({
                status: res.status
            })
            if (res.status){
               setTimeout(() => {
                   window.location.href = '/user/account/cars'
               },2000)
            }else{
                this.setState({
                    message: res.message
                })
            }
        })
    }

    render() {

        const {dispatch} = this.props
        return (
                <div className="cars_forma">
                    {
                        this.state.audio ?
                            <ReactAudioPlayer
                            src="https://brutal.am/Server/audio/v8.mp3"
                            autoPlay />  : ''
                    }
                    <h1 style={this.state.status ? {color: 'green'} : {color: 'red'}}>{this.state.message}</h1>
                    <form id='add__auto' encType='multipart/form-data' onSubmit={this.AddAuto.bind(this)}>
                        <div className='items'>
                            <span>*</span>
                            <DefaultSelect
                                onChange={(e)=>{
                                   dispatch(GetModel(e))
                                }}
                                name='mark'
                                data={this.props.auto.mark}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='model'
                                data={this.props.auto.model}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <label>
                                <DefaultInput
                                    type='text'
                                    name='vin'
                                    placeholder='VIN'
                                />
                            </label>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <select name="year">
                                {
                                    this.props.auto.year.map((val,id) => {
                                        return (
                                            <option value={val} key={id}>{val}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="items">
                            <span>*</span>
                            <select name="engine">

                                {
                                   this.props.auto.engine.map((val,id) => {
                                       return (
                                           <option value={val} key={id}>{val}</option>
                                       )
                                   })
                                }
                            </select>
                        </div>
                        <div className="items">
                            <label>
                                <input
                                    type="text"
                                    name='power'
                                    placeholder='Ձիաուժ'
                                />
                            </label>
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='royle'
                                data={this.props.auto.royle}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='color'
                                data={this.props.auto.color}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='fuel'
                                data={this.props.auto.fuel}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='transmission'
                                data={this.props.auto.transmission}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='type'
                                data={this.props.auto.type}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='category'
                                data={this.props.auto.category}
                            />
                        </div>
                        <div className="items">
                            <span>*</span>
                            <DefaultSelect
                                name='traction'
                                data={this.props.auto.traction}
                            />
                        </div>

                        <div className="items">
                            <label className='auto__number'>
                                <DefaultInput
                                    type='text'
                                    name='number'
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
                        <DefaultInput
                            type='hidden'
                            name='id'
                            value={this.props.user.id}
                        />

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
