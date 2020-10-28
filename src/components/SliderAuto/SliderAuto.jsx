import React, {Component, Fragment} from "react";
import './SliderAuto.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faEllipsisV,
    faSearchPlus,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import Zoom from "./Zoom";
import {connect} from "react-redux";
import Loading from "../Loading";

class SliderAuto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: false,
            edit: false
        }
        this.ImgRef = React.createRef();
    }

    offZoom = (e) => {
        this.setState({
            zoom: false
        })
    }
    onZoom = (e) => {
        this.setState({
            zoom: true
        })
    }
    show = (e) => {
        let a = this.props.autoImage
        let save = a[e.target.dataset.src]

        a[e.target.dataset.src] = a[0]
        a[0] = save
        this.setState({
            showImg: a
        })
    }
    next = () => {
        let a = this.props.autoImage
        let save = a.shift()
        a.push(save)
        this.setState({
            showImg: a
        })
    }

    back = () => {
        let a = this.props.autoImage
        let save = a.pop()
        a.unshift(save)
        this.setState({
            showImg: a
        })
    }

    render() {
        return (

            <Fragment>
                {
                    this.props.loading ?
                        <div className="loading_slider" style={{backgroundImage: `url(${this.props.autoImage[0]})`}}>
                            <Loading type='spokes' color='#00FF3F' size={300}/></div> : ''
                }
                {
                    this.state.zoom ? <div className='modal_zoom_auto'>
                        <Zoom autoImage={this.props.autoImage} offZoom={this.offZoom}/>
                        {/*<SliderAuto autoImage={this.props.autoImage}/>*/}
                    </div> : ''
                }
                <div className="slider_auto">
                    {
                        this.props.edit ?
                            this.state.edit ? <div className="edit_icon" onClick={() => this.setState({edit: false})}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                :
                                <div className="edit_icon" onClick={() => this.setState({edit: true})}>
                                    <FontAwesomeIcon icon={faEllipsisV}/>
                                </div>
                            :''
                    }

                    <div className="slider_img_header" style={{backgroundImage: `url(${this.props.autoImage[0]})`}}>
                        {
                            (this.props.autoImage.length >= 2) ? <div>
                            <span onClick={this.back}>
                                <FontAwesomeIcon icon={faChevronLeft}/>
                            </span>
                                <span onClick={this.next}>
                                <FontAwesomeIcon icon={faChevronRight}/>
                            </span>
                                <span className="modal_zoom_auto_on" onClick={this.onZoom}>
                                    <FontAwesomeIcon icon={faSearchPlus}/>
                                </span>
                            </div> : <span className="modal_zoom_auto_on" onClick={this.onZoom}>
                                <FontAwesomeIcon icon={faSearchPlus}/>
                            </span>


                        }

                    </div>

                    {this.props.autoImage.length >= 1 ? <div className="slider_img_body">
                        {
                            this.props.autoImage ? this.props.autoImage.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={this.show}
                                    data-src={i}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        width: 100 / this.props.autoImage.length + '%'
                                    }}
                                    ref={this.ImgRef}
                                >
                                    {
                                        this.state.edit ?
                                            <div className="edit" data-url={img} onClick={this.props.onClick}
                                                 data-img={this.props.autoImage}>
                                                <span data-url={img}>
                                                    <FontAwesomeIcon icon={faTimes} data-url={img}/>
                                                </span>
                                            </div>:''
                                    }

                                </div>
                            )) : ''

                        }
                        {
                            this.state.edit?
                                <form encType='multipart/form-data'>
                                    <label className='add__img'>
                                        <div className="bg"></div>
                                        <input
                                            type='file'
                                            multiple
                                            onChange={this.props.AddImg}
                                        />
                                        <span
                                            style={this.ImgRef.current ? {fontSize: this.ImgRef.current.offsetWidth + 'px'} : {fontSize: '20px'}}>+</span>
                                    </label>
                                </form>: ''
                        }
                    </div> : ''
                    }

                </div>

            </Fragment>

        )

    }
}

const MapStateToProps = state => state;

const MainSliderAuto = connect(MapStateToProps)(SliderAuto);
export default MainSliderAuto;