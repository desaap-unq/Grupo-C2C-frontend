import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
         Route, Redirect, Switch } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/viandas-ya.css';
import './assets/demo/demo.css';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BuyMenuPage from './pages/BuyMenuPage';
import LoginPage from './pages/LoginPage';
import LoadBusinessPage from './pages/LoadBusinessPage';
import LoadMenuPage from './pages/LoadMenuPage';

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

let language1 ;
const onChangeLanguage = (i) => {console.log(i) ; language1 = i;rende()}; 

const rende = ()=>{ ReactDOM.render(
  
  <IntlProvider locale={language1} messages={messages[language1]}>
        
    
  <Auth0Provider>

    <Router>
      <Switch>
        <Route path="/index" render={props => <HomePage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/search/:food" render={props => <SearchPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/business/:id/menu" render={props => <BuyMenuPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/login" render={props => <LoginPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/loadBusiness" render={props => <LoadBusinessPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Route path="/business/:id" render={props => <LoadMenuPage onChangeLanguage={onChangeLanguage} {...props} />} />,
        <Redirect to="/index" />
      </Switch>
    </Router>

  </Auth0Provider> </IntlProvider>, rootElement)
};

rende();