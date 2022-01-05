import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import ChannelsReducer from "./channels-reducer.js";
import FriendsReducer from "./friends-reducer.js";

let reducers = combineReducers({
    channels: ChannelsReducer,
    friends: FriendsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;