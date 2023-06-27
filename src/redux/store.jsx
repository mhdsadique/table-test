import { datareducer } from "./header/reducer";
import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import thunk from "redux-thunk"
import { detailereducer } from "./detailes/reducer";
const rootreduser=combineReducers({
    header:datareducer,
    detailes:detailereducer
})

export const  store=legacy_createStore(rootreduser,compose(applyMiddleware(thunk)))