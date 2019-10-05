import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';  
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './components/Home';
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from 'react-google-maps';
// import Autocomplete from 'react-google-autocomplete';
// import Geocode from "react-geocode";
// import {initMap} from './utils.js'

// BROWSER=chrome npm start
// var map;
// function InitMap() {
//   map = new google.maps.Map(document.getElementById('root'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }

// function App() {
//   return (
//     <div id="map">
//     <script>
//       var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         })
//       };
//     </script>
//     </div>
//     );
// }

// <div id="map"></div>
//     <script>
//       var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }
//     </script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
