import React, {Component} from "react";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {connect} from "react-redux";
import {GetCity} from "../../../redux/location/action";
import {POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import Art from "../../Alert";
import {Redirect} from "react-router";
import {GetScoreList} from "../../../redux/score/action";



class ScorePageSetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workingDays: ["Երկ․","Երք․","Չոր․","Հին․","Որբ․","Շաբ․","Կիր․"],
            alert: false
        }
    }
    GetCity = (e) => {
        this.props.dispatch(GetCity(e.target.selectedIndex + 1))
    }
    UpdateScoreLists = (e) =>{
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.scoreSetings,data).then(res => {
            if (res.status){
                this.props.dispatch(GetScoreList())
                this.setState({
                    alert: true
                })
                setTimeout(() =>  {
                    this.setState({
                        alert: false,
                        redirect: true
                    })
                },2000)
            }
        })

    }
    componentWillUnmount() {
        this.setState({
            redirect: false
        })
    }

    render() {
        let data = this.props.data;

        return (
            <form className='score__page_setings' onSubmit={this.UpdateScoreLists}>
                {
                    this.state.redirect? <Redirect to={'/score/account/list/' + data.id} />:''
                }
                {
                    this.state.alert?
                        <Art type='success' content='Տվյալները հաջողությամբ փոփոխված են․' />:''
                }
                <input type="hidden" name='id' value={data.id}/>
                <label className="name">
                    <input type="text" name='name' defaultValue={data.name} required placeholder='Խանոթի անունը․'/>
                </label>
                <div className="working__days">
                    {
                        this.state.workingDays.map((day,i) => {
                            return (
                                <label key={i}>
                                    <input type="checkbox" name='working_days[]' value={day} defaultChecked={day === data['working_days'][i]?'checked':''}/>
                                    {day}
                                </label>
                            )
                        })
                    }
                </div>
                <div className="work__time">
                    <input type="time" name='from' defaultValue={data['work_to']}/>
                    <input type="time" name='to' defaultValue={data['work_from']}/>
                </div>
                <div className="setings__location">
                    <DefaultSelect name='sircle' data={this.props.location.sircle} onChange={this.GetCity}/>
                    <DefaultSelect name='city' data={this.props.location.city} />
                    <input type="text" name='address' defaultValue={data.addres}/>
                </div>
                <div className="settings__phone">
                    {
                        data.phone.map((p,i) => {
                            return (
                                <label>
                                    <input type="number" name='phone[]' placeholder='Հեռախոսահամար' defaultValue={p} onChange={
                                        (e)=>{
                                            let str = e.target.value.match(/(^\+374\d{8})|(^374)\d{8}|(^0\d{8})/y);
                                            if (str){
                                                let num = str[0].match(/\d{8}$/)[0];
                                                e.target.value = num
                                            }}}/>
                                </label>
                            )
                        })
                    }
                </div>
                <div className="credit_delivery">
                    <label className="credit">
                        Ապառիկ վաճառք․
                        <input type="checkbox" name='credit' defaultChecked={+data.credit?'checked':''} value='1'/>
                    </label>
                    <label className="delivery">
                        Առաքում․
                        <input type="checkbox" name='delivery' defaultChecked={+data.delivery?'checked':''} value='1'/>
                    </label>
                </div>
                <div className="settings__links">
                    <label>
                        <input type="email" name='email' defaultValue={data.email} required placeholder='E-mail'/>
                    </label>
                    <label>
                        <input type="url" name='url' defaultValue={data.url} placeholder='https://url.am'/>
                    </label>
                    <label>
                        <input type="url" name='facebook' defaultValue={data.facebook} placeholder='https://facebook.com'/>
                    </label>
                    <label>
                        <input type="url" name='instagram' defaultValue={data.instagram} placeholder='https://instagram.com'/>
                    </label>
                    <label>
                        <input type="url" name='youtube' defaultValue={data.youtube} placeholder='https://youtube.com'/>
                    </label>
                    <button type='submit'>Պահպանել</button>
                </div>


            </form>
        )

    }
}


const MapStateToProps = state => {
    return {
        score: state.score,
        location: state.location
    }
}

const MainScorePageSetings = connect(MapStateToProps)(ScorePageSetings);
export default MainScorePageSetings;
