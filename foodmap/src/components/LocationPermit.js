import React from "react";
import { withRouter } from "react-router-dom";

class LocationPermit extends React.Component {
  location = () => {};

  render() {
    return (
      <div>
        <input
          type="button"
          className=""
          onClick={() => this.props.history.push("/home")}
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
