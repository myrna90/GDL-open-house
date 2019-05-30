import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import LocationPermit from "./components/LocationPermit"

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route path="/" component={SplashPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/location" component={LocationPermit} />
        </Router>
      </div>
    );
  }
}

export default App;