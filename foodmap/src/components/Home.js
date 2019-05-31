import React from "react";
import MapComponent from "./MapComponent";
import Filters from "./Filters"
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Home extends React.Component {
  render() {
    return (
      <div>
 <header style={{backgroundColor: "#E19B5F", width: "100%", height: "150px", textAlign:"center"}}>FOOD FINDER</header>
  
        <MapComponent mainLocation={this.props.mainLocation} />

      
        <Filters/>
   
      </div>
    );
  }
}

export default Home;
