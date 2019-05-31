import React from "react";
import { Link, Redirect } from "react-router-dom";

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
      <div>
        <div>
          <h1 id="timer-label">FOODMAP</h1>
          <p id="time-left">
            <img src={process.env.PUBLIC_URL + "loading.gif"} />
          </p>
        </div>
      </div>
    );
  }
}

export default SplashPage;
