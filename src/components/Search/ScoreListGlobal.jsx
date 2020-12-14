import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetStoreID, SearchMarkModel} from "../../redux/search/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import DecorTitle from "../Decor/DecorTitle";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

class ScoreListGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.scrollActive)
        let dataArray = window.location.pathname.match(/(\w+\/\d+)/g).join().split('/'),
            data = new FormData();
        data.append('id', dataArray[1])
        data.append('type', dataArray[0])
        this.props.dispatch(SearchMarkModel(data))
    }
    scrollActive = (e)=>{
            let scrollTop = document.body.scrollHeight
            if(window.scrollY >= 200){
                this.scrollBar.classList.add('scrollActive')
            }else{
                this.scrollBar.classList.remove('scrollActive')
            }

    }
    componentWillUnmount() {
        window.addEventListener('scroll',this.scrollActive())
    }

    render() {
        return (
            <div className="score_list_global">
                {/*<DecorTitle title={this.props.MarkModelResult.mark?this.props.MarkModelResult.mark[0].mark + '-ի պահեստամասերի խանութներ':''}  fontSize='16px'/>*/}
                <div className="container">
                    <DecorTitle fontSize='14px' title={this.props.MarkModelResult.mark?`${this.props.MarkModelResult.mark[0].mark}-ի պահեստամասերի խանութներ`:''}/>
                    <nav className='score_list_info'>
                        <div className='score_list_info__header' ref={el=>this.scrollBar=el}>
                            <ul>
                                <li>Անվանումը</li>
                                <li>Նոր</li>
                                <li>Օգտ․</li>
                                <li>Հեռախոսահամրը</li>
                                <li>Հասցե</li>
                            </ul>
                        </div>
                        <div className='score_list_info__body '>
                            {
                                this.props.MarkModelResult.status ? '' :
                                    <div className="message">
                                        <p>{this.props.MarkModelResult.message}</p>
                                    </div>
                            }
                            {

                                this.props.MarkModelResult.status ? this.props.MarkModelResult.score.map((score, sIndex) => {

                                    let hour = new Date().getHours()
                                    let minute = new Date().getMinutes() + (hour * 60)
                                    let from = (+score['work_to'].split(':')[0] * 60) + +score['work_to'].split(':')[1];
                                    let to = (+score['work_from'].split(':')[0] * 60) + +score['work_from'].split(':')[1];
                                    let OpenClose = false;
                                    let workingDays = JSON.parse(score['working_days'])
                                    console.log(score['work_to'],score['work_from'])
                                    console.log(minute,from,to)
                                    if (minute > from && minute < to) {
                                        OpenClose = true
                                    } else {
                                        OpenClose = false
                                    }
                                    let mark = [];
                                    let model = [];
                                    let countNew = 0;
                                    let countOld = 0;
                                    let markOldPlus = true;
                                    let markOldMinus = true;
                                    let markNewPlus = true;
                                    let markNewMinus = true;
                                    let img = JSON.parse(score.img)

                                    if (score) {
                                        mark = this.props.MarkModelResult.mark[sIndex]
                                        model = this.props.MarkModelResult.model?this.props.MarkModelResult.model:[]
                                    }

                                    if (score) {
                                        return (
                                            <ul key={sIndex}
                                                style={OpenClose ? {border: '2px solid #00FF57'} : {border: '2px solid red'}}>
                                                <li className='store_info'>
                                                    <ul>
                                                        <li className='search__result-img'>
                                                            <Link className='store__info-link'
                                                                  to={'/search/result/store/' + score.id}
                                                                  onClick={() => {
                                                                      this.props.dispatch(GetStoreID(score.id))
                                                                  }}>
                                                                <img src={img[0]} alt=""/>
                                                                <h3 style={score.name.length < 12?{fontSize:'18px'}:{fontSize:'12px'}}>{score.name}</h3>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='new_model'>
                                                    <ul>
                                                        {

                                                            model != false ? model.map((model, mIndex) => {
                                                                // console.log(sIndex,countNew,model.new,mark.new)
                                                                if (+model.new === 1 && +model.score_id === +score.id) {
                                                                    markNewPlus = false
                                                                    markNewMinus = false
                                                                    if (+model.score_id === +score.id) {
                                                                        return (
                                                                            <li key={mIndex}>{model.model}</li>
                                                                        )
                                                                    }
                                                                }
                                                            }) :''
                                                        }

                                                    </ul>
                                                    <ul>
                                                        {
                                                            markNewPlus && +mark.new?
                                                                <li className='style_plus'>
                                                                    <span className='style_plus_minus'>
                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                    </span>
                                                                </li>
                                                                :
                                                                markNewMinus?
                                                                    <li className='style_minus'>
                                                                        <span  className='style_plus_minus'>
                                                                            <FontAwesomeIcon icon={faMinus} />
                                                                        </span>
                                                                    </li> :''
                                                        }
                                                    </ul>

                                                </li>
                                                <li className='old_model'>
                                                    <ul>
                                                        {
                                                             model != false? model.map((model, mIndex) => {

                                                                if (+model.old === 1 && +model.score_id === +score.id) {
                                                                    markOldPlus = false
                                                                    markOldMinus = false
                                                                    return (
                                                                        <li key={mIndex}>{model.model}</li>
                                                                    )
                                                                }
                                                            }) : ''
                                                        }
                                                    </ul>
                                                    <ul>
                                                        {
                                                            markOldPlus && +mark.old?
                                                                <li className='style_plus'>
                                                                    <span className='style_plus_minus'>
                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                    </span>
                                                                </li>

                                                                :
                                                                markOldMinus?
                                                                    <li className='style_minus'>
                                                                        <span  className='style_plus_minus'>
                                                                            <FontAwesomeIcon icon={faMinus} />
                                                                        </span>
                                                                    </li> :''

                                                        }
                                                    </ul>
                                                </li>
                                                <li className='store_phones'>
                                                    <ul>
                                                        {
                                                            score.phone.map((phone, i) => {
                                                                let p = phone.split(''),
                                                                    p1 = p.slice(0,2).join(''),
                                                                    p2 = p.slice(2,4).join(''),
                                                                    p3 = p.slice(4,6).join(''),
                                                                    p4 = p.slice(6,8).join('');

                                                                if (phone) {
                                                                    return (
                                                                        <li key={i} style={{margin: '5px 0'}}>{`0${p1} ${p2} ${p3} ${p4}`}</li>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                </li>

                                                <li className='store_addres'>
                                                    <p>
                                                        {score.sircle} {score.city} <br/> {score.addres}
                                                    </p>
                                                    <ul style={{marginTop: '5px'}}>
                                                        <li>Աշխատանքային օերը և ժամերը՝</li>
                                                        <div className='working__days'>
                                                            {
                                                                workingDays.map((res,i) => {
                                                                    return (
                                                                        <li key={i}>{res}</li>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <li >{score.work_to}:{score.work_from}</li>
                                                    </ul>

                                                </li>

                                            </ul>
                                        )
                                    }

                                }) : ''

                            }
                        </div>
                    </nav>
                </div>

            </div>
        )
    }
}


const MapStateToProps = state => state.search;
const MainScoreListGobal = connect(MapStateToProps)(ScoreListGlobal);
export default MainScoreListGobal;
