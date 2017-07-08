import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';

//
// function getConfig() {
//   let request = new XMLHttpRequest();
//   request.open('GET', '/account/config.json', false);  // `false` makes the request synchronous
//   request.send(null);
//
//   if (request.status === 200) {
//     return JSON.parse(request.responseText);
//   }
//   else {
//     return null;
//   }
// }


function getRoutes() {

  // const config = getConfig(); // doing this synchronously because everything else depends on it.
  // setting this globally until we can figure out a better way to pass config around
  // window.config = config;
  //const auth = new AuthService(config.ACCOUNT_SETTINGS_AUTH_CLIENT_ID, config.ACCOUNT_SETTINGS_AUTH_DOMAIN, config.ACCOUNT_SETTINGS_AUTH_REDIRECT, setnChannelProfile);
  return (
    <Route component={App}  >
      <Route path="/" component={HomePage}/>
    </Route>);
}

export default {getRoutes};
