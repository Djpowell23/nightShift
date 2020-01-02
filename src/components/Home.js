import React, { Component } from "react";
// Import Framework
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import RagHammer from "../img/RagHammer.jpg";
import RagArt from "../img/RagArt.jpeg";
import OnyArt from "../img/OnyArt.png";
import Background from "../img/background.jpg";

var pageStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`
};

class Home extends Component {
  render() {
    return (
      <div className="Home" style={pageStyle}>
        <Container>
          <Row>
            {/* This column is for updated Officers/Class Leads */}
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={RagHammer}
                  alt="Card Image Top"
                />
                <CardBody>
                  <CardTitle>Night Shift</CardTitle>
                  <CardSubtitle>Guild Officers</CardSubtitle>
                  <CardText>
                    <ul>
                      <li>Picklericks</li>
                      <li>Crom</li>
                      <li>Judecca</li>
                      <li>Zeenoo</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            {/* Here we will post recent accomplishments/events */}
            <Col md="8">
              {/* MC Clear */}
              <Card>
                <CardImg top width="100%" src={RagArt} alt="Recent Picture" />
                <CardBody>
                  <CardTitle>First MC Clear: ##/##/####</CardTitle>
                </CardBody>
              </Card>
              <br></br>
              {/* Onyxia Clear */}
              <Card>
                <CardImg top width="100%" src={OnyArt} alt="Recent Picture" />
                <CardBody>
                  <CardTitle>First Onyxia Clear: ##/##/####</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
