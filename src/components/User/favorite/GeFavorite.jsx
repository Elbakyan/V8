import React, {Component} from "react";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import {GetFavorite} from "../../../redux/favorite/action";
import {GetSell} from "../../../redux/sellauto/action";
import Favorite from "../../announcement/Favorite";
import './GeFavorite.scss'

class GeFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            activePage: 15
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(GetSell(1))
        this.props.dispatch(GetFavorite(this.props.user.id))
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        pageNumber == 1 ?pageNumber = pageNumber: pageNumber = (pageNumber - 1) * 15;
        this.props.dispatch(GetSell(pageNumber))
        console.log(pageNumber)

    }

    render() {
        return (
            <div className='auto_content'>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={15}
                    totalItemsCount={this.props.favorite.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                />
                <Favorite />
            </div>
        )
    }
}
const MapStateToProps = state => state;
const MainGeFavorite = connect(MapStateToProps)(GeFavorite)
export default MainGeFavorite;
