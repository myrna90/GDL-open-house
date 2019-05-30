import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';

import MapS from './MapS'
import {Link} from "react-router-dom";


class Home extends React.Component {
constructor(){
    super();
    this.state={
        location: [],
        radius: 5000,
        type: ['restaurant'],
        markers : []
    }
let initMap = ()=>{

}
    
}

    render(){
        return(
            <div>
               <MapS/>
            </div>
        )
    }
}

export default Home;