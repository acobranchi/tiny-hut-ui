import * as types from '../actions/actionTypes';
import { push } from 'react-router-redux';
import * as accountSettingsApi from '../api/accountSettingsApi';

export function registerNewUserSuccess(registration) {
  //console.log('registerActions.registerNewUserSuccess');
  return { type: types.REGISTER_NEW_USER_SUCCESS, registration };
}

export function registerNewUserError(err) {
  //console.log('registerActions.registerNewUserError');
  return { type: types.REGISTER_NEW_USER_ERROR, err };
}

export function registerNewUserReset(registration) {
  return { type: types.REGISTER_NEW_USER_RESET, registration};
}

export function registerNewUser(registration) {
  //console.log('registerActions.registerNewUser');
  return (dispatch) => {
    return accountSettingsApi.registerNewUser(registration).then((response) => {
      dispatch(registerNewUserSuccess(response.data));
    },
    (err) => dispatch(registerNewUserError(err)));
  };
}

//---------------------------------------------------

export function loginSuccess(user) {
  //console.log('registerActions.registerNewUserSuccess');
  return { type: types.LOGIN_SUCCESS, user };
}

export function loginError(err) {
  //console.log('registerActions.registerNewUserError', err);
  return { type: types.LOGIN_ERROR, err };
}

export function loginRequest(login) {
  return { type: types.LOGIN_USER, login };
}

export function loginUser(user) {
  //console.log('userActions.loginUser', user);
  return (dispatch) => {
    dispatch(loginRequest(user));
    return accountSettingsApi.loginUser(user.login).then((response) => {
        // eventually it will redirect to url in query string
        // for now, redirect to home
        dispatch(push(''));
        // dispatch loginSuccess to update state
        dispatch(loginSuccess(response.data));
      },
      (err) => dispatch(loginError(err)));
  };
}

//---------------------------------------------------

export function profileRequest() {
  return { type: types.PROFILE_REQUEST, profile: {} };
}

export function profileSuccess(profile) {
  return { type: types.PROFILE_SUCCESS, profile };
}

export function profileError(error) {
  return { type: types.PROFILE_ERROR, error };
}

export function setnChannelProfile(profile) {
  return { type: types.NCHANNEL_PROFILE_SET, profile};
}

export function loadNchannelProfile(userInfo) {

  return (dispatch) => {
    //console.log('userActions.loadNchannelProfile.userInfo', userInfo);

    // dispatch(profileRequest());
    return accountSettingsApi.loadProfile(userInfo).then((response) => {
        //console.log('userActions.loadNchannelProfile.response',response);
        dispatch(profileSuccess(response.data));
      },
      (err) => {
        //console.log('userActions.loadNchannelProfile.err',err);
        dispatch(profileError(err));
      });
  };
}
