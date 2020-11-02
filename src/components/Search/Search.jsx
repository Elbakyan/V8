import React, { Component } from 'react';
import './Search.scss'
import Api from "../config/Api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {SearchResult} from "../../redux/search/action";
import {Redirect} from "react-router";

class Search extends Component {
    constructor(props) {
        super(props);
        this.SearchRef = React.createRef()
        this.state = {
            redirect : false,
        }
    }
    Search = (e) => {
        e.preventDefault()
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
            setTimeout(() => {
                this.setState({
                    redirect: false
                })
            },2000)
        })
        Api.get("carvin",par).then( res => {

        })
    }
    render(){
        return (
            <div className='Search'>
                {
                    this.state.redirect ? <Redirect to='/search/result' /> : ''
                }
                <form onSubmit={this.Search}>
                    <input type="text" placeholder='Գրեք VIN կոդը կամ Պահեստամասի Համարը...' ref={this.SearchRef}/>
                    <label>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="submit"/>
                    </label>
                </form>
            </div>
        );
    }
}

const MapStateToProps = state => state.search;
const MainSearch = connect(MapStateToProps)(Search);
export default MainSearch;