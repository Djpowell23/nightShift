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
  CardSubtitle
} from "reactstrap";

// Import photos
import RagHammer from "../img/RagHammer.jpg";
import RagArt from "../img/RagArt.jpeg";
import OnyArt from "../img/OnyArt.png";
import Background from "../img/background.jpg";
// import nightShiftGarr from "../img/nightShiftGarr.png"; // this image needs some adjusting
import Azuregos from "../img/Azuregos.jpg";

var pageStyle = {
  width: "100%",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover"
};

class Home extends Component {
  render() {
    return (
      <div className="Home" style={pageStyle}>
        <br></br>
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
                  <CardTitle>
                    <h3>Night Shift</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Class Leaders:</h4>
                    <ul>
                      <li>Mage: Bigpoop</li>
                      <li>Shaman: Goobaspank</li>
                      <li>Warrior: Taurinebeast</li>
                      <li>Rogue: Brothuzad</li>
                      <li>Hunter: Billybones</li>
                      <li>Warlock: Felblade/Zimlock</li>
                      <li>Druid: Qube</li>
                    </ul>
                    <h4>Officers:</h4>
                    <ul>
                      <li>Zeenoo</li>
                      <li>Crashbot</li>
                      <li>Kord</li>
                      <li>Madderhorn</li>
                      <li>Prs</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
              <br></br>
              {/* Another Card with what the guild is all about */}
              <Card>
                <CardBody>
                  <CardTitle>
                    <h4>About the Guild</h4>
                  </CardTitle>
                  <CardText>
                    <p>
                      Night Shift is a guild created for the people who could
                      only raid during unconventional hours. We currently raid
                      Tuesdays and Thursdays from 11:59 PM to 3:00 AM ST (server
                      time). MC and Ony are on farm.
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            {/* Here we will post recent accomplishments/events */}
            <Col md="8">
              {/* Azuregos */}
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={Azuregos}
                  alt="Azuregos Stock Image"
                />
                <CardBody>
                  <CardTitle>Azuregos Participation: 01/01/2020</CardTitle>
                </CardBody>
              </Card>
              <br></br>
              {/* MC Clear */}
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={RagArt}
                  alt="Ragnaros Stock Image"
                />
                <CardBody>
                  <CardTitle>First MC Clear: ##/##/####</CardTitle>
                </CardBody>
              </Card>
              <br></br>
              {/* Onyxia Clear */}
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={OnyArt}
                  alt="Onyxia Stock Image"
                />
                <CardBody>
                  <CardTitle>First Onyxia Clear: ##/##/####</CardTitle>
                </CardBody>
              </Card>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
