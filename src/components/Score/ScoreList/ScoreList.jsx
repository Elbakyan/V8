import React from 'react';
import {connect} from 'react-redux';
import  './ScoreList.scss'
import DefaultInput from "../../forms/inputs/DefaultInput";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {GetCity} from "../../../redux/location/action";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {TmpImg,ClearImg} from "../../../redux/tmp/action";
import Loading from "../../Loading";
import ScorePage from "../ScorePage/ScorePage";
import {Route, NavLink, Switch} from "react-router-dom";
import {GetScoreList, GetScoreListId} from "../../../redux/score/action";
import ScorePageSetings from "../ScorePage/ScorePageSetings";



class ScoreList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showForm:false,
            phone2: false,
            phone3: false,
            img: [],
            showTmpImg: false,
            loading: false

        }
    }
    componentDidMount() {
        this.props.dispatch(GetCity(1))
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
        if (this.state.phone2 === false){
            this.setState({
                phone2: true
            })
        }
        if (this.state.phone2 === true && this.state.phone3 === false){
            this.setState({
                phone3: true
            })
        }
    }
    GetImg = (e) => {
        let data = new FormData()
        let tmpImg = this.state.img;
        Object.values(e.target.files).map(img => {
            data.append('img[]',img)
            tmpImg.push(img)
        })
        this.setState({
            img: tmpImg,
            showTmpImg: true
        })
        this.props.dispatch(TmpImg(data))
        return true
    }
    AddScoreList = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)

        this.state.img.map(img => {
            data.append('img[]',img)
        })
        this.setState({
            loading:undefined
        })

        POST(Url.addscorelist,data).then(res => {
            console.log(res)
           if (res.status) {
               this.props.dispatch(GetScoreList())
               this.setState({
                   showForm:false,
                   showTmpImg: false,
                   // loading:res.status
               })
               this.props.dispatch(ClearImg())
           }else {
               // this.setState({
               //     loading:res.status
               // })
           }
        })

    }
    render() {
        return (
            <div className="ScoreList">
                <div className="score__list-links">
                   <ul>
                       <li onClick={this.ShowAddScoreForm}><div className='show__form'>Ավելացնել խանութ</div></li>
                       {
                           this.props.score.scoreList.map((list,i) =>{

                               return <li key={list.id}>
                                   <div onClick={(e) => {
                                       this.props.dispatch(GetScoreListId(list.id))
                                   }}>
                                       <NavLink
                                       to={'/score/account/list/'+list.id}
                                       activeClassName="selected"

                                       >
                                       {list.name}
                                       </NavLink>
                                   </div>
                               </li>
                           })
                       }

                   </ul>
               </div>
                <div className='add_score_list'>
                    <form onSubmit={this.AddScoreList} style={this.state.showForm?{transform:'scaleY(1)'}:{transform:'scaleY(0)'}} encType='multipart/form-data'>
                        <div>
                            <DefaultInput
                                type='text'
                                name='score_name'
                                placeholder='Խանութի անունը․․․'
                                required
                            />

                            <DefaultInput
                                type='email'
                                name='email'
                                placeholder='E-mail․․․'
                                required
                            />
                            <DefaultSelect required name='sircle' data={this.props.location.sircle} onChange={this.GetCity}/>
                            <DefaultSelect required name='city' data={this.props.location.city}/>
                            <DefaultInput
                                type='text'
                                name='addres'
                                placeholder='Խանութի Հասցեն․․․'
                                required
                            />
                            <li className='working__days'>
                                <label > Երկ․<input name='working_days[]' type="checkbox" value='Երկ․'/></label>
                                <label> Երք․<input name='working_days[]' type="checkbox" value='Երք․'/></label>
                                <label >Չոր․<input name='working_days[]' type="checkbox" value='Չոր․'/></label>
                                <label >Հին․<input name='working_days[]' type="checkbox" value='Հին․'/></label>
                                <label>Որբ․<input name='working_days[]' type="checkbox" value='Որբ․'/></label>
                                <label>Շաբ․<input name='working_days[]' type="checkbox" value='Շաբ․'/></label>
                                <label>Կիր․<input name='working_days[]' type="checkbox" value='Կիր․'/></label>
                            </li>
                            <label className='working_interval'>
                                <DefaultInput
                                    type='time'
                                    name='work_to'
                                    // placeholder='09'
                                />
                                <DefaultInput
                                    type='time'
                                    name='work_from'
                                />
                            </label>
                            <div className='delivery__credit'>
                                <label className='credit-style'>
                                    <span>Ապառիկ վաճառք․</span>
                                    <DefaultInput
                                        type='checkbox'
                                        name='credit'
                                        value={1}
                                    />
                                </label>
                                <label className='delivery-style'>
                                    <span>Ապառիկ վաճառք․</span>
                                    <DefaultInput
                                        type='checkbox'
                                        name='delivery'
                                        value={1}
                                    />
                                </label>
                            </div>
                            <div className="phone phone1">
                                <span className='plus__phone'
                                      onClick={this.ShowPhone}
                                      style={this.state.phone2 && this.state.phone3? {display: 'none'}: {display: 'block'}}
                                ><FontAwesomeIcon icon={faPlus} /></span>
                                <label className='phone_style'>
                                    <DefaultInput
                                        type='number'
                                        placeholder="Հեռախոսահամար"
                                        name='phone[]'
                                        requred
                                        onChange={
                                            (e)=>{
                                                let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                                if (str){
                                                    let num = str[0].match(/\d{8}$/)[0];
                                                    e.target.value = num
                                                }
                                            }
                                        }
                                    />
                                </label>
                            </div>
                            <div className="phone phone2" style={this.state.phone2?{display: 'flex'}: {display:'none'}}>
                                <span className='minus__phone' onClick={() => this.setState({phone2:false})}><FontAwesomeIcon icon={faMinus} /></span>
                                <label className='phone_style'>
                                    <DefaultInput
                                        type='number'
                                        placeholder="Հեռախոսահամար"
                                        name='phone[]'
                                        requred
                                        onChange={
                                            (e)=>{
                                                let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                                if (str){
                                                    let num = str[0].match(/\d{8}$/)[0];
                                                    e.target.value = num
                                                }
                                            }
                                        }
                                    />
                                </label>
                            </div>
                            <div className="phone phone3" style={this.state.phone3?{display: 'flex'}: {display:'none'}}>
                                <span className='minus__phone' onClick={() => this.setState({phone3:false})}><FontAwesomeIcon icon={faMinus} /></span>
                                <label className='phone_style'>
                                    <DefaultInput
                                        type='number'
                                        placeholder="Հեռախոսահամար"
                                        name='phone[]'
                                        requred
                                        onChange={
                                            (e)=>{
                                                let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                                if (str){
                                                    let num = str[0].match(/\d{8}$/)[0];
                                                    e.target.value = num
                                                }
                                            }
                                        }
                                    />
                                </label>
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
                            <DefaultInput
                                type='url'
                                name='y_url'
                                placeholder='https://youtube.com'
                            />
                            <label className='file'>
                                <span>Ներբեռնել․․․</span>`
                                <input
                                    type='file'
                                    multiple
                                    onChange={this.GetImg}
                                />
                            </label>
                            {
                                this.state.showTmpImg?
                                    <div className='tmp__img' >
                                        {
                                            !this.props.tmp.tmpImg.status?<div className="add_loading"> <Loading type='bars' color='#143645' size={50}/> </div>:
                                                this.props.tmp.tmpImg.data.map((img,i) => {
                                                    return <img key={i} src={img.url}/>
                                                })
                                        }
                                    </div>
                                :''
                            }
                        </div>

                            <div className="btn">
                                {
                                    // this.state.loading != undefined? '': <div className="loading_btn"> <Loading type='spin' color='#1c8080' size={40}/> </div>
                                }
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
                {
                    this.props.score.scoreList.map((list,i) =>{
                        return (
                            <Switch key={i}>
                                <Route  key={list.id} exact path={'/score/account/list/' + list.id}><ScorePage data={list}/></Route>
                                <Route  key={list.id} exact path={'/score/account/settings/' + list.id}><ScorePageSetings data={list}/></Route>
                            </Switch>
                        )
                    })
                }

            </div>

        );
    }
}

const MapStateToProps = state => state;
const MainScoreList = connect(MapStateToProps)(ScoreList);
export default MainScoreList;
