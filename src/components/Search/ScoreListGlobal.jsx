import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetStoreID, SearchMarkModel} from "../../redux/search/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import DecorTitle from "../Decor/DecorTitle";

class ScoreListGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        let dataArray = window.location.pathname.match(/(\w+\/\d+)/g).join().split('/'),
            data = new FormData();
        data.append('id', dataArray[1])
        data.append('type', dataArray[0])
        this.props.dispatch(SearchMarkModel(data))
    }

    // componentWillUnmount() {
    //     this.props.dispatch(SearchMarkModel(null))
    // }

    render() {
        console.log(this.props)
        return (
            <div className="score_list_global">
                {/*<DecorTitle title={this.props.MarkModelResult.mark?this.props.MarkModelResult.mark[0].mark + '-ի պահեստամասերի խանութներ':''}  fontSize='16px'/>*/}
                <div className="container">
                    <nav className='score_list_info'>
                        <div className='score_list_info__header'>
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
                                    let from = score['work_to'].split(':')[0];
                                    let to = score['work_from'].split(':')[0];
                                    let OpenClose = false;
                                    let workingDays = JSON.parse(score['working_days'])
                                    if (hour > from && hour < to) {
                                        OpenClose = true
                                    } else {
                                        OpenClose = false
                                    }
                                    let mark = [];
                                    let model = [];
                                    let count = 0;
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
                                                                <h3>{score.name}</h3>
                                                            </Link>
                                                        </li>
                                                        <li>

                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='new_model'>
                                                    <ul>
                                                        {
                                                            model != false ? model.map((model, mIndex) => {

                                                                if (+model.new === 1 && +model.score_id === +score.id) {
                                                                    if (+model.score_id === +score.id) {
                                                                        return (
                                                                            <li key={mIndex}>{model.model}</li>
                                                                        )
                                                                    }
                                                                }
                                                            }) : <li>Բոլոր մոդելները</li>
                                                        }

                                                    </ul>

                                                </li>
                                                <li className='old_model'>
                                                    <ul>
                                                        {
                                                            model != false ? model.map((model, mIndex) => {

                                                                if (+model.old === 1 && +model.score_id === +score.id) {
                                                                    return (
                                                                        <li key={mIndex}>{model.model}</li>
                                                                    )
                                                                }
                                                            }) : <li>Բոլոր մոդելները</li>
                                                        }
                                                    </ul>
                                                </li>
                                                <li className='store_phones'>
                                                    <ul>
                                                        {
                                                            score.phone.map((phone, i) => {
                                                                if (phone) {
                                                                    return (
                                                                        <li key={i}>(+374){phone}</li>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                </li>

                                                <li className='store_addres'>
                                                    {score.sircle} {score.city} <br/> {score.addres}
                                                    <ul>
                                                        <br/>
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
                                                        <li>{score.work_to}:{score.work_from}</li>
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
