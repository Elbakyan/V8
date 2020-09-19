import React from 'react';
import {Router, Route, Switch,} from "react-router";
// import './style/style.scss'
import Home from "./components/Home/Home";
import User from "./components/User/User";
import {connect} from "react-redux";
import {UserExist} from "./redux/user/action";
<<<<<<< HEAD
import {GetSicle} from "./redux/location/action";
import {GetMark} from "./redux/auto/action";
=======
import Score from "./components/Score/Score";


>>>>>>> 98e2c9383541582dae872216c989f0e75e68924f


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            path : '/'
        }
    }

    componentDidMount() {
        this.props.dispatch(UserExist())
        this.props.dispatch(GetSicle())
        this.props.dispatch(GetMark())
    }



    render() {
<<<<<<< HEAD
=======

>>>>>>> 98e2c9383541582dae872216c989f0e75e68924f
      return (
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
                  <Route  path='/user'>
                      <User/>
                  </Route>
                  <Route  path='/score'>
                      <Score/>
                  </Route>

              </Switch>

          </div>
      );
  }
}
const MapStateToProps = state => state;
const MainApp = connect(MapStateToProps)(App)
export default MainApp;
