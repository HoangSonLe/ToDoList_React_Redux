import * as types from './../constants/ActionTypes';

var initialState = {
    id: '',
    level: 0,
    name: '',
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action;
        case types.CLEAR_ITEM:
            return action;
        default:
            return state;
    }

}
export default myReducer;