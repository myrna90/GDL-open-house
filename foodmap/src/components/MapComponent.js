import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mainPlace: { lat: 20.650483, lng: -103.4054717 }
    };
  }

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    var request = {
      location: this.state.mainPlace,
      radius: 1000,
      type: ["restaurant"]
    };
    service.nearbySearch(request, function(results, status) {
      console.log(results);

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          const place = results[i];
          const marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });

          service.getDetails(
            {
              placeId: place.place_id,
              fields: [
                "address_component",
                "adr_address",
                "formatted_address",
                "geometry",
                "icon",
                "name",
                "permanently_closed",
                "photo",
                "place_id",
                "plus_code",
                "type",
                "url",
                "utc_offset",
                "vicinity",
                "formatted_phone_number",
                "international_phone_number",
                "opening_hours",
                "website",
                "price_level",
                "rating",
                "review",
                "user_ratings_total"
              ]
            },
            function(details) {
              console.log(details);
            }
          );
          const infoWindow = new google.maps.InfoWindow({
            content: String.raw`<h1>${place.name}</h1>
            `
          });
          marker.addListener("click", function() {
            infoWindow.open(map, marker);
          });
        }
      }
    });
  };

  render() {
    const style = {
      width: "100%",
      height: "40%"
    };
    return (
      <Map
        style={style}
        google={this.props.google}
        zoom={16}
        onReady={this.fetchPlaces}
        initialCenter={this.state.mainPlace}
      >
      
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA"
})(MapComponent);
