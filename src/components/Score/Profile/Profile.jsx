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
import AutoParts from "../../AutoParts/AutoParts";




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
                {/*{*/}
                {/*    window.location.pathname == '/score/account' || '/score/account/' ? <Redirect to={'/score/account/list/' +pathId}/>: ''*/}
                {/*}*/}
                <div className="container">
                    <div className="Profile__information row justify-between">
                        <nav className='Profile__nav'>
                            <ul >
                                <li>
                                    <Link to={'/score/account'}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faHome}/>
                                        </div>
                                        Իմ էջը
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/message'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faEnvelope}/>
                                        </div>
                                        Հաղորդագրություններ
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/cars'>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faCarBattery}/>
                                        </div>
                                        Պահեստամասեր
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/score/account/cars'>
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
                                {/*<Route path='/score/account/list'>*/}
                                {/*    <ScoreList />*/}
                                {/*</Route>*/}
                                {/*<Route exact path={'/score/account/' + pathId}>*/}
                                {/*    <ScoreList />*/}
                                {/*</Route>*/}
                                <Route exact path='/score/account/cars'>
                                    <AutoParts />
                                </Route>
                                <Route exact path='/score/account/message'>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam
                                        consectetur consequuntur dolores dolorum esse eveniet expedita facere ipsum
                                        minima modi, molestiae placeat quasi soluta voluptates. Beatae eligendi fuga
                                        ipsa?
                                    </div>
                                    <div>Accusantium aliquid dicta dolore enim exercitationem, expedita facere
                                        laudantium minus nemo placeat possimus repellat suscipit. Aliquid beatae dicta
                                        doloremque dolorum ea enim exercitationem ipsum molestiae, numquam omnis quae
                                        vitae voluptatem?
                                    </div>
                                    <div>Consequatur cumque eius esse est eum, fuga ipsa labore, laboriosam quisquam quo
                                        repudiandae temporibus, voluptate voluptates? Earum harum inventore ipsa, iste,
                                        laborum minima molestiae placeat quia quidem quod, totam veniam!
                                    </div>
                                    <div>Asperiores corporis delectus minima minus quod quos tempore vitae! Accusantium
                                        aliquam, aperiam culpa cumque deserunt dolores doloribus eveniet in incidunt
                                        iusto laudantium magni necessitatibus, odit officia optio quas quasi quo?
                                    </div>
                                    <div>Aliquam delectus doloremque dolorum ducimus enim facilis fugiat fugit, impedit
                                        incidunt ipsam iste itaque minima nihil nisi odio optio perspiciatis quam quod
                                        quos ratione sequi, sunt totam, veniam vero voluptates!
                                    </div>
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
