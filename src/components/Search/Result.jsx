import React, {Component, Fragment} from 'react';
import './Search.scss'
import Api from "../config/Api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Header from "../Score/Header";
import Footer from "../Footer/Footer";
import {connect} from "react-redux";
import {SearchResult, SearchResultAnal, SearchResultAnalCount, SearchResultAuto} from "../../redux/search/action";
import {Redirect, Route} from "react-router";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            redirect: false,
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
        })
        this.setState({
            id : e.target.dataset.id,
            redirect: true
        })
        setTimeout(() => {
            this.setState({
                redirect: false
            })
        },2000)
    }
    render(){

        return (
            <Fragment>
                {
                    this.state.redirect ? <Redirect to={'/search/result/' + this.state.id} /> : ''
                }
                <Header />
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
                                            <tr data-id={res.ID} key={i} onClick={this.SearchAll}>
                                                <td data-id={res.ID}>{res.ManufacturerDescription}</td>
                                                <td data-id={res.ID}><a data-id={res.ID} href="">{res.DataSupplierArticleNumber}</a></td>
                                                <td data-id={res.ID}>{res.ProductDescription}</td>
                                                <td data-id={res.ID}><img data-id={res.ID} src={res.FileIconFull} alt="" className='image'/></td>
                                                <td data-id={res.ID}>{res.Description}</td>
                                                <td data-id={res.ID}>{res.AssemblyGroupDescription}</td>
                                                <td data-id={res.ID}>{res.UsageDescription}</td>
                                            </tr>
                                        )
                                    }) : ''
                            }
                            </tbody>
                        </table>
                    </div>
                </Route>
                {

                    this.props.analCount != false ||
                    this.props.anal != false ||
                    this.props.auto != false  ?
                    <Route exact path={'/search/result/' + this.state.id}>
                        helloWorld
                    </Route> : ''
                }

                <Footer />
            </Fragment>
        );
    }
}

const MapStateToProps = state => state.search;
const MainResult = connect(MapStateToProps)(Result);
export default MainResult;
