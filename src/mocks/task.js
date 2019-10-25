const uuidv4 = require('uuid/v4');

let tasks = [
  {
    id: uuidv4(),
    name: 'Small Task',
    level: 0 //0 small, 1 medium , 2 high
  },
  {
    id: uuidv4(),
    name: 'Medium Task',
    level: 1 //0 small, 1 medium , 2 high
  },
  {
    id: uuidv4(),
    name: 'High Level Task',
    level: 2 //0 small, 1 medium , 2 high
  },

];
export default tasks;