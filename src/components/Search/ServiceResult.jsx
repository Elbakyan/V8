import React, {Component} from 'react';
import {connect} from "react-redux";
import {SearchService, SearchServiceLink} from "../../redux/Service/action";
import DecorTitle from "../Decor/DecorTitle";
import {Link} from "react-router-dom";
import {GetStoreID} from "../../redux/search/action";

class ServiceResult extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.dispatch(SearchService(window.location.pathname.split('/').pop()))
    }

    render(){
            return (
                <div className='service__result'>
                    {
                        this.props.service.search.status?
                            <div className='service__container'>
                                <DecorTitle title={this.props.service.search.data.service[0].name} fontSize='18px'/>
                                <div className="container">
                                        <ul className='service__container-header'>
                                            <li>Անվանումը</li>
                                            <li>Հեռախոսահամրը</li>
                                            <li>Նկարագրություն</li>
                                            <li>Աշխատանքին օր․ և ժ․</li>
                                            <li>Հասցե</li>
                                        </ul>
                                       {
                                           this.props.service.search.data.score.map((res, i) => {
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
                                                               <li>{this.props.service.search.data.service[i].desc}</li>
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
                            </div>:
                            <div className='service__message'>
                                <DecorTitle title={this.props.service.search.data} fontSize='26px'/>
                            </div>

                    }
                </div>
            );
        }
}

const MapStateToProps = state => state;
const MainServiceResult = connect(MapStateToProps)(ServiceResult);
export default MainServiceResult;
