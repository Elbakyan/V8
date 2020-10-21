import React from 'react';
import {connect} from 'react-redux';
import  './ScoreList.scss'
import {formatMs} from "@material-ui/core";
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {GetCity} from "../../../redux/location/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'


class ScoreList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showForm:false,
            phone2: false,
            phone3: false
        }
    }
    ShowAddScoreForm = (e) => {
        if (this.state.showForm){
            this.setState({
                showForm:false
            })
        }else{
            this.setState({
                showForm:true
            })
        }
    }
    GetCity = (e) => {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))

    }
    ShowPhone = (e) => {
        if (this.state.phone2 == false){
            this.setState({
                phone2: true
            })
        }
        if (this.state.phone2 == true && this.state.phone3 == false){
            this.setState({
                phone3: true
            })
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="ScoreList">
               <div className="score__list-links">
                   <ul>
                       <li onClick={this.ShowAddScoreForm}><div>+</div></li>
                       <li><div>elbakyan1</div></li>
                       <li><div>elbakyan2</div></li>
                       <li><div>elbakyan3</div></li>

                   </ul>

               </div>
                <div className='add_score_list'>
                    <form  style={this.state.showForm?{transform:'scaleY(1)'}:{transform:'scaleY(0)'}} encType='multipart/form-data'>
                        <div>
                            <DefaultInput
                                type='text'
                                name='scor_name'
                                placeholder='Խանութի անունը․․․'
                            />

                            <DefaultInput
                                type='email'
                                name='email'
                                placeholder='E-mail․․․'
                            />
                            <DefaultSelect name='sircle' data={this.props.location.sircle} onChange={this.GetCity}/>
                            <DefaultSelect name='sircle' data={this.props.location.city}/>
                            <DefaultInput
                                type='text'
                                name='adress'
                                placeholder='Խանութի Հասցեն․․․'
                            />
                            <div className="phone phone1">
                                <span className='plus__phone'
                                      onClick={this.ShowPhone}
                                      style={this.state.phone2 && this.state.phone3? {display: 'none'}: {display: 'block'}}
                                ><FontAwesomeIcon icon={faPlus} /></span>
                                <DefaultInput
                                    type='number'
                                    name='phone[]'
                                    placeholder='հեռախոսահամար․․․'
                                />
                            </div>
                            <div className="phone phone2" style={this.state.phone2?{display: 'flex'}: {display:'none'}}>
                                <span className='minus__phone' onClick={() => this.setState({phone2:false})}><FontAwesomeIcon icon={faMinus} /></span>
                                <DefaultInput
                                    type='number'
                                    name='phone[]'
                                    placeholder='հեռախոսահամար․․․'
                                />
                            </div>
                            <div className="phone phone3" style={this.state.phone3?{display: 'flex'}: {display:'none'}}>
                                <span className='minus__phone' onClick={() => this.setState({phone3:false})}><FontAwesomeIcon icon={faMinus} /></span>
                                <DefaultInput
                                    type='number'
                                    name='phone[]'
                                    placeholder='հեռախոսահամար․․․'
                                />
                            </div>
                            <DefaultInput
                                type='url'
                                name='url'
                                placeholder='https:/v8.am'
                            />
                            <DefaultInput
                                type='url'
                                name='f_url'
                                placeholder='https://facebook.com'
                            />
                            <DefaultInput
                                type='url'
                                name='i_url'
                                placeholder='https://instagrem.com'
                            />
                            <label className='file'>
                                <span>Ներբեռնել․․․</span>
                                <input
                                    type='file'
                                    name='img'
                                    multiple
                                />
                            </label>

                        </div>
                            <div className="btn">
                                <DefaultBtn
                                    type='submit'
                                    name='add'
                                    background='#101423'
                                    color='#ffffff'
                                    width='50%'
                                    light={30}

                                />
                            </div>
                    </form>
                </div>
            </div>

        );
    }
}

const MapStateToProps = state => state;
const MainScoreList = connect(MapStateToProps)(ScoreList);
export default MainScoreList;
