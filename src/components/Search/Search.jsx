import React, { Component } from 'react';
import {parts}  from '../Menu/autoObj'
import './Search.scss'
import Api from "../config/Api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faSearch} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {SearchResult, SearchScoreLists} from "../../redux/search/action";
import {Redirect} from "react-router";
import DefaultSelect from "../forms/select/DefaultSelect";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";

class Search extends Component {
    constructor(props) {
        super(props);
        this.SearchRef = React.createRef()
        this.state = {
            redirect : false,
            detal: [],
            store: []
        }
    }


    Search = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        const par = {
            id: this.SearchRef.current.value,
            code: this.SearchRef.current.value,
            searchNumber: this.SearchRef.current.value,
        }
        Api.get("num",par).then( res => {
            if (res.data) {
                this.props.dispatch(SearchResult(res.data))
            }
            this.setState({
                redirect: true
            })
        })
        POST(Url.searchscore,data).then(res => {
            if (res.status){
                this.props.dispatch(SearchScoreLists(res))
            }
        })

    }
    componentWillUnmount() {
        this.setState({
            redirect: false
        })
    }

    render(){

        return (
            <div className='Search'>
                {
                    this.state.redirect ? <Redirect to='/search/result' /> : ''
                }
                <form onSubmit={this.Search}>
                    <div className="select">
                        {/*<DefaultSelect data={parts} name='maser'/>*/}
                        <select name="" id="">
                            <option value="">
                                Պահեստամաս
                            </option>
                        </select>
                        <span><FontAwesomeIcon icon={faCheck} /></span>
                    </div>
                    <input type="text" placeholder='Մուտքագրեք դետալի կոդը' autoComplete='on' ref={this.SearchRef} name='code'/>
                    <label>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="submit"/>
                    </label>
                    <div className="select">
                        <DefaultSelect data={this.props.location.sircle} name='sircle'/>
                        <span><FontAwesomeIcon icon={faCheck} /></span>
                    </div>
                </form>
            </div>
        );
    }
}

const MapStateToProps = state => {
        return {
            search: state.search,
            location: state.location
        }
};
const MainSearch = connect(MapStateToProps)(Search);
export default MainSearch;