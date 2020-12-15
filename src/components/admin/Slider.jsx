import React, {Component} from "react";
import {Link} from "react-router-dom";
import {GET, POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }
    componentDidMount() {
        GET(Url.getSliderImgAdmin).then(res => {
            if (res.status){
                this.setState({
                    img: res.img
                })
            }
        })
    }
    AddSliderImg =(e) => {
        let data = new FormData();
        Object.values(e.target.files).map(res => {
            data.append('img[]', res);
        })
        POST(Url.addSliderImgAdmin,data).then(res => {
            if (res.status){
                GET(Url.getSliderImgAdmin).then(res => {
                    if (res.status){
                        this.setState({
                            img: res.img
                        })
                    }
                })
            }
        })
    }
    DelImg = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id);
        data.append('img', e.target.dataset.img);
        POST(Url.delSliderImgAdmin,data).then(res => {
                GET(Url.getSliderImgAdmin).then(res => {
                    if (res.status){
                        this.setState({
                            img: res.img
                        })
                    }
                })
        })
    }
    render() {

        return(
            <div className='slider'>
                <form encType='multipart/form-data'>
                    <label>+
                        <input type="file" multiple onChange={this.AddSliderImg}/>
                    </label>
                </form>
                <div className="images">
                    {
                        this.state.img.map(res => {
                            return (
                                <div className='img' key={res.id}>
                                    <span className='del' data-id={res.id} data-img={res.img} onClick={this.DelImg}>
                                        <FontAwesomeIcon icon={faTimesCircle}/>
                                    </span>
                                    <img src={res.img} alt={res.img}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Slider;