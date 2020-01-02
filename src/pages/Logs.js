import React, { Component } from "react";
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
            {/* This column will have a link to each log */}
            <Col md="4">
              <Card>
                <CardBody>
                  <CardTitle>
                    <h4>Logs</h4>
                  </CardTitle>
                  <CardText>
                    <p>Populate Logs Here</p>
                    <ul>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/L8hz2mBWtFH9JGnX">
                          11/15/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/Y7M8FacLZKzgdBnN">
                          11/20/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/fTcZpNtMRPvnwJjz">
                          MC: 11/22/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/ZWVK2JH1nTQjDvzg">
                          Ony: 11/22/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/RHn2WYNL8Jcy3r9G">
                          11/27/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/n8vr64wjxYRNFkBh">
                          MC: 11/30/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/g29TcwQPBWMZbfFt">
                          Ony: 11/30/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/H4DPz1gY82LntXhw">
                          12/04/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/1qHznA2fpQN8vTmD">
                          12/06/2019
                        </a>
                      </li>
                      <li>
                        <a href="https://classic.warcraftlogs.com/reports/WXvCkcbLmM6VAat7">
                          12/07/2019
                        </a>
                      </li>
                      <li>
                        <a href="">12/11/2019</a>
                      </li>
                      <li>12/13/2019</li>
                      <li>12/18/2019</li>
                      <li>12/20/2019</li>
                      <li>12/27/2019</li>
                      <li>12/28/2019</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
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
