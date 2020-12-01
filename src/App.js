import React, {Component} from 'react';
import { Route, Switch,} from "react-router";
import './style/style.scss'
import Home from "./components/Home/Home";
import User from "./components/User/User";
import {connect} from "react-redux";
import {UserExist} from "./redux/user/action";
import {GetSicle} from "./redux/location/action";
import {GetMark, GetTruck, GetTruckModels} from "./redux/auto/action";
import Score from "./components/Score/Score";
import SpaerParts from "./components/spare/SpareParts";
import {ScoreExist} from "./redux/score/action";
import Announcement from "./components/announcement/Announcement";
import Loading from "./components/Loading";
import Result from "./components/Search/Result";
import Soon from "./components/Soon/Soon";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import {GET, TEST_GET, TEST_POST} from "./components/config/Requsest";
import {Url} from "./components/config/Url";
import {GetRequst} from "./redux/GetRequest/action";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '/',
            incriment: 0
        }
        this.VinRef = React.createRef()
    }

    componentDidMount() {
        this.props.dispatch(UserExist())
        this.props.dispatch(ScoreExist())
        this.props.dispatch(GetSicle())
        this.props.dispatch(GetMark())
        this.props.dispatch(GetTruck())
        this.props.dispatch(GetTruckModels())
        this.props.dispatch(GetRequst())

        // GET(Url.getrequest).then(res => {
        //     let arr = [];
        //     for (const key in res) {
        //         arr.push(res[key]);
        //     }
        //     console.log(arr)
        // })

    }

    componentWillUnmount() {
        this.props.dispatch()
    }


    render() {
        console.log(this.props.request)
      return (
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Home userStatus={this.props.user.status} scoreStatus={this.props.score.score.status}/>
                  </Route>
                  <Route  path='/user'>
                      <User/>
                  </Route>
                  <Route path='/score'>
                      <Score/>
                  </Route>
                  <Route exact path='/spare-parts'>
                      <SpaerParts/>
                  </Route>
                  <Route path='/announcement'>
                      <Announcement />
                  </Route>
                  <Route path='/search/result'>
                      <Result/>
                  </Route>
                  <Route path='/soon'>
                      <Soon/>
                  </Route>
                  <Route>
                      <PageNotFound/>
                  </Route>
              </Switch>
              {this.props.user.status  === undefined? <div className="main__load">  <Loading type="spinningBubbles" size={500} color="#101423"/><Loading /> </div> : ''}
              {this.props.score.score.status  === undefined? <div className="main__load">  <Loading type="spinningBubbles" size={500} color="#101423"/><Loading /> </div> : ''}

          </div>
      )
    }
}

const MapStateToProps = state => state;
const MainApp = connect(MapStateToProps)(App)
export default MainApp;
