import React from 'react';
import {Router, Route, Switch,} from "react-router";
import './style/style.scss'
import Home from "./components/Home/Home";
import User from "./components/User/User";
import {connect} from "react-redux";
import {UserExist} from "./redux/user/action";
import {GetSicle} from "./redux/location/action";
import {GetAuto, GetMark, GetModel} from "./redux/auto/action";
import Score from "./components/Score/Score";
import SpaerParts from "./components/spare/SpareParts";
import {Redirect} from "react-router-dom";
import {ScoreExist} from "./redux/score/action";
import Announcement from "./components/announcement/Announcement";
import Loading from "./components/Loading";
import {GetMessage} from "./redux/message/action";






class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: '/',
            incriment: 0

        }
    }


    componentDidMount() {

        this.props.dispatch(UserExist())
        this.props.dispatch(ScoreExist())
        this.props.dispatch(GetSicle())
        this.props.dispatch(GetMark())
        this.props.dispatch(GetMessage())
        this.GetMes()

    }

    GetMes = () => {
       let getMessage_users = document.querySelector('.getMessage_users');
       if (getMessage_users != null){
           getMessage_users.scrollTop = 100000000000000;
       }
       const Timer = () => {
            if (this.state.incriment < 10){
                this.setState({
                    incriment: ++this.state.incriment
                })
            }else{
                clearTimeout(Timer)
                this.setState({
                    incriment: 0
                })
            }
           this.props.dispatch(GetMessage())
           setTimeout(Timer,1000)
        }
        setTimeout(Timer,4)
    }

    render() {
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
                  <Route path='/announcement'>
                      <Announcement/>
                  </Route>
                  {this.props.user.status? <Redirect to='/user/account'/> : <Redirect to='/'/>}
                  {this.props.score.status? <Redirect to='/score/account'/> : <Redirect to='/'/>}
              </Switch>
              {this.props.user.status  == undefined? <div className="main__load"> <Loading /> </div>:''}
              {this.props.score.status  == undefined? <div className="main__load"> <Loading /> </div> : ''}


          </div>
      )
    }
}

const MapStateToProps = state => state;
const MainApp = connect(MapStateToProps)(App)
export default MainApp;
