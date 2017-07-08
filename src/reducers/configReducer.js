import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.config, action){
  switch(action.type) {

    case types.CONFIG_REQUEST:{
      let cfg = action.config;
      cfg.isFetching = true;

      return Object.assign({}, state, action.config);
    }

    case types.CONFIG_ERROR:{
      let err = action.err;
      if (err && err.response && err.response.data) {
        err = err.response.data;
      }
      return Object.assign({}, state, {
        isFetching: false,
        errors: err,
        config: {}
      });
    }
    case types.CONFIG_SUCCESS: {
      //console.log('userReducer.PROFILE_SUCCESS action', action);
      return Object.assign({}, state, {
        isFetching: false,
        config: action.config
      });
    }
    default:
      return state;
  }
}
