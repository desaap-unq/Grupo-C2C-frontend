import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { useAuth0 } from "./contexts/auth0-context";
// import Auth0Header from "./components/Headers/Auth0Header";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
