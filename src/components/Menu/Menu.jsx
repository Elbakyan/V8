import React, {Component} from "react";
import './Menu.scss'
import {cars, maser, autogruz, service} from './autoObj'
import {Link} from "react-router-dom";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state ={
            mark: []
        }
    }
    componentDidMount() {
       let mark =  this.props.mark.filter(res => {
            switch (res.name) {
                case 'Մակնիշ․․․':
                    return res
                case 'Audi':
                    return res
                case 'BMW':
                    return res
                case 'Ford':
                    return res
                case 'Hunda':
                    return res
                case 'Hundai':
                    return res
                case 'Mazda':
                    return res
                case 'Mercedes-Benz':
                    return res
                case 'Micubishi':
                    return res
                case 'Nossan':
                    return res
                case 'Opel':
                    return res
                case 'Toyota':
                    return res
                case 'Volkswagen':
                    return res

            }
        })
        let a = mark.concat(this.props.mark);
        let uniqueArray = a.filter((item, pos) => {

            return a.indexOf(item) == pos;
        })
        uniqueArray.shift();
        this.setState({
            mark: uniqueArray
        })


    }

    outMenu = e =>{
        // if(e.target.dataset.close !== undefined){
            this.autoParts.style.display = 'none';
            this.autoService.style.display = 'none';
        // }
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
                console.log(this.autoService.style.display)
                if(this.autoService.style.display === 'none' ){
                    this.autoService.style.display = 'block';
                    overley.style.display = 'block'
                }else{
                    this.autoService.style.display = 'none';
                    overley.style.display = 'none'
                }
            }
        }
    }
    GetStore = (e) => {
        console.log(e.target.dataset)
    }
    render() {

        return (
            <div className="header_menu">
                <div className='overley' onClick={(e)=>{
                    this.autoParts.style.display = 'none';
                    this.autoService.style.display = 'none';
                    e.target.style.display = 'none'
                    console.log(e.target)
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
                                                this.state.mark.map((mark, i) => {
                                                    return (
                                                        <li key={i} data-mark={mark.name} data-id={mark.id} onClick={this.GetStore}>
                                                            {mark.name}
                                                        </li>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </li>
                                    <li>
                                        Բեռնատարի պահեստամասեր
                                        <ul className="truck">
                                            {
                                                autogruz.map(({name}, i) => (
                                                    <li key={i}>
                                                        {name}
                                                    </li>
                                                ))
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
                                                    {name}
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

export default Menu;
