import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faHome,
    faCarBattery,
    faQuestionCircle,
    faHeart,
    faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
import {Link,Route, Switch} from "react-router-dom";
import ScoreList from "../ScoreList/ScoreList";
import {GetScoreList} from "../../../redux/score/action";
import AutoParts from "../../AutoParts/AutoParts";
import Message from "../message/Message";
import GeFavorite from "../../favorite/GeFavorite";
import ProfilSetingsScore from "./ProfilSetingsScore";
import Soon from "../../Soon/Soon";
import GetRequest from "../../GetRequest/GetRequest";
import {GetRequst} from "../../../redux/GetRequest/action";
import {Url} from "../../config/Url";
import {GET, POST} from "../../config/Requsest";
import ScorePageSetings from "../ScorePage/ScorePageSetings";
import AutoService from "../../AutoService/AutoService";




class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    componentDidMount() {
        this.props.dispatch(GetScoreList())
        let data= new FormData();
        data.append("id", this.props.score.score.id)
        POST(Url.ubdatestatus,data)
    }



    render() {

        let pathId = '';
        if (this.props.score.scoreList != false){
             pathId = this.props.score.scoreList[0].id;
        }
        return (
            <section className="Profile col">
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <Link to={'/score/account/list/'+pathId}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHome}/>
                                        </div>
                                        Իմ էջը
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/score/account/message/' + this.props.message.messageId}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                        Հաղորդագրություններ
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/score/account/request'}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelopeOpenText}/>
                                        </div>
                                        Հարցում
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/favorite'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHeart}/>
                                        </div>
                                        <span>Նախնտրելի</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/cars/spare_parts/with_mark'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faCarBattery}/>
                                        </div>
                                        Պահեստամասեր
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/auto_service'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faQuestionCircle}/>
                                        </div>
                                        Ծառայություներ
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="Profile__content">
                            <Switch>
                                <Route  path='/score/account/cars'>
                                    <AutoParts />
                                </Route>
                                <Route path={'/score/account/message/' + this.props.message.messageId}>
                                    <Message/>
                                </Route>
                                <Route path={'/score/account/request'}>
                                    <GetRequest/>
                                </Route>
                                <Route path='/score/account/favorite'>
                                    <GeFavorite />
                                </Route>
                                <Route path='/score/account/setings'>
                                    <ProfilSetingsScore />
                                </Route>
                                <Route path='/score/account/auto_service'>
                                    <AutoService />
                                </Route>
                                <Route path='/soon'>
                                    <Soon />
                                </Route>
                                <ScoreList />
                            </Switch>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

const MapStateToProps = state => state;
const MainProfile = connect(MapStateToProps)(Profile)

export default MainProfile;
