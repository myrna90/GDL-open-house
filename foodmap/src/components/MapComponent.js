import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class MapComponent extends React.Component {

 
    render(){
      const style = {
        width: '100%',
        height: '40%',
      }
        return(
            <Map google={this.props.google} style={style}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
      </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA')
  })(MapComponent)