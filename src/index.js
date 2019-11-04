import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// style
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/demo/demo.css';

// pages
import Index from './views/Index';
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";

// ReactDOM.render(
//   <BrowserRouter>
    // <Switch>
      // <Route path="/index" render={props => <Index {...props} />} />,
      // <Route
      //   path="/nucleo-icons"
      //   render={props => <NucleoIcons {...props} />}
      // />
      // <Route
      //   path="/landing-page"
      //   render={props => <LandingPage {...props} />}
      // />
      // <Route
      //   path="/profile-page"
      //   render={props => <ProfilePage {...props} />}
      // />
      // <Route
      //   path="/register-page"
      //   render={props => <RegisterPage {...props} />}
      // />
      // <Redirect to="/index" />
    // </Switch>
  // </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<Index />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();