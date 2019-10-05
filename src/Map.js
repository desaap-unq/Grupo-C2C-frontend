import React, { Component } from "react";

// var map;
export default class Map extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    let options = {
      zoom: this.props.zoom,
      center: this.props.center,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    };
    //map = 
    new window.google.maps.Map(
      document.getElementById('map'), options);
  }

  render() {
    return <div id="map" />;
  }
}
