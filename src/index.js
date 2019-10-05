import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import ReactDependentScript from "react-dependent-script";
import "./style.css"
import Map from "./Map";

function App() {
  return (
    <ReactDependentScript
      scripts={[
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyCk9lUgqQBF_EojnEsDkspDDp-ozqf1rnA"
      ]}
    >
      <Map center={{ lat: -34.706501, lng: -58.2807187 }} zoom={15} />
    </ReactDependentScript>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
