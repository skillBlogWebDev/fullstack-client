import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { alertReducer } from './alertReducer';

export const rootReducer = combineReducers({
    todoReducer,
    alertReducer
})