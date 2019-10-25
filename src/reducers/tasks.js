import * as types from './../constants/ActionTypes';
import { remove, reject } from 'lodash';

const uuidv4 = require('uuid/v4');

var data = JSON.parse(localStorage.getItem('task'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            let id = null;
            if (action.task.id !== '') {
                state = reject(state, { id: action.task.id });
                id = state.id;
            }
            else {
                id = uuidv4();
            }
            state.push({
                id: id,
                name: action.task.name,
                level: parseInt(action.task.level)// or +item.level
            });
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            state = remove(state, (item) => (item.id === action.id ? false : true));
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }

}
export default myReducer;