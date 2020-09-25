import React, {Component} from "react";
import './SliderAuto.scss';

class SliderAuto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showImg:this.props.autoImage[0]
        }

    }
    componentDidMount() {

    }

    show = (e)=>{
        // this.setState({
        //     showImg:e.target.src
        // })
        this.setState({
            showImg:e.target.dataset.src
        })
    }

    render() {
        return (
            <div className="slider_auto">
                <div className="slider_img_header" style={{backgroundImage:`url(${this.state.showImg})` }}>>

                </div>
                {this.props.autoImage.length>=2?<div className="slider_img_body">
                    {

                        this.props.autoImage?this.props.autoImage.map((img,i)=>(

                        <div
                            key={i}
                            onClick={this.show}
                            data-src={img}
                            style={{backgroundImage:`url(${img})` }}
                        >

                        </div>
                    )):''

                    }
                </div>:''}
            </div>
        )
    }
}

export default SliderAuto;