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
       // if (this.props.mark){
       //     let mark =  this.props.mark.filter(res => {
       //         switch (res.name) {
       //             case 'Audi' :
       //                 return res;
       //             case 'BMW' :
       //                 return res;
       //             case 'Ford' :
       //                 return res;
       //             case 'Honda' :
       //                 return res;
       //             case 'Hyundai' :
       //                 return res;
       //             case 'Mazda' :
       //                 return res;
       //             case 'Mercedes-Benz' :
       //                 return res;
       //             case 'Mitsubishi' :
       //                 return res;
       //             case 'Nissan' :
       //                 return res;
       //             case 'Opel' :
       //                 return res;
       //             case 'Toyota' :
       //                 return res;
       //             case 'Volkswagen':
       //                 return res;
       //             case 'Acura' :
       //                 return res;
       //             case 'Bentley' :
       //                 return res;
       //             case 'Cadillac' :
       //                 return res;
       //             case 'Chevrolet' :
       //                 return res;
       //             case 'Chrysler' :
       //                 return res;
       //             case 'Citroen' :
       //                 return res;
       //             case 'Chery' :
       //                 return res;
       //             case 'Daewoo' :
       //                 return res;
       //             case 'Dodge' :
       //                 return res;
       //             case 'Fiat' :
       //                 return res;
       //             case 'Infiniti' :
       //                 return res;
       //             case 'Isuzu' :
       //                 return res;
       //             case 'Jaguar' :
       //                 return res;
       //             case 'Jeep' :
       //                 return res;
       //             case 'Kia' :
       //                 return res;
       //             case 'Land Rover' :
       //                 return res;
       //             case 'Lexus' :
       //                 return res;
       //             case 'Mini' :
       //                 return res;
       //             case 'Peugeot' :
       //                 return res;
       //             case 'Porsche' :
       //                 return res;
       //             case 'Renault' :
       //                 return res;
       //             case 'Samand' :
       //                 return res;
       //             case 'Skoda' :
       //                 return res;
       //             case 'Subaru' :
       //                 return res;
       //             case 'Suzuki' :
       //                 return res;
       //             case 'Volvo' :
       //                 return res;
       //             case 'ВАЗ LADA' :
       //                 return res;
       //             case 'ГАЗ Волга' :
       //                 return res;
       //             case 'УАЗ' :
       //                 return res;
       //         }
       //     })
       //     let truck = this.props.mark.filter(res => {
       //         switch (res.name) {
       //             case 'DAF' :
       //                 return res;
       //             case 'HOWO' :
       //                 return res;
       //             case 'Iveco' :
       //                 return res;
       //             case 'MAN' :
       //                 return res;
       //             case 'Mercedes-Benz' :
       //                 return res;
       //             case 'Renault' :
       //                 return res;
       //             case 'Scania' :
       //                 return res;
       //             case 'Volvo' :
       //                 return res;
       //             case 'ГАЗ' :
       //                 return res;
       //             case 'ЗИЛ' :
       //                 return res;
       //             case 'КамАЗ' :
       //                 return res;
       //             case 'КрАЗ' :
       //                 return res;
       //             case 'МАЗ' :
       //                 return res;
       //             case 'УАЗ' :
       //                 return res;
       //         }
       //
       //     })
       //
       //     this.setState({
       //         mark:mark,
       //         truck: truck
       //     })
       //
       //
       // }

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
        // this.props.dispatch(GetSearchMarkModelLink(e.target.dataset.id))
        this.props.dispatch(GetSearchMarkModelLink(e.target.dataset.type + '/' + e.target.dataset.id))

        this.setState({
            redirect: true,
        })

    }
    componentWillUnmount() {

        // setTimeout(() => {
            this.props.dispatch(GetSearchMarkModelLink(''))
            this.setState({
                redirect: false
            })
        // },500)
        console.log(this.state.redirect)
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

