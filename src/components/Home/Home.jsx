import React from 'react';
import Header from './Header'
import {Link, Redirect} from "react-router-dom";
import './Home.scss'
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";
import DecorTitle from "../Decor/DecorTitle";
import {GET} from "../config/Requsest";
import {Url} from "../config/Url";
import SellCar from "../announcement/SellCar";
import {GetSellByID} from "../../redux/sellauto/action";
import {GetId, GetMessage} from "../../redux/message/action";
import Loading from "../Loading";
import Slider from "../Slider/Slider";
import {GetServiceList} from "../../redux/Service/action";

class Home extends React.Component {
    constructor(post) {
        super(post);
        this.requset = '';
        this.state = {
            auto: [],
            product: [],
            score: [],
            img: []
        }
    }

    componentDidMount() {
        this.requset = true
        if(this.requset){
            GET(Url.getallauto).then(res => {
                if (res.status && this.requset){
                    this.setState({
                        auto: res.data
                    })
                }
            })

            GET(Url.getallproduct).then(res => {
                if (res.status && this.requset){
                    this.setState({
                        product: res.data.product,
                        score: res.data.score
                    })
                }
            })

        }
        if(this.props.user.status){
            this.props.dispatch(GetMessage(this.props.user.id))
        }
        if(this.props.score.score.status){
            this.props.dispatch(GetMessage(this.props.score.score.id))
        }
        GET(Url.getSliderImgAdmin).then(res=>{
            if (res.status){
                let img = []
                res.img.map(res => {
                    img.push(res.img)
                })
                this.setState({
                    img: img
                })
            }
        })
        this.props.dispatch(GetServiceList())

    }
    componentWillUnmount() {
        this.requset = false
    }

    GetAuto = (e) => {
        this.props.dispatch(GetSellByID(e.target.dataset.id))
        this.props.dispatch(GetId(e.target.dataset.id))

    }

    render() {
        console.log(this.props.service.serviceList)
        return (
            <div className="Home">
                <Header/>
                <Menu/>
                <Slider img={this.state.img}/>

                {
                    this.state.auto?
                        <div>
                            <DecorTitle title='Ավտոմեքենաներ' />
                            <div className="container">
                                <div className="content__list">
                                    {
                                        this.state.auto.map((res,i) => {
                                            return (
                                                <div key={i} className='result_auto'>
                                                    <Link to={'/announcement/' + res.id} data-id={res.id} onClick={this.GetAuto}>
                                                        <SellCar
                                                            dataId={res.id}
                                                            dataUser={res.user_id}
                                                            name={res.model}
                                                            price={res.price}
                                                            year={res.year}
                                                            data={res.data}
                                                            sircle={res.sircle}
                                                            city={res.city}
                                                            dataImg={res.img}
                                                        />
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>:''
                }
                {
                    this.state.product ?
                        <div>
                            <DecorTitle title='Պահետամասեր' />
                            <div className="container ">
                                <div className="content__list">
                                    {
                                        this.state.product.map((res, i) => {
                                            console.log(res)
                                            let score = this.state.score[i];
                                            let img = JSON.stringify([res.img])
                                            return (
                                                <div className='result_auto' key={i}>
                                                    <SellCar
                                                        dataId={res.id}
                                                        dataUser={res.store_id}
                                                        name={res.code}
                                                        price={res.price}
                                                        sircle={score.sircle}
                                                        city={score.city}
                                                        data={res.data}
                                                        dataImg={img}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                        :''
                }



                <DecorTitle title='Ծառայություններ' />
                <div className="container services">

                    <div className="content__list">
                        {
                            this.state.auto.length?
                            this.state.auto.map(res => {
                                return (
                                    <div className='result_auto' key={res.id}>
                                        <SellCar
                                            dataId={res.id}
                                            dataUser={res.user_id}
                                            name={res.model}
                                            price={res.price}
                                            year={res.year}
                                            data={res.data}
                                            sircle={res.sircle}
                                            city={res.city}
                                            dataImg={res.img}
                                        />
                                    </div>
                                )
                            }):<Loading />
                        }
                    </div>
                </div>
                <Footer/>
                {
                    this.props.score.score.status ? <Redirect to='/score/account'/> : ''
                }
                {
                    this.props.user.status ? <Redirect to='/user/account'/> : ''
                }
            </div>
        );
    }
}



const MapStateToProps = state => state;
const MainHome = connect(MapStateToProps)(Home)
export default MainHome;
