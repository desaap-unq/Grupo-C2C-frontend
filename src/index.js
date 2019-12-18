import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
         Route, Redirect, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/viandas-ya.css';
import './assets/demo/demo.css';

import Index from './views/Index';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
// import BuyMenuPage from './pages/BuyMenuPage';
import BuyMenuPage2 from './pages/BuyMenuPage2';
import LoginPage from './pages/LoginPage';
import LoadBusinessPage from './pages/LoadBusinessPage';
import LoadMenuPage from './pages/LoadMenuPage';

import { Auth0Provider } from "./contexts/auth0-context";
import HistoryOrderPage from './pages/HistoryOrderPage';

// BROWSER=chrome npm start | choose browser
// mvn spring-boot:run

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider>

    <Router>
      <Switch>
        <Route path="/index" render={props => <HomePage {...props} />} />,
        <Route path="/search/:food" render={props => <SearchPage {...props} />} />,
        <Route path="/business/:id/menu" render={props => <BuyMenuPage2 {...props} />} />,
        <Route path="/indexExample" render={props => <Index {...props} />} />,
        <Route path="/login" render={props => <LoginPage {...props} />} />,
        <Route path="/loadBusiness" render={props => <LoadBusinessPage {...props} />} />,
        <Route path="/business/:id" render={props => <LoadMenuPage {...props} />} />,
        <Route path="/client/:id/history" render={props => <HistoryOrderPage {...props} />} />,
        <Redirect to="/index" />
      </Switch>
    </Router>

  </Auth0Provider>, rootElement);

serviceWorker.unregister();