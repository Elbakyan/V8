import React from 'react';
import './Slider.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";



export default class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.interval = '';
        this.state = {
            start: false
        }
    }
    componentDidMount() {
        this.auto()
    }

    prev = (e) => {
        this.setState({
            start: true
        })
        setTimeout(() => {
            this.setState({
                start: false
            })
            let i = this.props.img.shift()
            this.props.img.push(i)
        },1000)
        clearInterval(this.interval)
        this.auto()
    }
    next = (e) => {
        this.setState({
            start: true
        })
        setTimeout(() => {
            this.setState({
                start: false
            })
            let i = this.props.img.pop()
            this.props.img.unshift(i)
        },1000)
        clearInterval(this.interval)
        this.auto()
    }
    auto = () => {
      this.interval =  setInterval(() => {
            this.setState({
                start: true
            })
            setTimeout(() => {
                this.setState({
                    start: false
                })
                let i = this.props.img.pop()
                this.props.img.unshift(i)
            },1000)
        },10000)
    }
    componentWillUnmount() {
        clearImmediate(this.interval);
    }

    render() {

        return (
            <div className="slide-container">
                <div className='container'>
                    <div className="controls">
                        <button onClick={this.prev}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={this.next}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                    <div className="slide__item"  style={
                        this.state.start?
                        {
                            backgroundImage: `url(${this.props.img[0]})`,
                            animation: 'slider 1s linear'
                        }:{
                                backgroundImage: `url(${this.props.img[0]})`,

                            }
                    }>

                    </div>
                </div>
            </div>
        )
    }
}