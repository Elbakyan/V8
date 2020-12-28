import React, {Component} from 'react';
import {connect} from "react-redux";
import DecorTitle from "../Decor/DecorTitle";
import {Link} from "react-router-dom";
import {GetStoreID} from "../../redux/search/action";
import {SearchAccessories, SearchAccessoriesLink} from "../../redux/Service/action";
import {MenuActive} from "../../redux/Menu/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

class AccesoriesResult extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.dispatch(SearchAccessories(window.location.pathname.split('/').pop()))
        this.props.dispatch(MenuActive(window.location.pathname.split('/').pop(),'accessories'))
    }

    componentWillUnmount() {
        this.props.dispatch(MenuActive(window.location.pathname.split('/').pop(),''))
    }
    positionTop = ()=>{
        this.listRef.scrollTop = 0
    }

    render(){
        return (
            <div className='service__result'>
                {
                    this.props.service.searchPartAccessories.status?
                        <div className='service__container'>
                            <DecorTitle title={this.props.service.searchPartAccessories.data.service[0].name} fontSize='18px'/>
                            <div className="container">
                                <div className={'score_list_global__header'}>
                                    <ul className='service__container-header'>
                                        <li>Անվանումը</li>
                                        <li>Հեռախոսահամրը</li>
                                        <li>Նկարագրություն</li>
                                        <li>Աշխատանքին օր․ և ժ․</li>
                                        <li>Հասցե</li>
                                    </ul>
                                </div>

                                <div className={'service__container-body'} ref={el=>this.listRef=el}>
                                    {
                                       this.props.service.searchPartAccessories.data.score.length > 4?
                                            <span className="arrow_top" onClick={this.positionTop}>
                                                <FontAwesomeIcon icon={faArrowUp} />
                                            </span>:''

                                    }
                                    {
                                        this.props.service.searchPartAccessories.data.score.map((res, i) => {
                                            let hour = new Date().getHours()
                                            let minute = new Date().getMinutes() + (hour * 60)
                                            let from = (+res['work_to'].split(':')[0] * 60) + +res['work_to'].split(':')[1];
                                            let to = (+res['work_from'].split(':')[0] * 60) + +res['work_from'].split(':')[1];
                                            let OpenClose = false;
                                            if (minute > from && minute < to) {
                                                OpenClose = true
                                            } else {
                                                OpenClose = false
                                            }
                                            return(
                                                <ul key={i} className='service_items' style={OpenClose ? {border: '2px solid #00FF57'} : {border: '2px solid red'}}>
                                                    <Link to={'/search/result/store/'+ res.id} className='service__logo' onClick={() => {
                                                        this.props.dispatch(GetStoreID(res.id))
                                                        this.props.dispatch(SearchAccessoriesLink('/search/result/store/'+ res.id))
                                                    }}>
                                                        <li>
                                                            <img src={res.img[0]} alt=""/>
                                                            <h2 >{res.name}</h2>
                                                        </li>
                                                    </Link>
                                                    <div className="service__phone">
                                                        {
                                                            res.phone.map((phone, i) => {
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
                                                    </div>
                                                    <div className="service__desc">
                                                        {
                                                            <li>{this.props.service.searchPartAccessories.data.service[i].desc}</li>
                                                        }
                                                    </div>
                                                    <div className='working__days'>
                                                        {
                                                            res['working_days'].map((res,i) => {
                                                                return (
                                                                    <li key={i}>{res}</li>

                                                                )
                                                            })
                                                        }
                                                        <li>{res['work_to'] + '-' + res['work_from']}</li>
                                                    </div>
                                                    <div className="service__address">
                                                        <li>{res.sircle}</li>
                                                        <li>{res.city}</li>
                                                        <li>{res.addres}</li>
                                                    </div>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>:
                        <div className='service__message'>
                            <DecorTitle title={this.props.service.searchPartAccessories.data} fontSize='26px'/>
                        </div>

                }
            </div>
        );
    }
}

const MapStateToProps = state => state;
const MainAccesoriesResult = connect(MapStateToProps)(AccesoriesResult);
export default MainAccesoriesResult;
