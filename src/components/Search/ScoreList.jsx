import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetStoreID} from "../../redux/search/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

class ScoreList extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id: '',
            fullImg: '',
            openFullImg: false
        }
    }
    positionTop = ()=>{
        this.listRef.scrollTop = 0
    }
    render() {
        return(
            <div className="score_list">
                <div className="full_img" style={this.state.openFullImg? {display:"flex"}: {display: "none"}}>
                    <img src={this.state.fullImg} alt=""/>
                    <span className="full_img-icon" onClick={() => this.setState({openFullImg: false})}><FontAwesomeIcon icon={faTimesCircle} /></span>
                </div>
                    <nav className='score_list_info'>
                        <div className='score_list_info__header table_style_header'>
                            <ul>
                                <li>Պահեստամասի համար</li>
                                <li>Պահեստամասի անվանում</li>
                                <li>Նկար</li>
                                <li>Արժեք</li>
                                <li>Ընկերություն</li>
                                <li>Հեռախոսահամր</li>
                                <li>Տարածաշրջան</li>
                            </ul>
                        </div>
                        <div className='score_list_info__body table_style_body'>
                              <span className="arrow_top" onClick={this.positionTop}>
                                <FontAwesomeIcon icon={faArrowUp} />
                              </span>
                            {
                                this.props.scoreList.store !== false? this.props.scoreList.detal.map((detal,i) => {
                                    let store = this.props.scoreList.store[i];
                                    if (store !== undefined){
                                        return (
                                            <ul key={i}>
                                                <li>{detal.code}</li>
                                                <li>{detal.name}</li>
                                                <li>
                                                    <img src={detal.img} alt=""onClick={(e) => {
                                                        this.setState({
                                                            fullImg: detal.img,
                                                            openFullImg: true
                                                        })
                                                    }}/>
                                                </li>
                                                <li>{detal.price + ' դր․'}</li>
                                                <li ><Link to={'/search/result/store/' + store.id}
                                                           onClick={() => {
                                                               this.setState({
                                                                   id: store.id
                                                               })
                                                               this.props.dispatch(GetStoreID(store.id))
                                                           }}
                                                >{store.name}</Link></li>
                                                <li>
                                                    {
                                                        store.phone.map((p,i) => {
                                                            if (p){
                                                                let tmp = p.split('');
                                                                let [p1,p2,p3,p4] = [
                                                                    tmp.splice(0,2).join(''),
                                                                    tmp.splice(0,3).join(''),
                                                                    tmp.splice(0,3).join('')
                                                                ];

                                                                let phone = '(+374) '+ p1 + '-' + p2 + '-' + p3;
                                                                return  <p key={i}>{phone}</p>
                                                            }else {
                                                                return ''
                                                            }


                                                        })
                                                    }
                                                </li>
                                                <li >{store.sircle}</li>
                                            </ul>
                                        )
                                    }

                                }): ''

                            }
                        </div>
                    </nav>

            </div>
        )
    }
}


const MapStateToProps = state => state.search;
const MainScoreList = connect(MapStateToProps)(ScoreList);
export default MainScoreList;
