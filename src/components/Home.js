import React, { Component } from 'react';
import ReactDependentScript from "react-dependent-script";
import "./Map.css"
import Map from "./Map";

// amp;
class Home extends Component {
  render() {
  var key = 'AIzaSyCk9lUgqQBF_EojnEsDkspDDp-ozqf1rnA';
    return(
        <ReactDependentScript
          scripts={[
            'https://maps.googleapis.com/maps/api/js?key='+key+'&libraries=places,geometry'
          ]}
        >
          <Map center={{ lat: -34.706501, lng: -58.2807187 }} zoom={15} />
        </ReactDependentScript>
    );
  }
}

export default Home;