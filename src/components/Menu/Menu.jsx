import React, {Component} from "react";
import './Menu.scss'

import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GetSearchMarkModelLink, SearchMarkModel} from "../../redux/search/action";

import {
    GetPartAccessoris,
    SearchAccessoriesLink,
    SearchPartAccessoris,
    SearchService,
    SearchServiceLink
} from "../../redux/Service/action";
import {MenuActive} from "../../redux/Menu/action";

class Menu extends Component {


    constructor(props) {
        super(props);
        this.state ={
            mark: [],
            truck: [],
            redirect: false,
            serviceRedirect: false,
            accessoriesRedirect: false
        }
    }
    outMenu = e =>{
            this.autoParts.style.display = 'none';
            this.autoService.style.display = 'none';
    }
    open = e => {
        let overley = document.querySelector('.overley')
        if (e.target.dataset.counter !== undefined) {
            if(e.target.dataset.counter === '1'){
                this.autoService.style.display = 'none';
                if(this.autoParts.style.display === 'none' ){
                    this.autoParts.style.display = 'block';
                    overley.style.display = 'block'
                }else{
                    this.autoParts.style.display = 'none';
                    overley.style.display = 'none'
                }
            }

            if(e.target.dataset.counter === '2'){
                this.autoParts.style.display = 'none';
                if(this.autoService.style.display === 'none' ){
                    this.autoService.style.display = 'block';
                    overley.style.display = 'block'
                }else{
                    this.autoService.style.display = 'none';
                    overley.style.display = 'none'
                }
            }
        }else{
            this.autoParts.style.display = 'none';
            this.autoService.style.display = 'none';
            overley.style.display = 'none'
        }

    }
    GetCarStore = (e) => {

        let data = new FormData();
        data.append('id', e.target.dataset.id)
        data.append('type', e.target.dataset.type)
        this.props.dispatch(SearchMarkModel(data))
        this.props.dispatch(GetSearchMarkModelLink(e.target.dataset.type + '/' + e.target.dataset.id))
        this.props.dispatch(MenuActive(e.target.dataset.id,e.target.dataset.type))
        this.setState({
            redirect: true,
        })
    }
    componentWillUnmount() {
        this.props.dispatch(GetSearchMarkModelLink(''))
        this.props.dispatch(SearchServiceLink(''))
        this.props.dispatch(SearchAccessoriesLink(''))
            this.setState({
                redirect: false,
                serviceRedirect: false,
                accessoriesRedirect: false
            })
    }

    SearchService = (e) => {
        console.log(e.target.dataset.id)
        this.props.dispatch(SearchService(e.target.dataset.id))
        this.props.dispatch(SearchServiceLink('/search/result/service/' + e.target.dataset.id))
        this.props.dispatch(MenuActive(e.target.dataset.id,e.target.dataset.type))

        this.setState({
            serviceRedirect: true,
        })
    }
    SearchServiceLink = (e) =>{
        this.props.dispatch(SearchPartAccessoris(e.target.dataset.id))
        this.props.dispatch(SearchAccessoriesLink('/search/result/accessoris/' + e.target.dataset.id))
        this.props.dispatch(MenuActive(e.target.dataset.id,e.target.dataset.type))
        this.setState({
            accessoriesRedirect: true,
        })
    }
    render() {
        return (
            <div className="header_menu">
                {
                    this.state.redirect && this.props.search.link? <Redirect to={'/search/result/parts/' + this.props.search.link}/>:''
                }
                {
                    this.state.serviceRedirect && this.props.service.link? <Redirect to={this.props.service.link}/>:''
                }
                {
                    this.state.accessoriesRedirect && this.props.service.accessoriesLink? <Redirect to={this.props.service.accessoriesLink}/>:''
                }
                <div className='overley' onClick={(e)=>{
                    this.autoParts.style.display = 'none';
                    this.autoService.style.display = 'none';
                    e.target.style.display = 'none'

                }}>

                </div>
                {/*<div className="container row justify-between align-center">*/}
                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to='/'>
                                    <span className='home_button menu_button'>
                                        HOME
                                    </span>
                                </Link>

                            </li>
                            <li className="auto_parts"  onClick={this.open}>
                                <span data-counter={1} className='menu_button'>Պահեստամասեր</span>
                                <div className='parts_on open' data-counter={1} style={{display:'none'}} ref={el => this.autoParts = el}>
                                <ul className="auto_parts_block openX flex" data-close={1}>
                                    <li>
                                        <ul className="parts">
                                            {
                                                this.props.service.partsAndAccessories.map(({id,name}, i) => (
                                                    <li
                                                        key={i}
                                                        data-type={'accessories'}
                                                        data-id={id}
                                                        onClick={this.SearchServiceLink}
                                                        className={
                                                            this.props.menu.active[1]===id && this.props.menu.active[0]==='accessories'?
                                                                'active_menu_nav':'desActive_menu_nav'
                                                        }
                                                    >
                                                        {name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <span>
                                            Մարդատարի պահեստամասեր
                                        </span>
                                        <ul className="cars">
                                            {
                                                this.props.auto.mark.map((mark, i) => {
                                                    if(i !== 0){
                                                        return (
                                                            <li
                                                                key={i}
                                                                data-mark={mark.name}
                                                                data-id={mark.id} data-type='car'
                                                                onClick={this.GetCarStore}
                                                                className={
                                                                    this.props.menu.active[1]===mark.id && this.props.menu.active[0]==='car'?
                                                                        'active_menu_nav':'desActive_menu_nav'
                                                                }
                                                            >
                                                                {mark.name}
                                                            </li>
                                                        )
                                                    }

                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Բեռնատարի պահեստամասեր</span>
                                        <ul className="truck">
                                            {
                                                this.props.auto.truck.map((mark, i) => {
                                                    return (
                                                        <li
                                                            key={i}
                                                            data-mark={mark.name}
                                                            data-id={mark.id} data-type='truck'
                                                            onClick={this.GetCarStore}
                                                            className={
                                                                this.props.menu.active[1]===mark.id && this.props.menu.active[0]==='truck'?
                                                                    'active_menu_nav':'desActive_menu_nav'
                                                            }
                                                        >
                                                            {mark.name}
                                                        </li>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </li>
                                </ul>

                                </div>
                            </li>
                            <li className="auto_service"  onClick={this.open}>
                                 <span data-counter={2} className='menu_button'>Ծառայություններ</span>
                                <div className="service_on open" style={{display:'none'}} ref={el => this.autoService = el}>
                                    <ul className="service">
                                        {
                                            this.props.service.service.map(({id,name},i)=> {

                                                return (
                                                    <li
                                                        key={id}
                                                        data-id={id}
                                                        data-type={'service'}
                                                        onClick={this.SearchService}
                                                        className={
                                                            this.props.menu.active[1]===id && this.props.menu.active[0]==='service'?
                                                            'active_menu_nav':'desActive_menu_nav'
                                                        }
                                                    >
                                                        {name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to='/announcement'>
                                    <span className='menu_button'>
                                        Մեքենաներ
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                {/*</div>*/}
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainMenu = connect(MapStateToProps)(Menu);
export default MainMenu;

