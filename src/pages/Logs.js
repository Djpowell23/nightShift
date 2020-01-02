import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

class Logs extends Component {
  state = {
    currentlySelected: ""
  };
  render() {
    return (
      <div className="Logs">
        <h2>Logs Page</h2>
        <Container>
          <Row>
            <Col md="4">This column will have a link to each log</Col>
            <Col md="8">
              This column will populate the log data from what user selected on
              the side.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Logs;
