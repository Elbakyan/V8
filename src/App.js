import React from 'react';
import {Router, Route, Switch,} from "react-router";
import './style/style.scss'
import Home from "./components/Home/Home";
import User from "./components/User/User";
import {connect} from "react-redux";
import {UserExist} from "./redux/user/action";
import {GetSicle} from "./redux/location/action";
import {GetMark} from "./redux/auto/action";
import Score from "./components/Score/Score";
import SpaerParts from "./components/spare/SpareParts";

import Loading from "./components/Loading";
import {Redirect} from "react-router-dom";
import {ScoreExist} from "./redux/score/action";





class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            path : '/'
        }
    }

    componentDidMount() {
        this.props.dispatch(UserExist())
        // this.props.dispatch(ScoreExist())
        this.props.dispatch(GetSicle())
        this.props.dispatch(GetMark())

    }



    render() {
        console.log(this.props)

      return (
          <div className="App">

              <Switch>

                  <Route exact path='/'>
                      <Home/>
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
              </Switch>
              {this.props.user.status  == undefined? <Loading/> : this.props.user.status? <Redirect to='/user/account'/> : <Redirect to='/'/>}
              {this.props.score.status  == undefined? <Loading/> : this.props.score.status? <Redirect to='/score/account'/> : <Redirect to='/'/>}
          </div>
      );
  }
}
const MapStateToProps = state => state;
const MainApp = connect(MapStateToProps)(App)
export default MainApp;
