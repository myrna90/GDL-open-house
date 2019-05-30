import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import LocationPermit from "./components/LocationPermit";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainLocation: { lat: 20.650483, lng: -103.4054717 },
      statusMessage: null
    };
  }

  setMainLocation = location => {
    this.setState({ mainLocation: location });
  };

  setStatusMessage = (message) => {
    this.setState({ statusMessage: message });
  };

  render() {
    return (
      <div className="app">
        {this.state.statusMessage ? (
          <div className="alert alert-warning" role="alert">
            {this.state.statusMessage}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => this.setStatusMessage(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <Router>
          <Route path="/" component={SplashPage} exact />
          <Route
            path="/home"
            component={() => <Home mainLocation={this.state.mainLocation} setMainLocation={this.setMainLocation} />}
          />
          <Route path="/location" component={() => <LocationPermit  setMainLocation={this.setMainLocation} setStatusMessage={this.setStatusMessage}/>} />
        </Router>
      </div>
    );
  }
}

export default App;
