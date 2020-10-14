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
import { SendMessage} from "./redux/message/action";




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '/'

        }
    }


    componentDidMount() {

        this.props.dispatch(UserExist())
        this.props.dispatch(ScoreExist())
        this.props.dispatch(GetSicle())
        this.props.dispatch(GetMark())
        // this.props.dispatch(GetMessage())
        // this.Getmessage()
    }
    Message = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        this.props.dispatch(SendMessage(data))
    }

    // Getmessage  = (bool) =>{
    //     let time = 1
    //         const interval = setInterval(() => {
    //
    //             this.props.dispatch(GetMessage())
    //             if (time >= 8){
    //                 clearInterval(interval)
    //                 this.Getmessage()
    //             }
    //             time++;
    //         },time * 5000)
    //
    // }

    render() {

      return (
          <div className="App">
              <form onSubmit={this.Message}>
                  <textarea name="message"cols="30" rows="5"></textarea>
                  <input type="hidden" name='send_id' value='25'/>
                  <input type="hidden" name='get_id' value='28'/>
                  <input type="submit" value='send'/>
              </form>
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
