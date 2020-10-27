import React, {Component, Fragment} from "react";
import './SliderAuto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight, faSearch, faSearchPlus, faTimes} from '@fortawesome/free-solid-svg-icons'
import Zoom from "./Zoom";
import DefaultInput from "../forms/inputs/DefaultInput";
import {TmpImg} from "../../redux/tmp/action";
import {POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetScoreList} from "../../redux/score/action";
import {connect} from "react-redux";
class SliderAuto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showImg:this.props.autoImage,
            zoom:false,
            img: [],
        }
        this.ImgRef = React.createRef();
    }
    componentDidMount() {
        this.props.dispatch(GetScoreList())
        this.setState({
            showImg:this.props.autoImage,
        })
    }

    offZoom = (e)=>{
        this.setState({
            zoom:false
        })
    }
    onZoom = (e)=>{
       this.setState({
           zoom:true
       })
    }
    show = (e)=>{
        let a = this.state.showImg
        let save = a[e.target.dataset.src]

        a[e.target.dataset.src] = a[0]
        a[0] = save
        this.setState({
            showImg:a
        })
    }
    next = () =>{
        let a = this.state.showImg
        let save = a.shift()
        a.push(save)
        this.setState({
            showImg:a
        })
    }

    back = () => {
        let a = this.state.showImg
        let save = a.pop()
        a.unshift(save)
        this.setState({
            showImg:a
        })
    }
    AddSliderImg = (e) => {
        let data = new FormData()
        let tmpImg = this.state.img;
        Object.values(e.target.files).map(img => {
            data.append('file[]',img);
            tmpImg.push(img);
        })
        data.append('id', this.props.id);
        this.setState({
            img: tmpImg,
            showTmpImg: true
        })
        if ((this.props.autoImage.length + Array.from(data).length) <  11){
            POST(Url.scoreSetings,data).then(res => {
                if (res){
                    this.props.dispatch(GetScoreList())
                }
            })
        }else{
            alert('Chi kareli' + (this.props.autoImage.length + Array.from(data).length) + 'nkar gcel')
        }
        // this.props.dispatch(TmpImg(data))
    }
    render() {
        if (this.props.autoImage != false){
            return (
                <Fragment>
                    {
                        this.state.zoom?<div className='modal_zoom_auto'>
                            <Zoom autoImage={this.props.autoImage} offZoom={this.offZoom}/>
                            {/*<SliderAuto autoImage={this.props.autoImage}/>*/}
                        </div>:''
                    }
                    <div className="slider_auto">
                        <div className="slider_img_header"  style={{backgroundImage:`url(${this.state.showImg[0]})` }}>
                            {
                                (this.props.autoImage.length>=2) ?<div>
                            <span onClick={this.back}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                                    <span onClick={this.next}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                                    <span className="modal_zoom_auto_on" onClick={this.onZoom}>
                                    <FontAwesomeIcon icon={faSearchPlus} />
                                </span>
                                </div>:<span className="modal_zoom_auto_on"onClick={this.onZoom}>
                                <FontAwesomeIcon icon={faSearchPlus} />
                            </span>


                            }

                        </div>

                        {this.props.autoImage.length>=1?<div className="slider_img_body">
                            {
                                this.props.autoImage?this.props.autoImage.map((img,i)=>(

                                    <div
                                        key={i}
                                        onClick={this.show}
                                        data-src={i}
                                        style={{
                                            backgroundImage:`url(${img})`,
                                            width:100/this.props.autoImage.length + '%'
                                        }}
                                        ref={this.ImgRef}
                                    >
                                        <div className="edit" data-url={img} onClick={this.props.onClick} data-img={this.props.autoImage}>
                                        <span >
                                            <FontAwesomeIcon icon={faTimes}  />
                                        </span>
                                        </div>

                                    </div>
                                )):''

                            }
                            <form encType='multipart/form-data'>
                                <label className='add__img' >
                                    <div className="bg"></div>
                                    <input
                                        type='file'
                                        multiple
                                        onChange={this.AddSliderImg}
                                    />
                                    <span style={ this.ImgRef.current?{fontSize: this.ImgRef.current.offsetWidth + 'px'}: {fontSize:'20px'}}>+</span>
                                </label>
                            </form>
                        </div>:''
                        }

                    </div>

                </Fragment>

            )
        }else{

            return (
                <div className="slider__container">
                        <label className='add__img-big' >
                            <div className="bg" style={{ width: '100%', height: '100%'}}></div>
                            <input
                                type='file'
                                multiple
                                onChange={this.AddSliderImg}
                            />
                            <span style={{fontSize:'150px'}}>+</span>
                        </label>
                </div>
            )
        }
    }
}

const MapStateToProps = state => state;

const MainSliderAuto = connect(MapStateToProps)(SliderAuto);
export default MainSliderAuto;