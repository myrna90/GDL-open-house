import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';

import MapS from './MapS'
import {Link} from "react-router-dom";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Home extends React.Component{
    render(){
        
        return(
            <div>
               <MapS/>
            </div>
        )
    }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA")
  })(Home)