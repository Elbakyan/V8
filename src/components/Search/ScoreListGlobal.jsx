import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {GetStoreID} from "../../redux/search/action";

class ScoreListGlobal extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id: ''
        }
    }
    render() {
        console.log(this.props.scoreList.store)
        return(
            <div className="score_list">

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
                            this.props.scoreList.store !== false? this.props.scoreList.detal.map((detal,i) => {
                                let store = this.props.scoreList.store[i];
                                if (store !== undefined){
                                    return (
                                        <ul>
                                            <li>{detal.code}</li>
                                            <li>{detal.name}</li>
                                            <li>{detal.price + 'Դր․'}</li>
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
                                                                tmp.splice(0,3).join(''),
                                                                tmp.splice(0,2).join(''),
                                                                tmp.splice(0,3).join(''),
                                                                tmp.splice(0,3).join('')
                                                            ];

                                                            let phone = '(+' + p1 + ') ' + p2 + '-' + p3 + '-' + p4;
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
        )
    }
}


const MapStateToProps = state => state.search;
const MainScoreListGobal = connect(MapStateToProps)(ScoreListGlobal);
export default MainScoreListGobal;
