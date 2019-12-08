import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/viandas-ya.css';
import './assets/demo/demo.css';

import Index from './views/Index';
import NucleoIcons from './views/NucleoIcons';
import LandingPage from './views/examples/LandingPage';
import ProfilePage from './views/examples/ProfilePage';
import RegisterPage from './views/examples/RegisterPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BuyMenuPage from './pages/BuyMenuPage';
import LoginPage from './pages/LoginPage';
import LoadBusinessPage from './pages/LoadBusinessPage';

import config from "./auth_config.json";
import history from "./utils/history";
import { Auth0Provider } from "./contexts/auth0-context";
import App from "./App";

// BROWSER=chrome npm start | choose browser
// mvn spring-boot:run

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  // <Auth0Provider
  //   domain={config.domain}
  //   client_id={config.clientId}
  //   redirect_uri={window.location.origin}
  //   onRedirectCallback={onRedirectCallback}
  // >
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/index" render={props => <HomePage {...props} />} />,
  //     <Route path="/search/:food" render={props => <SearchPage {...props} />} />,
  //     <Route path="/business/:id/menu" render={props => <BuyMenuPage {...props} />} />,
  //     <Route path="/indexExample" render={props => <Index {...props} />} />,
  //     <Route path="/login" render={props => <LoginPage {...props} />} />,
  //     <Route path="/business/load" render={props => <LoadBusinessPage {...props} />} />,
  //     <Route
  //       path="/nucleo-icons"
  //       render={props => <NucleoIcons {...props} />}
  //     />
  //     <Route
  //       path="/landing-page"
  //       render={props => <LandingPage {...props} />}
  //     />
  //     <Route
  //       path="/profile-page"
  //       render={props => <ProfilePage {...props} />}
  //     />
  //     <Route
  //       path="/register-page"
  //       render={props => <RegisterPage {...props} />}
  //     />
  //     <Redirect to="/index" />
  //   </Switch>
  // </BrowserRouter>
  // </Auth0Provider>,
  <Auth0Provider>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();