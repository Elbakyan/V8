import React, {Component} from "react";
import './Menu.scss'
import {cars, maser, autogruz, service, carsTop} from './autoObj'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackspace, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

class Menu extends Component {
    outMenu = e =>{
        // if(e.target.dataset.close !== undefined){
            this.autoParts.style.display = 'none';
            this.autoService.style.display = 'none';
        // }
        console.log(e.target.dataset.close)
    }
    open = e => {
        if (e.target.dataset.counter != undefined) {
            this.autoParts.style.display = 'none';
            this.autoService.style.display = 'none';
            switch (e.target.dataset.counter){
                case '1' : this.autoParts.style.display = 'block';
                break;
                case '2' : this.autoService.style.display = 'block';
                break;
            }
            // console.log(menu.style.display)
            // menu.style.display = 'none'
            // if(menu.style.display === 'block'){
            //     menu.style.display = 'none'
            //     console.log('treeeee')
            // }
            // if(menu.style.display === 'none'){
            //     menu.style.display = 'block'
            // }

        }
    }

    render() {
        console.log(Object.values(carsTop))

        return (
            <div className="header_menu">
                <div className="container row justify-between align-center">
                    <nav>
                        <ul className="menu">
                            <li className="auto_parts" data-counter={1} onClick={this.open}>
                                Ավտոմասեր
                                <div className='parts_on open' data-counter={1} style={{display:'none'}} ref={el => this.autoParts = el}>
                                <ul className="auto_parts_block openX flex" data-close={1}>
                                    <span className="close_auto_parts" onClick={this.outMenu}><FontAwesomeIcon icon={faBackspace} /></span>

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
                                                cars.map(({name}, i) => (
                                                    <li key={i}>
                                                        {name}
                                                    </li>
                                                ))
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
                                    <span className="close_auto_service" onClick={this.outMenu}><FontAwesomeIcon icon={faBackspace} /></span>
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
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Menu;


{/*<ul className="spare_parts">*/
}
{/*    <li>*/
}
{/*        Ավտոմասեր*/
}
{/*        <ul className="disp">*/
}
{/*            {*/
}
{/*                maser.map(({name}, i) => (*/
}
{/*                    <li key={i}>*/
}
{/*                        {name}*/
}
{/*                    </li>*/
}
{/*                ))*/
}
{/*            }*/
}
{/*        </ul>*/
}
{/*    </li>*/
}
{/*    <li className="menu_cars" data-counter={1} >*/
}
{/*        Մարդատարի պահեստամասեր*/
}
{/*        <ul className="disp">*/
}
{/*            {*/
}
{/*                carsTop.map(({name}, i) => (*/
}
{/*                    <li key={i}>*/
}
{/*                        {name}*/
}
{/*                    </li>*/
}
{/*                ))*/
}
{/*            }*/
}
{/*            {*/
}
{/*                cars.map(({name}, i) => (*/
}
{/*                    <li key={i}>*/
}
{/*                        {name}*/
}
{/*                    </li>*/
}
{/*                ))*/
}
{/*            }*/
}
{/*        </ul>*/
}
{/*    </li>*/
}
{/*    <li className="menu_carsTrack" data-counter={1}>*/
}
{/*        Բեռնատարի պահեստամասեր*/
}
{/*        <ul className="disp" >*/
}
{/*            {*/
}
{/*                autogruz.map(({name}) => (*/
}
{/*                    <li>*/
}
{/*                        {name}*/
}
{/*                    </li>*/
}
{/*                ))*/
}
{/*            }*/
}
{/*        </ul>*/
}
{/*    </li>*/
}
{/*</ul>*/
}