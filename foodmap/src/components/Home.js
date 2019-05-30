import React from "react";
import MapComponent from "./MapComponent";
import Filters from "./Filters"
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Home extends React.Component {
  render() {
    return (
      <div>

        <MapComponent />
      
        <Filters/>
   
      </div>
    );
  }
}

export default Home;
