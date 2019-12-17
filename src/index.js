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
import {IntlProvider} from "react-intl";

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code



// import { addLocaleData } from "react-intl";
// import locale_en from 'react-intl/locale-data/en';
// import locale_de from 'react-intl/locale-data/de';

//  addLocaleData([...locale_en, ...locale_de]);
// BROWSER=chrome npm start | choose browser
// mvn spring-boot:run

const rootElement = document.getElementById("root");

let language1 ;
const onChangeLanguage = (i) => {console.log(i) ; language1 = i;rende()}; 
// console.log(language);



const rende = ()=>{ ReactDOM.render(
  
  <IntlProvider locale={language1} messages={messages[language1]}>
        
    
  <Auth0Provider>

    <Router>
      <Switch>
        <Route path="/index" render={props => <HomePage onChangeLanguage={onChangeLanguage} {...props} />} />,
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

  </Auth0Provider> </IntlProvider>, rootElement)
};

rende();