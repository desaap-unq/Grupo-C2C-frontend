import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
         Route, Redirect, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/viandas-ya.css';
import './assets/demo/demo.css';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
// import BuyMenuPage from './pages/BuyMenuPage';
import BuyMenuPage2 from './pages/BuyMenuPage2';
import LoginPage from './pages/LoginPage';
import LoadBusinessPage from './pages/LoadBusinessPage';
import LoadMenuPage from './pages/LoadMenuPage';
import HistoryOrderPage from './pages/HistoryOrderPage';

import { Auth0Provider } from "./contexts/auth0-context";
import {IntlProvider} from "react-intl";

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};

// BROWSER=chrome npm start | choose browser
// mvn spring-boot:run

const rootElement = document.getElementById("root");

let language ;
const onChangeLanguage = (i) => {language = i; rende()}; 

const rende = ()=>{ ReactDOM.render(
  
  <IntlProvider locale={language} messages={messages[language]}>
        
    
  <Auth0Provider>

    <Router>
      <Switch>
        <Route path="/index" render={props => <HomePage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/search/:food" render={props => <SearchPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/business/:id/menu" render={props => <BuyMenuPage2 onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/login" render={props => <LoginPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/client/:id/history" render={props => <HistoryOrderPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/loadBusiness" render={props => <LoadBusinessPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/business/:id" render={props => <LoadMenuPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Redirect to="/index" />
      </Switch>
    </Router>

  </Auth0Provider> </IntlProvider>, rootElement)
};

rende();
serviceWorker.unregister();