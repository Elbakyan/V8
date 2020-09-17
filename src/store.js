import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";


const Store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export  default Store;