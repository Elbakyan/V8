import React from 'react';
import {connect} from "react-redux";
import './Profile.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faEnvelope, faHome,faCarBattery,faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import PersionalDataScore from "./PersionalDataScore";
import ProfilSetingsScore from "./ProfilSetingsScore";
import ScoreList from "../ScoreList/ScoreList";
import ScorePage from "../ScorePage/ScorePage";
import {GetScoreList} from "../../../redux/score/action";





class Profile extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(GetScoreList())
    }
    render() {
        let pathId = '';
        if (this.props.score.scoreList != false){
             pathId = this.props.score.scoreList[0].id;

        }

        return (
            <section className="Profile col">
                {
                    window.location.pathname == '/score/account' || '/score/account/' ? <Redirect to={'/score/account/list/' +pathId}/>: ''
                }
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHome}/>
                                    </div>
                                    <Link to={'/score/account/list'}>Իմ էջը</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                    <Link to='/score/account/message'>Հաղորդագրություններ</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faCarBattery}/>
                                    </div>
                                    <Link to='/score/account/cars'>Պահեստամասեր</Link>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faQuestionCircle}/>
                                    </div>
                                    <Link to='/score/account/cars'>Ծառայություներ</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="Profile__content">
                            <Switch>
                                <Route path='/score/account/list'>
                                    <ScoreList />
                                </Route>
                                <Route exact path={'/score/account/' + pathId}>
                                    <ScoreList />
                                </Route>
                                <Route exact path='/score/account/setings'>
                                    <ProfilSetingsScore />
                                </Route>
                                <Route exact path='/score/account/message'>
                                   Message
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti
                                        dignissimos, dolore dolorem dolorum esse itaque laborum laudantium magni maxime
                                        molestiae, molestias necessitatibus porro quis recusandae repellendus saepe sed
                                        soluta?</div>
                                    <div>Ab architecto consequatur consequuntur dolorem error eum harum illo, in ipsum
                                        molestias neque non odit possimus provident quae quas quibusdam quo quos
                                        reiciendis repellat rerum sed tenetur ut vitae voluptas?
                                    </div>
                                    <div>Distinctio ducimus eaque earum eius est eum explicabo hic id impedit inventore
                                        ipsam magni maxime necessitatibus nihil obcaecati perferendis perspiciatis qui,
                                        quidem reiciendis rem repellat, rerum, saepe similique sunt ullam.
                                    </div>
                                </Route>

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
