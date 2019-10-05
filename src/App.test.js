import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from 'react-google-maps';
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";

it('renders without crashing', () => {
  Geocode.setApiKey("AIzaSyCk9lUgqQBF_EojnEsDkspDDp-ozqf1rnA");
  Geocode.enableDebug();
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
