import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTimes, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Redirect} from "react-router-dom";
import './UserCars.scss'
import SliderAuto from "../../SliderAuto/SliderAuto";
import DefaultBtn from "../../forms/buttons/DefaultBtn";
import DefaultInput from "../../forms/inputs/DefaultInput";
import {GetAuto} from "../../../redux/auto/action";
import DefaultSelect from "../../forms/select/DefaultSelect";
import {POST, TEST_POST} from "../../config/Requsest";
import {Url} from "../../config/Url";
import {connect} from "react-redux";
import Art from "../../Alert";



class UserCars extends Component {
    constructor(props) {
        super(props);
        this.state ={
            message: '',
            Redirect: false,
            RedirectSell: false,
            edit: false

        }
    }

    closeSell = (e)=>{
        const modal = document.querySelectorAll('.delet_car')
        modal.forEach((el,i)=>{
                el.style.display = 'none'
        })
    }

    openSell = (e) => {

        if(e.target.innerHTML === 'Վաճառել'){
            e.target.innerHTML = "Հրաժարվել վաճառքից"
        }else {
            e.target.innerHTML = "Վաճառել"
        }

        const block = document.querySelectorAll('.' + e.target.className)

        block[1].classList.toggle('sell_user_car_open')

    }

    clear = (e)=>{
        const modal = document.querySelectorAll('.delet_car')
        modal.forEach((el,i)=>{
            if(e.target.dataset.num === el.dataset.num){
                el.style.display = 'flex'
            }
        })
    }

    SellAuto = (e) =>{

        e.preventDefault();
        let data = new FormData(e.target);
        POST(Url.sell,data).then(res => {
            if (res.status) {
                this.setState({
                    RedirectSell: true
                })
            }else{
                this.setState({
                    message: res.message
                })
            }

        })
    }
    RefuseSell = (e) => {

        let data = new FormData();
        data.append('id', e.target.id)
        POST(Url.refuse,data).then(res => {
            if (res) {
                this.props.dispatch(GetAuto(this.props.user.id))
            }

        })
    }

