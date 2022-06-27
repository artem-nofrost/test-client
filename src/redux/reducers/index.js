import { combineReducers } from 'redux';
import { userReducer } from './users';
import { socketReducer } from './socket';
import { peopleReducer } from './people';

export default combineReducers({
    user: userReducer,
    socket: socketReducer,
    people: peopleReducer,
});
