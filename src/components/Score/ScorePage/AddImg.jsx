import React, {Component} from "react";
// import './SliderAuto.scss';
import Loading from "../../Loading";
import {connect} from "react-redux";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {GetScoreList} from "../../../redux/score/action";

class ScoreAddImg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div className="slider__container">
                    {
                        this.props.loading ?<div className="loading_slider-img" > <Loading type='spokes' color='#00FF3F' size={200}/> </div>:''
                    }
                    <label className='add__img-big' >
                        <div className="bg" style={{ width: '100%', height: '100%'}}></div>
                        <input
                            type='file'
                            multiple
                            onChange={this.props.onChange}
                        />
                        <span style={{fontSize:'150px'}}>+</span>
                    </label>
                </div>
            )

    }
}



const MapStateToProps = state => state;

const MainScoreAddImg = connect(MapStateToProps)(ScoreAddImg);
export default MainScoreAddImg;