import React, {Component, Fragment} from 'react';
import './Search.scss'
import Api from "../config/Api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Header from "../Score/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import {
    GetSearchMarkModelLink,
    SearchMarkModel,
    SearchResult,
    SearchResultAnal,
    SearchResultAnalCount,
    SearchResultAuto,
    SearchResultImg, SearchResultProduct
} from "../../redux/search/action";
import {Redirect, Route} from "react-router";
import DetaleLists from "./DetaeLists";
import ScoreList from "./ScoreList";
import {Link} from "react-router-dom";
import StoreInfo from "../StoreInfo/StoreInfo";
import ScoreListGlobal from "./ScoreListGlobal";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }
    SearchAll = (e) => {
        e.preventDefault();
        Api.get("analCount",{id: e.target.dataset.id}).then( res => {
            this.props.dispatch(SearchResultAnalCount(res.count))
        })
        Api.get("anal",{id: e.target.dataset.id}).then( res => {
            this.props.dispatch(SearchResultAnal(res.data))
        })
        Api.get("auto",{id: e.target.dataset.id}).then( res => {
            this.props.dispatch(SearchResultAuto(res.data))
            // console.log(res)
        })
        Api.get("image",{id: e.target.dataset.id}).then( res => {
            this.props.dispatch(SearchResultImg(res.data))
        })
        Api.get("article",{id: e.target.dataset.id}).then( res => {
            this.props.dispatch(SearchResultProduct(res.data))
        })

        this.setState({
            id : e.target.dataset.id,
        })

    }
    render(){

        return (
            <Fragment>
                <Header />
                <Route exact path={'/search/result/detal/' + window.location.pathname.split('/')[window.location.pathname.split('/').length -1]}>
                    <DetaleLists />
                </Route>
                <Route exact path='/search/result/'>
                    <div className='Result'>
                        <table className='result_code'>
                            <thead>
                            <tr>
                                <th>Производитель</th>
                                <th>Артикул</th>
                                <th>Наименование детали</th>
                                <th>Фото</th>
                                <th>Ориг</th>
                                <th>Место установки</th>
                                <th>Назначение</th>
                            </tr>

                            </thead>

                            <tbody>
                            {
                                this.props.result?
                                    this.props.result.map((res, i) => {
                                        return (
                                            <tr data-id={res.ID} data-article={res.DataSupplierArticleNumber} key={i} onClick={this.SearchAll}>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}>{res.ManufacturerDescription}</td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}><Link to={'/search/result/detal/' + res.ID} data-id={res.ID}>{res.DataSupplierArticleNumber}</Link></td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}>{res.ProductDescription}</td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}><img data-id={res.ID} src={res.FileIconFull} alt="" className='image'/></td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}>{res.Description}</td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}>{res.AssemblyGroupDescription}</td>
                                                <td data-id={res.ID} data-article={res.DataSupplierArticleNumber}>{res.UsageDescription}</td>
                                            </tr>
                                        )
                                    }) : ''
                            }
                            </tbody>
                        </table>

                    </div>
                    <div className="container">
                        <ScoreList />

                    </div>
                </Route>
                <Route path={'/search/result/store/' + this.props.id}>
                    <StoreInfo />
                </Route>
                <Route path={'/search/result/parts/' + this.props.link}>
                    <ScoreListGlobal />
                </Route>
                <Footer />
            </Fragment>
        );
    }
}

const MapStateToProps = state => state.search;
const MainResult = connect(MapStateToProps)(Result);
export default MainResult;
