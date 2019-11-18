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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <HomePage {...props} />} />,
      <Route path="/search/:food" render={props => <SearchPage {...props} />} />,
      <Route path="/business/:id/menu" render={props => <BuyMenuPage {...props} />} />,
      <Route path="/indexExample" render={props => <Index {...props} />} />,
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();