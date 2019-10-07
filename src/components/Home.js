import React, { Component } from 'react';
import ReactDependentScript from "react-dependent-script";
import "./Map.css"
import Map from "./Map";

class Home extends Component {
  render() {
    return(
        <ReactDependentScript
          scripts={[
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCk9lUgqQBF_EojnEsDkspDDp-ozqf1rnA&libraries=places"
          ]}
        >
          <Map center={{ lat: -34.706501, lng: -58.2807187 }} zoom={15} />
        </ReactDependentScript>
    );
  }
}

export default Home;