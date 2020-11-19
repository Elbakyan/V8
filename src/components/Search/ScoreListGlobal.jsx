import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetStoreID, SearchMarkModel} from "../../redux/search/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";

class ScoreListGlobal extends Component{
    constructor(props) {
        super(props);
        this.state ={
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


    render() {
        return(
            <div className="score_list">
                <div className="container">
                    <nav className='score_list_info'>
                        <div className='score_list_info__header table_style_header'>
                            <ul>
                                <li>Ապրանքանիշը</li>
                                <li>Նոր</li>
                                <li>Օգտ․</li>
                                <li>Ընկերությունը</li>
                                <li>Հեռախոսահամրը</li>
                                <li>Տարածաշրջանը</li>
                            </ul>
                        </div>
                        <div className='score_list_info__body table_style_body'>
                            {
                                this.props.MarkModelResult.status?'':
                                    <div className="message">
                                        <p>{this.props.MarkModelResult.message}</p>
                                    </div>
                            }


                            {
                                this.props.MarkModelResult.status? this.props.MarkModelResult.mark.map((mark,i) => {

                                    let store = this.props.MarkModelResult.score[i];
                                    if (store !== undefined){
                                        return (
                                            <ul>
                                                <li>{mark.mark}</li>
                                                <li>
                                                    {+mark.new?
                                                        <span style={{color:'green'}}><FontAwesomeIcon icon={faCheckCircle}/></span>:
                                                        <span style={{color:'red'}}><FontAwesomeIcon icon={faTimesCircle} /></span>
                                                    }
                                                </li>
                                                <li>
                                                    {+mark.old?
                                                        <span style={{color:'green'}}><FontAwesomeIcon icon={faCheckCircle}/></span>:
                                                        <span style={{color:'red'}}><FontAwesomeIcon icon={faTimesCircle} /></span>
                                                    }
                                                </li>
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
                                                        store.phone.map(p => {
                                                            if (p){
                                                                let tmp = p.split('');
                                                                let [p1,p2,p3,p4] = [
                                                                    tmp.splice(0,2).join(''),
                                                                    tmp.splice(0,3).join(''),
                                                                    tmp.splice(0,3).join(''),
                                                                ];

                                                                let phone = '(+374) ' + p1 + ' ' + p2 + '-' + p3;
                                                                return  <p>{phone}</p>
                                                            }else {
                                                                return ''
                                                            }


                                                        })
                                                    }
                                                </li>
                                                <li>{store.sircle}</li>
                                            </ul>
                                        )
                                    }

                                }): ''

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
