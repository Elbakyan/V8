import React, {Component} from "react";
import {NavLink,Route,Switch} from "react-router-dom";
import FormAutoService from "./FormAutoService";
import ListAutoService from "./ListAutoService";
import './AutoService.scss'

class AutoService extends Component {
    render() {
        return(
            <div className='auto_service_add'>
                <nav className='auto_service_add__links'>
                    <ul>
                        <li>
                            <NavLink className="auto_service_link" activeClassName="auto_service_link_active" to="/score/account/auto_service/form_auto_servic">
                                Ավելացնել
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="auto_service_link" activeClassName="auto_service_link_active" to="/score/account/auto_service/list_auto_servic">
                                Ցուցակ
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/score/account/auto_service/form_auto_servic'>
                        <FormAutoService/>
                    </Route>
                    <Route path='/score/account/auto_service/list_auto_servic'>
                        <ListAutoService/>
                    </Route>
                </Switch>

            </div>
        )
    }
}

export default AutoService;
