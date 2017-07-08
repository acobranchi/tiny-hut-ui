import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registrationReducer(state = initialState.registration, action){
  switch(action.type){
    case types.REGISTER_NEW_USER:
      //console.log('reducer.REGISTER_NEW_USER');
      return Object.assign({}, state, action.registration);
    case types.REGISTER_NEW_USER_SUCCESS:
      //console.log('reducer.REGISTER_NEW_USER_SUCCESS');
      action.registration.errors = {};
      action.registration.succeeded = true;
      return Object.assign({}, state, action.registration);
    case types.REGISTER_NEW_USER_ERROR: {
      //console.log('reducer.REGISTER_NEW_USER_ERROR');
      let err = action.err;
      if(action.err.response && action.err.response.data) {
        err = action.err.response.data;
      }
      return Object.assign({}, state, {errors: err});
    }
    case types.REGISTER_NEW_USER_RESET: {
      //console.log(action);
      //console.log(state);
      action.registration = initialState.registration;
      action.registration.succeeded = false;
      //console.log(action);
      return Object.assign({}, state, action.registration);
    }
    default:
      return state;
  }
}
