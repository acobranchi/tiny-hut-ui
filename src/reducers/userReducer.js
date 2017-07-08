import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action){
  switch(action.type) {
    case types.LOGIN_ERROR: {
      let err = action.err;
      if (action.err.response && action.err.response.data) {
        err = action.err.response.data;
      }
      return Object.assign({}, state, {
        ...state,
        errors: err,
        isFetching: false,
        isAuthenticated: false
      });
    }
    case types.LOGIN_USER: {
      //console.log('userReducer.LOGIN_USER',action.login);
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        login: action.login
      });
    }
    case types.LOGIN_SUCCESS: {
      //console.log('userReducer.LOGIN_SUCCESS action', action);
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errors: {},
        login: {}
      });
    }
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        profile: {}
      });

    case types.PROFILE_REQUEST:{
      //console.log('userReducer.PROFILE_REQUEST action', action);
      return Object.assign({}, state, {
        ...state,
        isFetching: true
      });
    }

    case types.PROFILE_ERROR:{
      let err = action.err;
      if (err && err.response && err.response.data) {
        err = err.response.data;
      }
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        errors: err
      });
    }
    case types.PROFILE_SUCCESS: {
      //console.log('userReducer.PROFILE_SUCCESS action', action);
      return Object.assign({}, state, {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errors: {},
        login: {},
        profile: action.profile
      });
    }
    case types.NCHANNEL_PROFILE_SET: {
      return Object.assign({}, state, {...state.user,  profile: action.profile});
    }

    default:
      return state;
  }
}
