import React, {Component} from "react";
import './Zoom.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft,faChevronRight,faWindowClose,faSearchMinus} from '@fortawesome/free-solid-svg-icons'

class Zoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showImg:this.props.autoImage,
            zoom:false
        }

    }
    componentDidMount() {

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
            <div className="slider_auto_zoom">
                <span className="close_zoom" onClick={this.props.offZoom}>
                    <FontAwesomeIcon icon={faSearchMinus} />
                </span>
                <div className="slider_img_header" onClick={this.onZoom} style={{
                    backgroundImage:`url(${this.state.showImg[0]})`,
                    height:this.props.autoImage.length>2?"60%":"100%"
                }}>
                    {
                        (this.props.autoImage.length>2) ?<div>
                            <span onClick={this.back}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                            <span onClick={this.next}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>:''


                    }

                </div>
                {this.props.autoImage.length>2?<div className="slider_img_body">
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
        )
    }
}

export default Zoom;