import React, { Component } from "react";
import "./Map.css"

class Map extends Component {
  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    let options = {
      zoom: this.props.zoom,
      center: this.props.center,
      // mapTypeId: 'roadmap'
    };

    let map = new window.google.maps.Map(
      document.getElementById('map'), options);

    new window.google.maps.Marker({position: options.center, map: map});

    new window.google.maps.InfoWindow();

    // Create the search box and link it to the UI element.
    let input = document.getElementById('pac-input');
    let searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

    // // // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new window.google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new window.google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

  render() {
    return <div id="map" />;
  }
}

export default Map;