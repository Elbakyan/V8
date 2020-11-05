import React, {Component} from "react";
import DefaultInput from "../../forms/inputs/DefaultInput";
import Loading from "../../Loading";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import {cars} from "../../Menu/autoObj";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";


class FormGlobalAutoParts extends Component {
    constructor() {
        super();
        this.state = {
            message:'',
            openMarker:false
        }
    }

    openModels = e =>{
        console.log(e.target.dataset.count)
        let el = document.querySelectorAll('.'+e.target.className.split(' ')[1])
        console.log(el)
        console.log(e.target.className.split(' ')[1])
        this.setState({
            openMarker:!this.state.openMarker
        })
        if(el[1].style.display === 'block'){
            el[1].style.display = 'none'
        }else{
            el[1].style.display = 'block'
        }

        // if(e.target.dataset.count == )
    }

    render() {
        console.log(this.props  )
        return(
            <div className="add_auto_parts">
                {this.state.message?<p className="message">{this.state.message}</p>:''}
                <form encType='multipart/form-data' onSubmit={this.AddProduct}>
                    <div className="score_list">
                        {
                            this.props.score.scoreList.map((el,i) => (
                                <label key={i}>
                                    {el.name}
                                    <DefaultInput
                                        type='checkbox'
                                        value={el.name}
                                        name='score[]'
                                        width="5%"
                                        checked
                                    />
                                    <input type="hidden" name='store_id[]' value={el.id}/>
                                </label>
                            ))
                        }
                    </div>

                    <div className="score_parts_form">
                        <nav className="auto_mark">
                            <ul>
                                <li><input defaultChecked type="checkbox"/></li>
                                {
                                    this.props.auto.mark.map((el,i) => {
                                        if(i !== 0){
                                            return (
                                                <li>
                                                    <ul>
                                                        <li style={{width:"20%",background:'rgb(0 117 255)',color:"wheat",fontSize:'12px'}}>{el.name}</li>
                                                        <li style={{width:"10%",display:'flex',alignItems:'center'}}><input defaultChecked type='checkbox'/></li>
                                                        <li style={{width:"15%",display:'flex',alignItems:'center'}}>Նոր <input defaultChecked type='checkbox'/></li>
                                                        <li style={{width:"15%",display:'flex',alignItems:'center'}}>օգտ. <input defaultChecked type='checkbox'/></li>
                                                        <li style={{width:"5%"}} className={"open_models open_models" + el.name} data-count={i} onClick={this.openModels} >
                                                            {
                                                               <FontAwesomeIcon icon={faArrowDown}/>
                                                            }
                                                        </li>
                                                    </ul>


                                                    <ul className={"open_models" + el.name} style={{display:"none"}} data-count={i} ref={el => this.getModels = el}>
                                                        <li><input defaultChecked type="checkbox"/></li>
                                                        {
                                                            this.props.auto.mark.map((el, i) => (
                                                                i !== 0 ?
                                                                    <li>
                                                                        <ul>
                                                                            <li>{el.name}</li>
                                                                            <li><input defaultChecked type="checkbox"/></li>
                                                                        </ul>
                                                                    </li> : ''
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </nav>
                    </div>


                    <div className="add__product-btn">
                        {
                            this.state.loading ? <div className="loading_btn"> <Loading type='spin' color='#ff0000' size={30}/> </div>: ''
                        }
                        <DefaultBtn
                            type="submit"
                            name='Առաջ'
                            color="#fff"
                            width='15%'
                            background="rgb(74 141 210)"
                        />
                    </div>
                </form>
            </div>
        )
    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location,
        auto:state.auto
    }
}

const MainFormGlobalAutoParts = connect(MapStateToProps)(FormGlobalAutoParts);
export default MainFormGlobalAutoParts;
