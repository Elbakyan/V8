import React from 'react';
import {Router, Route, Switch,} from "react-router";
// import './style/style.scss'
import Home from "./components/Home/Home";
import User from "./components/User/User";
import {connect} from "react-redux";
<<<<<<< HEAD
import {ext} from "./redux/action";
=======
import {UserExist} from "./redux/user/action";
>>>>>>> dd28090d4f2940afd98a785d596131531f7e1810

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            path : '/'
        }
    }

    componentDidMount() {
<<<<<<< HEAD
        this.props.dispatch(ext())
    }

    render() {

        let a = '1'
      console.log(this.props)
=======
        this.props.dispatch(UserExist())

    }

    render() {
        console.log(this.props)
>>>>>>> dd28090d4f2940afd98a785d596131531f7e1810
      return (
          <div className="App">
              <Switch>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
                  <Route  path='/user'>
                      <User/>
                  </Route>
                  {/*<Route  path='/score'>*/}
                  {/*    /!*<Score/>*!/*/}
                  {/*</Route>*/}

              </Switch>

          </div>
      );
  }
}
const MapStateToProps = state => state;
const MainApp = connect(MapStateToProps)(App)
export default MainApp;
