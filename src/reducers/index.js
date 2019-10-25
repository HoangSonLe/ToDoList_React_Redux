import {combineReducers} from 'redux'
import tasks from './tasks';
import control from './control';
import itemEditing from './itemEditing';
const myReducer = combineReducers({
    tasks,
    control,
    itemEditing,

})
export default myReducer;