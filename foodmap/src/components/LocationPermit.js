import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

class LocationPermit extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  componentDidMount() {
    this.setState({ show: true });
  }

  location = () => { };

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
      <Modal
      show={this.state.show} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Ubicación
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Acceso</h4>
        <p>
        Para brindarte una mejor experiencia, Food Finder necesita el acceso a tu ubicación. ¿Autorizas la acción?
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={this.props.onHide} onClick={() => this.props.history.push("/home")}>Aceptar</Button>
      <Button variant="secondary" onClick={this.props.onHide} onClick={this.getGeoLocation}>Ignorar</Button>
        
      </Modal.Footer>
    </Modal>

      // <div className="centeredModal">
      //   <Row> 
      //     <Col md={{ span: 12, offset: 3 }}>
      //   <Card bg="danger" text="white" style={{ width: '30rem' }}>
      //   <Card.Header>Ubicación</Card.Header>
      //   <Card.Body>
      //     <Card.Title>Acceso</Card.Title>
      //     <Card.Text>
      //       Para brindarte una mejor experiencia, Food Finder necesita el acceso a tu ubicación. ¿Autorizas la acción?
      // </Card.Text>

      //     <ButtonToolbar> 
      //     <Button variant="primary" onClick={this.getGeoLocation}
      //   value="Aceptar">Aceptar</Button>
      //     <p>&nbsp;&nbsp;</p>
      //     <Button variant="primary"  onClick={() => this.props.history.push("/home")}
      //   value="Ignorar">Ignorar</Button>
      //     </ButtonToolbar>

      //   </Card.Body>

      // </Card>
      // </Col>
      // </Row>
      // </div>
    );
  }
}

export default withRouter(LocationPermit);
