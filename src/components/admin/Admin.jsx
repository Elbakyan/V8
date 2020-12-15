import React, {Component} from "react";
import "./Admin.scss";
import {connect} from "react-redux";
import {GET, POST, TEST_POST} from "../config/Requsest";
import {Url} from "../config/Url";
import {Link, Route, Switch} from "react-router-dom";
import SITE_NAME from "../config/Url";
import AdminManu from "./AdminMenu";
import Slider from "./Slider";
class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            admin: false
        }
    }
    componentDidMount() {
        GET(Url.issetAdmin).then(res => {
            this.setState({
                admin:res.status
            })
        })
    }

    render() {

        if(this.state.admin){
            return (
                <div className='Admin'>
                    <header>
                        <div className="logo">
                            <Link to='/'>
                                <img src={SITE_NAME + '/Server/img/logo_1.svg'} alt=""/>
                            </Link>
                        </div>
                        <a href={Url.logoutAdmin} className='logout'>Ելք</a>
                    </header>
                    <div className="container">
                        <div className="Admin__content">
                            <AdminManu />

                            <Switch>
                                <Route path='/administrator/slider'>
                                    <Slider/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            )
        }else{
            return  (
                <div className='Admin__signin'>
                    <form method={'POST'} action={Url.admin}>
                        <input type="hidden" name='signin' />
                        <input type="text" name='user_name' placeholder='user name'/>
                        <input type="password" name='password' placeholder='password'/>
                        <button>Մուտք</button>
                    </form>
                </div>
            )
        }
    }
}

const MapStateToProps = state => state;
const MainAdmin = connect(MapStateToProps)(Admin)
export default MainAdmin;