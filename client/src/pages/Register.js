import React, { Component } from "react";
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from "reactstrap";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  componentDidMount() {
    console.log("component mounted");
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // Get data from the table
    var userCreated = this.state;
    console.log("user created:", userCreated);
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
    console.log("email value:", event.target.value);
  };

  handleUsernameChange = event => {
    let username = event.target.value;
    this.setState({ username: username });
    console.log("username:", username);
  };

  handlePasswordChange = event => {
    let password = event.target.value;
    this.setState({ password: password });
    console.log("password:", password);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <Form>
                {/* Email */}
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input onChange={this.handleEmailChange} />
                  <FormFeedback>That name is available!</FormFeedback>
                  <FormText>Please enter your primary email.</FormText>
                </FormGroup>
                {/* Username/Character Name */}
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <Input onChange={this.handleUsernameChange} />
                  <FormText>Please make this match your IGN.</FormText>
                </FormGroup>
                {/* Password */}
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={this.handlePasswordChange}
                  />
                  <FormText>Make sure password meets criteria.</FormText>
                </FormGroup>
                <Button color="primary" onClick={this.handleFormSubmit}>
                  Register!
                </Button>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
