import axios from 'axios';
import * as types from '../actions/actionTypes';


//---------------------------------------------------

export function configRequest() {
  return { type: types.CONFIG_REQUEST, config: {} };
}

export function configSuccess(config) {
  return { type: types.CONFIG_SUCCESS, config };
}

export function configError(error) {
  return { type: types.CONFIG_ERROR, error };
}

export function loadConfig() {

  return (dispatch) => {

    dispatch(configRequest());
    return axios.get('config.json').then((response) => {
        //console.log('configActions.loadConfig.response',response);
        dispatch(configSuccess(response.data));
      },
      (err) => {
        //console.log('configActions.loadConfig.err',err);
        dispatch(configError(err));
      });
  };
}
