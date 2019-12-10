import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
         Route, Redirect, Switch } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/viandas-ya.css';
import './assets/demo/demo.css';

import Index from './views/Index';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BuyMenuPage from './pages/BuyMenuPage';
import LoginPage from './pages/LoginPage';
import LoadBusinessPage from './pages/LoadBusinessPage';
import LoadMenuPage from './pages/LoadMenuPage';
import App from './App';

import { Auth0Provider } from "./contexts/auth0-context";

// BROWSER=chrome npm start | choose browser
// mvn spring-boot:run

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider>

    <Router>
      <Switch>
        <Route path="/index" render={props => <HomePage {...props} />} />,
        <Route path="/search/:food" render={props => <SearchPage {...props} />} />,
        <Route path="/business/:id/menu" render={props => <BuyMenuPage {...props} />} />,
        <Route path="/indexExample" render={props => <Index {...props} />} />,
        <Route path="/login" render={props => <LoginPage {...props} />} />,
        <Route path="/loadBusiness" render={props => <LoadBusinessPage {...props} />} />,
        <Route path="/business/:id" render={props => <LoadMenuPage {...props} />} />,
        <Route path="/gmaps" render={props => <App {...props} />} />,
        <Redirect to="/index" />
      </Switch>
    </Router>

  </Auth0Provider>, rootElement);
