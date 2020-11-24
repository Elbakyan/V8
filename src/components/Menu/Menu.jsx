import React, {Component} from "react";
import './Menu.scss'
import {cars, maser, autogruz, service} from './autoObj'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {GetSearchMarkModelLink, SearchMarkModel} from "../../redux/search/action";

class Menu extends Component {


    constructor(props) {
        super(props);
        this.state ={
            mark: [],
            truck: [],
            redirect: false
        }
    }
    componentDidMount() {

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
            overley.style.display = 'none'
        }

    }
    GetCarStore = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id)
        data.append('type', e.target.dataset.type)
        this.props.dispatch(SearchMarkModel(data))
        this.props.dispatch(GetSearchMarkModelLink(e.target.dataset.type + '/' + e.target.dataset.id))
        setTimeout(() => {
            this.props.dispatch(GetSearchMarkModelLink(''))
            this.setState({
                redirect: false
            })
        },500)
    }


    render() {
        return (
            <div className="header_menu">
                {
                    this.state.redirect && this.props.search.link? <Redirect to={'/search/result/parts/' + this.props.search.link}/>:''
                }
                <div className='overley' onClick={(e)=>{
                    this.autoParts.style.display = 'none';
                    this.autoService.style.display = 'none';
                    e.target.style.display = 'none'

                }}>

                </div>
                <div className="container row justify-between align-center">
                    <nav>
                        <ul className="menu">
                            <li className="auto_parts" data-counter={1} onClick={this.open}>
                                Ավտոմասեր
                                <div className='parts_on open' data-counter={1} style={{display:'none'}} ref={el => this.autoParts = el}>
                                <ul className="auto_parts_block openX flex" data-close={1}>
                                    <li>
                                        <ul className="parts">
                                            {
                                                maser.map(({name}, i) => (
                                                    <li key={i}>
                                                        {name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        Մարդատարի պահեստամասեր
                                        <ul className="cars">
                                            {
                                                this.props.auto.mark.map((mark, i) => {
                                                    if(i !== 0){
                                                        return (
                                                            <li key={i} data-mark={mark.name} data-id={mark.id} data-type='car' onClick={this.GetCarStore}>
                                                                {mark.name}

                                                            </li>
                                                        )
                                                    }

                                                })

                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        Բեռնատարի պահեստամասեր
                                        <ul className="truck">
                                            {
                                                this.props.auto.truck.map((mark, i) => {
                                                    return (
                                                        <li key={i} data-mark={mark.name} data-id={mark.id} data-type='truck' onClick={this.GetCarStore}>
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
                            <li className="auto_service" data-counter={2} onClick={this.open}>
                                Ծառայություններ
                                <div className="service_on open" style={{display:'none'}} ref={el => this.autoService = el}>
                                    <ul className="service">
                                        {
                                            service.map(({name},i)=>(
                                                <li key={i}>
                                                    <Link to='/soon'>
                                                        {name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to='/announcement'>Հայտարարություն</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => state;
const MainMenu = connect(MapStateToProps)(Menu);
export default MainMenu;

