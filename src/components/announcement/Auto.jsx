import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faDollarSign, faCaretSquareDown, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import DefaultBtn from "../forms/buttons/DefaultBtn";
import {connect} from "react-redux";
import SliderAuto from "../SliderAuto/SliderAuto";
import {GetMessage, SendMessage} from "../../redux/message/action";
import Art from "../Alert";
import {POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {GetSell} from "../../redux/sellauto/action";



class Auto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:false
        }
    }

    componentDidMount() {
        let data = new FormData();
        data.append('id', +this.props.sell.OneAuto.id);
        data.append('watch', +this.props.sell.OneAuto.watch + 1);
        POST(Url.watckcount,data).then(res => {
            if (res.status){
                this.props.dispatch(GetSell())
            }
        })
        console.log('true')
    }

    SendMessage = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        this.props.dispatch(SendMessage(data))
        this.textareaRef.value = '';
        this.setState({
            message:true
        })
        setTimeout(()=>{
            this.setState({
                message:false
            })
        },1500)
    }
    onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            let data = new FormData(this.form);
            if (this.textareaRef.value.trim().length > 0){
                this.props.dispatch(SendMessage(data))
            }
            this.props.dispatch(GetMessage())
            this.textareaRef.value = ''
            this.setState({
                message:true
            })
            setTimeout(()=>{
                this.setState({
                    message:false
                })
            },1500)
        }


    }

    render() {

        let img;

        if (this.props.sell.OneAuto.img != undefined){
            img  = JSON.parse(this.props.sell.OneAuto.img)
        }
        let auto = this.props.sell.OneAuto;
        let phone = auto.phone.split('')

        return (

            <div className="Auto">
                <div>
                    <div className="block">
                        <div className='block-left'>
                            <div className="car_name">
                                <span>{auto.mark} {auto.model}</span>
                                {/*<span className="phone_car_owner"><FontAwesomeIcon icon={faMobileAlt}/>{auto.phone}</span>*/}
                            </div>
                            <div className="car_slider">
                                {
                                    img == undefined ? '' : <SliderAuto autoImage={img}/>
                                }
                            </div>
                        </div>

                        <div className='block-right'>

                            <div className="car_info">

                                <table className="auto_parapters">
                                    <tbody>
                                    <tr>
                                        <td style={{color:'red'}}>
                                            {
                                                auto.dealer == 1?<h1>Դիլեր</h1>:<h1>Անհատ</h1>
                                            }
                                        </td>

                                    </tr>
                                    <tr style={{color:'green'}}>
                                        <td>Արժեք</td>

                                        {
                                            <td >
                                                {auto.price} <span style={{fontSize:'10px'}}><FontAwesomeIcon icon={faDollarSign}/></span>
                                            </td>
                                        }
                                    </tr>
                                    <tr>
                                        <td>Հեռախոսահամար</td>
                                        <td><a href={'tel:'+phone} style={{color: '#404040'}}>{`(+374) ${phone.splice(0,2).join('')}  ${phone.splice(0,2).join('')} ${phone.splice(0,2).join('')} ${phone.splice(0,2).join('')}`}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Շարժիչը</td>
                                        <td>{auto.engine} Լ</td>
                                    </tr>
                                    {
                                        +auto.power?
                                            <tr>
                                                <td>Ձիաուժը</td>
                                                <td>{auto.power}</td>
                                            </tr>:''
                                    }

                                    <tr>
                                        <td>Տարեթիվ</td>
                                        <td>{auto.year}</td>
                                    </tr>
                                    <tr>
                                        <td>Գույն</td>
                                        <td>{auto.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Փոխանցման տուփը</td>
                                        <td>{auto.transmission}</td>
                                    </tr>
                                    <tr>
                                        <td>Ղեկը</td>
                                        <td>{auto.royle}</td>
                                    </tr>
                                    <tr>
                                        <td>Քարշակը</td>
                                        <td>{auto.traction}</td>
                                    </tr>
                                    <tr>
                                        <td>Նույնացման համար (VIN)</td>
                                        <td>{auto.vin}</td>
                                    </tr>
                                    <tr>
                                        <td>Վառելիքը</td>
                                        <td>{auto.fuel}</td>
                                    </tr>
                                    <tr>
                                        <td>Թափքի տեսակը</td>
                                        <td>{auto.type}</td>
                                    </tr>
                                    <tr>
                                        <td>ՏՄ Տեսակը</td>
                                        <td>{auto.category}</td>
                                    </tr>
                                    <tr>
                                        <td>Վազք</td>
                                        <td>{auto.mileage} : {auto.measurements}</td>
                                    </tr>
                                    <tr>
                                        <td>Մաս մաս վճարում</td>
                                        {
                                            auto.later == 1?<td><FontAwesomeIcon icon={faCheckCircle}/></td>:<td><FontAwesomeIcon icon={faTimesCircle}/></td>
                                        }
                                    </tr>
                                    <tr>
                                        <td>Մակսազերծված</td>
                                        {
                                            auto.сustoms_cleared == 1?<td><FontAwesomeIcon icon={faCheckCircle}/></td>:<td><FontAwesomeIcon icon={faTimesCircle}/></td>
                                        }
                                    </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div className="description_text">
                                <p>{auto.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="message__button">
                        {
                            this.state.message?<Art width={50} content="Հաղորդագրությունը ուղարկված է"/>:''
                        }

                        {
                            this.props.user.id == auto['user_id'] || !this.props.user.id?'':
                           <form onSubmit={this.SendMessage} ref={el => this.form = el}>
                               <textarea name="message" ref={el => this.textareaRef = el} onKeyDown={this.onEnterPress}></textarea>
                                <input type="hidden" name='get_id' value={auto['user_id']}/>
                               <input type="hidden" name='send_id' value={this.props.user.id }/>
                               <input type="hidden" name='state' value='user'/>
                                <DefaultBtn
                                    type='submit'
                                    name='Գրել․․․'
                                />
                            </form>
                        }
                        {
                            this.props.score.score.id?
                                <form onSubmit={this.SendMessage} ref={el => this.form = el}>
                                    <textarea name="message" ref={el => this.textareaRef = el} onKeyDown={this.onEnterPress}></textarea>
                                    <input type="hidden" name='get_id' value={auto['user_id']}/>
                                    <input type="hidden" name='send_id' value={this.props.score.score.id }/>
                                    <input type="hidden" name='state' value='users'/>
                                    <DefaultBtn
                                        type='submit'
                                        name='Գրել․․․'
                                    />
                                </form>:''
                        }

                    </div>
                </div>

            </div>
        )


    }
}

const MapStateToProps = state => state;
const MainAuto = connect(MapStateToProps)(Auto)
export default MainAuto;
