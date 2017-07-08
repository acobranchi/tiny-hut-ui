import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import user from './userReducer';
import config from './configReducer';


const rootReducer = combineReducers({
  config,
  user,
  form: reduxFormReducer,
  routing: routerReducer
});

export default rootReducer;
