import React, {Component, Fragment} from "react";
import './SliderAuto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft,faChevronRight,faSearch,faSearchPlus} from '@fortawesome/free-solid-svg-icons'
import Zoom from "./Zoom";
class SliderAuto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showImg:this.props.autoImage,
            zoom:false
        }

    }
    componentDidMount() {

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
    render() {
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
                    {this.props.autoImage.length>=2?<div className="slider_img_body">
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

                                >
                                </div>
                            )):''

                        }
                    </div>:''}
                </div>
            </Fragment>

        )
    }
}

export default SliderAuto;