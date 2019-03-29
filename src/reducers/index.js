import {combineReducers} from 'redux';

import simpleReducer from './simple';
import {isFetching, fetch, fetchedError} from "../actions/app";

export default combineReducers({
    simpleReducer,
    isFetching,
    fetch,
    fetchedError
})