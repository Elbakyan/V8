import React from 'react';
import Header from './Header'
import {Link, Redirect} from "react-router-dom";
import './Home.scss'
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";
import DecorTitle from "../Decor/DecorTitle";
import {GET} from "../config/Requsest";
import {Url} from "../config/Url";
import SellCar from "../announcement/SellCar";
import {GetSellByID} from "../../redux/sellauto/action";
import {GetId, GetMessage} from "../../redux/message/action";

class Home extends React.Component {
    constructor(post) {
        super(post);
        this.state = {
            auto: [],
            product: [],
            score: [],
        }
    }
    componentDidMount() {
        GET(Url.getallauto).then(res => {
            if (res.status){
                this.setState({
                    auto: res.data
                })
            }
        })
        GET(Url.getallproduct).then(res => {
            console.log(res)
            if (res.status){
                this.setState({
                    product: res.data.product,
                    score: res.data.score
                })
            }
        })


            if(this.props.user.status){
                this.props.dispatch(GetMessage(this.props.user.id))
            }
            // if(this.props.score.score.status){
            //     this.props.dispatch(GetMessage(this.props.score.score.id))
            // }

    }
    GetAuto = (e) => {
        this.props.dispatch(GetSellByID(e.target.dataset.id))
        this.props.dispatch(GetId(e.target.dataset.id))
    }

    render() {
        return (
            <div className="Home">
                <Header/>
                <Menu/>
                <DecorTitle title='Ավտոմեքենաներ' />
                <div className="container">
                    <div className="content__list">
                                {
                                    this.state.auto.map(res => {
                                        return (
                                            <div className='result_auto'>
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
                <DecorTitle title='Պահետամասեր' />
                <div className="container ">
                    <div className="content__list">
                        {
                            this.state.product.map((res, i) => {
                                let score = this.state.score[i];
                                return (
                                    <div className='result_auto'>
                                        <SellCar
                                            dataId={res.id}
                                            dataUser={res.store_id}
                                            name={res.code}
                                            price={res.price}
                                            sircle={score.sircle}
                                            city={score.city}
                                            data={res.data}
                                            // dataImg={res.img}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
                <DecorTitle title='Ծառայություններ' />
                <div className="container services">

                    <div className="content__list">
                        {
                            this.state.auto.map(res => {
                                return (
                                    <div className='result_auto'>
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
                            })
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
