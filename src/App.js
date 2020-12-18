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
import {GetRequst} from "./redux/GetRequest/action";
import {
    GetMyPartAccessoris,
    GetMyService,
    GetPartAccessoris,
    GetPartsAccessories,
    GetService
} from "./redux/Service/action";
import Admin from "./components/admin/Admin";


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
        this.props.dispatch(GetService())
        this.props.dispatch(GetMyService())
        this.props.dispatch(GetRequst())
        this.props.dispatch(GetPartAccessoris())
        this.props.dispatch(GetMyPartAccessoris())

    }



    render() {
      return (
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <div className="margin-top"></div>
                      <Home userStatus={this.props.user.status} scoreStatus={this.props.score.score.status}/>
                  </Route>
                  <Route  path='/administrator'>
                      <Admin/>
                  </Route>
                  <Route  path='/user'>
                      <div className="margin-top"></div>
                      <User/>
                  </Route>
                  <Route path='/score'>
                      <div className="margin-top"></div>
                      <Score/>
                  </Route>
                  <Route exact path='/spare-parts'>
                      <div className="margin-top"></div>
                      <SpaerParts/>
                  </Route>
                  <Route path='/announcement'>
                      <div className="margin-top"></div>
                      <Announcement />
                  </Route>
                  <Route path='/search/result'>
                      <div className="margin-top"></div>
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

