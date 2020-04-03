import { combineReducers } from 'redux';
import alert from './rdc.alert';
import auth from './rdc.auth';
import profile from './rdc.profile';
import post from './rdc.post';

export default combineReducers({
    alert,
    auth,
    profile,
    post
});