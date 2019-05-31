import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MapComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPlace: {},
      activeMarker: null,
      showInfoWindow: true
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place,
      activeMarker: marker,
      showInfoWindow: true
    });
  };

  getMarkers = () => {
    const markers = this.props.filteredPlaces.map(place => {
      const markerJSX = (
        <Marker
          key={place.id}
          onClick={this.onMarkerClick}
          position={place.geometry.location}
          title={place.name}
          place={place}
        />
      );
      return markerJSX;
    });
    return markers;
  };

  fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: this.props.mainLocation,
      radius: 1000,
      type: ["restaurant"]
    };
    service.nearbySearch(request, (results, status, pagination) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.props.setLoadedPlaces(results);
        this.props.setFilteredPlaces();
      }
    });
  };

  render() {
    const mapStyle = {
      width: "100%",
      height: "50vh",
    };
    const divStyle = {
      width: "100%",
      height: "50vh",
    };
    return (
      <div>
        <div style={divStyle}>
          <Map
            style={mapStyle}
            google={this.props.google}
            zoom={16}
            onReady={this.fetchPlaces}
            initialCenter={this.props.mainLocation}
          >
            {this.getMarkers()}
            <InfoWindow
              visible={this.state.showInfoWindow}
              marker={this.state.activeMarker}
            >
              <div>
                <h6>
                  {this.state.selectedPlace
                    ? this.state.selectedPlace.name
                    : ""}
                </h6>
                {this.state.selectedPlace &&
                this.state.selectedPlace.photos &&
                this.state.selectedPlace.photos.length > 0 ? (
                  <img
                    src={this.state.selectedPlace.photos[0].getUrl()}
                    style={{ height: "100px" }}
                  />
                ) : (
                  ""
                )}
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA"
})(MapComponent);
