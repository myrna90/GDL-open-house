import React from "react";
import { Redirect } from "react-router-dom";
import "./Splash.css"

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: true
    };
    setTimeout(this.handleStartStop, 2000);
  }

  handleStartStop = () => {
    this.setState({
      count: false
    });
    //esta funcion se cuando pasan 2 seg.
  };

  render() {
    if (!this.state.count) {
      return (<Redirect to="/location" />);
    }

    return (
      <div className="texture" >
      
        <div>
          <h1 style= {{backgroundColor: "#E19B5F", width: "100%", height: "100px", textAlign:"center", fontSize:"70px", fontFamily:'Palatino Linotype', color:"red"}}  id="timer-label">FOODMAP</h1>
          <p id="time-left">
            <img src={process.env.PUBLIC_URL + "/loading.gif"} />
          </p>
        </div>
      </div>
    );
  }
}

export default SplashPage;
