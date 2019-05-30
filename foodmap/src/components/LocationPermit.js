import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class LocationPermit extends React.Component {
  location = () => {};

  getGeoLocation = () => {
    const successAction = position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      this.props.setMainLocation({ lat, lng });
      this.props.history.push("/home")
    };

    const errorAction = () => {
      this.props.setStatusMessage("Unable to retrieve your location");
      this.props.history.push("/home")
    };
    navigator.geolocation.getCurrentPosition(successAction, errorAction);
  };

  render() {
    if (!window.navigator.geolocation) {
      this.props.setStatusMessage(
        "Geolocation is not supported by your browser."
      );
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <input
          type="button"
          className=""
          onClick={this.getGeoLocation}
          value="Aceptar"
        />

        <input
          type="button"
          className=""
          onClick={() => this.props.history.push("/home")}
          value="Ignorar"
        />
      </div>
    );
  }
}

export default withRouter(LocationPermit);