    Delite = (e) => {

        let data = new FormData();
        data.append('id', e.target.dataset.id)

        POST(Url.DeleteUserAuto,data).then(res => {
            console.log(res)
            if (res.status){
                const modal = document.querySelectorAll('.delet_car')
                modal.forEach((el,i)=>{
                    el.style.display = 'none'
                })
                    this.props.dispatch(GetAuto(this.props.user.id))
            }
        })
    }
    UbdateImg = (e) => {
        let data = new FormData();
        data.append('id',e.target.dataset.id)
        data.append('url',e.target.dataset.url)
        data.append('img',e.target.dataset.img)
        POST(Url.updateAutoImg,data).then(res => {
            if (res.status){
                this.props.dispatch(GetAuto(this.props.user.id))
            }
        })
    }
    AddSliderImg = (e) => {
        let data = new FormData();
        data.append('id', e.target.dataset.id)
        Object.values(e.target.files).map(img => {
            data.append('img[]', img)
        })

       POST(Url.addAutoImg,data).then(res => {
           if (res.status){
                this.props.dispatch(GetAuto(this.props.user.id))
           }else{
               this.setState({
                   message: res.message
               })
               setTimeout(() => {
                   this.setState({
                       message: ''
                   })
               },2000)
           }
       })
    }
    Update = (e) => {
        e.preventDefault();
        let data = new FormData(e.target)
        POST(Url.updateAutoInfo,data).then(res => {
           if (res.status){
               this.setState({
                   edit:false
               })
               this.props.dispatch(GetAuto(this.props.user.id))
           }
       })

    }
    render() {
        return (
            <div>
                {this.state.RedirectSell ? <Redirect to='/announcement' /> : ''}
                <div className="User__cars">

                    {

                        this.props.auto.auto.data.map(({
                                        id,
                                        user_id,
                                        mark,
                                        model,
                                        transmission,
                                        color,
                                        year,
                                        fuel,
                                        engine,
                                        number,
                                        vin,
                                        img,
                                        power,
                                        type,
                                        category,
                                        traction,
                                        royle,
                                        state

                                    }) => (
                            <div key={id} className='car col'>
                                <div className='block-left'>
                                    <div className="car_name">
                                        <span>{mark} {model}</span>
                                        <span>
                                            <FontAwesomeIcon data-num={id} icon={faTrashAlt} />
                                            <span data-num={id} onClick={this.clear}></span>
                                        </span>
                                    </div>
                                    <div className="delet_car disp block" data-num={id}>
                                        <div>
                                            <div>
                                                <h1>Հեռացնել մեքենան՞</h1>

                                            </div>
                                            <div>
                                                <DefaultBtn
                                                    name='Այո'
                                                    width="100%"
                                                    type='submit'
                                                    background='#143645'
                                                    color='#ffffff'
                                                    light={30}
                                                    dataId={id}
                                                    onClick={this.Delite}
                                                />
                                                <DefaultBtn
                                                    onClick={this.closeSell}
                                                    name='Ոչ'
                                                    width="100%"
                                                    type='submit'
                                                    background='#143645'
                                                    color='#ffffff'
                                                    light={30}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="car_slider">
                                        {
                                            this.state.message?
                                                <Art type='warning' content={this.state.message} />:''
                                        }

                                        <SliderAuto autoImage={JSON.parse(img)} id={id} edit={true} onClick={this.UbdateImg}  loading={this.state.loadingSlider} AddImg={this.AddSliderImg}/>
                                        {
                                            JSON.parse(img) != false?'':
                                                <form encType='multipart/form-data' className='add__first-img'>
                                                    <label className='add__img'>
                                                        <div className="bg"></div>
                                                        <input
                                                            type='file'
                                                            multiple
                                                            onChange={this.AddSliderImg}
                                                            data-id={id}
                                                        />
                                                        <span className='add'>+</span>

                                                    </label>
                                                </form>
                                        }
                                    </div>
                                </div>

                                <div className='block-right'>
                                    <div className="edit">
                                        {
                                            this.state.edit?
                                                <span onClick={() => this.setState({edit:false})}>
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </span>
                                                :
                                                <span onClick={() => this.setState({edit:true})}>
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </span>

                                        }

                                    </div>
                                    <div className="car_info">
                                        <form onSubmit={this.Update}>
                                            <table className="auto_parapters">
                                                <input type="hidden" name='id' value={id}/>
                                                <tbody>
                                                <tr>
                                                    <td>Շարժիչը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="engine">
                                                                    {
                                                                        this.props.auto.engine.map(res => {
                                                                            if (res !== 'Շարժիչ․․․'){
                                                                                return(
                                                                                    <option selected={res == engine?'selected':''} value={res}>{res}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{engine}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Ձիաուժը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <input type="number" name='power' defaultValue={power}/>
                                                            </td>:
                                                            <td>{power}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Տարեթիվ</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="year">
                                                                    {
                                                                        this.props.auto.year.map(res => {
                                                                            if (res !== 'Տարեթիվ․․․'){
                                                                                return(
                                                                                    <option selected={res == year?'selected':''} value={res}>{res}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{year}</td>
                                                    }
                                                </tr>
                                                <tr>

                                                    <td>Գույն</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="color">
                                                                    {
                                                                        this.props.auto.color.map(res => {
                                                                            if (res.name !== 'Գույն․․․'){
                                                                                return(
                                                                                    <option selected={res.name == color?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{color}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Փոխանցման տուփը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="transmission">
                                                                    {
                                                                        this.props.auto.transmission.map(res => {
                                                                            if (res.name !== 'Փոխանցման տուփ․․․'){
                                                                                return(
                                                                                    <option selected={res.name == transmission?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{transmission}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Ղեկը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="royle">
                                                                    {
                                                                        this.props.auto.royle.map(res => {
                                                                            if (res.name !== 'Ղեկ․․․'){
                                                                                return(
                                                                                    <option selected={res.name == royle?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{royle}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Քարշակը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="traction">
                                                                    {
                                                                        this.props.auto.traction.map(res => {
                                                                            if (res.name !== 'Քարշակ'){
                                                                                return(
                                                                                    <option selected={res.name == traction?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{traction}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Նույնացման համար (VIN)</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <input type="text" name='vin' defaultValue={vin}/>
                                                            </td>:
                                                            <td>{vin}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Վառելիքը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="fuel">
                                                                    {
                                                                        this.props.auto.fuel.map(res => {
                                                                            if (res.name !== 'Վառելիք․․․'){
                                                                                return(
                                                                                    <option selected={res.name == fuel?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{fuel}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>Թափքի տեսակը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="type">
                                                                    {
                                                                        this.props.auto.type.map(res => {
                                                                            if (res.name !== 'Թափք․․․'){
                                                                                return(
                                                                                    <option selected={res.name == type?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{type}</td>
                                                    }
                                                </tr>
                                                <tr>
                                                    <td>ՏՄ Տեսակը</td>
                                                    {
                                                        this.state.edit?
                                                            <td>
                                                                <select name="category">
                                                                    {
                                                                        this.props.auto.category.map(res => {
                                                                            if (res.name !== 'ՏՄ Տեսակ․․․'){
                                                                                return(
                                                                                    <option selected={res.name == category?'selected':''} value={res.name}>{res.name}</option>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>:
                                                            <td>{category}</td>
                                                    }
                                                </tr>
                                                </tbody>
                                            </table>

                                            {
                                                this.state.edit?
                                                    <div className='send'>
                                                        {
                                                            this.state.edit?
                                                                <div className="items">
                                                                    <label className='auto__number'>
                                                                        <DefaultInput
                                                                            type='text'
                                                                            name='number'
                                                                            placeholder='XX YY XXX'
                                                                            defaultValue={number}
                                                                            onInput={(e) =>{
                                                                                switch (e.target.value.length){
                                                                                    case 2:
                                                                                        e.target.value += ' '
                                                                                    case 6:
                                                                                        e.target.value += ' '
                                                                                }
                                                                            }}
                                                                        />
                                                                    </label>
                                                                </div>:''
                                                        }
                                                        <button>Հաստատել</button>
                                                    </div>:
                                                    <div className="number_cars">
                                                        <span>{number}</span>
                                                    </div>
                                            }


                                        </form>
                                        {
                                            this.state.edit?'':
                                                <div className="sell_cars">

                                                    {
                                                        +state === 0?
                                                            <DefaultBtn
                                                                onClick={this.openSell}
                                                                name='Վաճառել'
                                                                width="200px"
                                                                className={'sell_user_car' + id}
                                                                type='submit'
                                                                background='#143645'
                                                                color='#ffffff'
                                                                light={30}
                                                            />:
                                                            <DefaultBtn
                                                                name='Հրաժարվել Վաճառքից'
                                                                width="200px"
                                                                type='submit'
                                                                background='#143645'
                                                                color='#ffffff'
                                                                light={30}
                                                                id={id}
                                                                onClick={this.RefuseSell}
                                                            />

                                                    }

                                                </div>
                                        }
                                        <div className={'sell_user_car sell_user_car' + id + ' sell_user_car_open'}>
                                            {/*<p style={{color: 'red'}}>{this.state.message}</p>*/}
                                            <form id="sellCar" onSubmit={this.SellAuto}>
                                                <div className="left_block">
                                                    <div className="left_block_inp">
                                                        <div className="left_block_inp_measurements">
                                                            <DefaultInput
                                                                width="55%"
                                                                height='50px'
                                                                type='number'
                                                                name='mileage'
                                                                placeholder='Վազքը'
                                                            />

                                                            <DefaultSelect
                                                                width="35%"
                                                                height='50px'
                                                                name='measurements'
                                                                data={[
                                                                    {
                                                                        name:'Kilometer'
                                                                    },
                                                                    {
                                                                        name:'Miles'
                                                                    }
                                                                ]}
                                                            />
                                                        </div>

                                                        <DefaultInput
                                                            type='number'
                                                            name='price'
                                                            placeholder='Արժեքը'
                                                            width="40%"
                                                            height='50px'
                                                        />
                                                    </div>


                                                    <div className="left_block_check">
                                                        <label>
                                                            Մակսազերծված է
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='сustoms_cleared'
                                                                value="1"
                                                            />
                                                        </label>
                                                        <DefaultInput
                                                            type='hidden'
                                                            name='phone'
                                                            value={this.props.user.data !== undefined ?this.props.user.data.phone: ''}
                                                        />
                                                        <DefaultInput
                                                            type='hidden'
                                                            name='sircle'
                                                            value={this.props.user.data !== undefined ?this.props.user.data.sircle: ''}
                                                        />
                                                        <DefaultInput
                                                            type='hidden'
                                                            name='city'
                                                            value={this.props.user.data !== undefined ?this.props.user.data.city: ''}
                                                        />
                                                        <label>
                                                            Մաս մաս վճարում
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='later'
                                                                value="1"
                                                            />
                                                        </label>
                                                        <label>
                                                            Դիլեր
                                                            <DefaultInput
                                                                type='checkbox'
                                                                name='dealer'
                                                                value="1"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="right_block">
                                                           <textarea className="description_text"
                                                                     rows="4"
                                                                     cols="50"
                                                                     name="desc"
                                                                     placeholder="Նկարագրություն..."
                                                           />
                                                </div>
                                                <DefaultInput
                                                    type='hidden'
                                                    name='id'
                                                    value={id}
                                                />
                                                <DefaultBtn
                                                    width="100%"
                                                    name='Առաջ'
                                                    type='submit'
                                                    background='#143645'
                                                    color='#ffffff'
                                                    light={30}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}



const MapStateToProps = state => state;
const MainUserCars = connect(MapStateToProps)(UserCars)
export  default MainUserCars;

