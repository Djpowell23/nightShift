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
    class: "",
    dateJoined: new Date(Date.now())
  };

  componentDidMount() {
    console.log("component mounted");
  }

  handleFormSubmit = event => {
    event.preventDefault();

    // Set state to user's info
    this.setState({ event });

    // Create post request, send user to DB
    this.createUser();
  };

  createUser() {
    // For testing
    console.log("Create User Event/userCreated:", this.state);
    var userCreated = this.state;
    console.log("userCreated:", userCreated);
  }

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
                {/* Class */}
                <FormGroup>
                  <Label for="classSelect">Class</Label>
                  <Input type="select" name="class" id="classSelect">
                    <option>Choose Class...</option>
                    <option>Warrior</option>
                    <option>Rogue</option>
                    <option>Shaman</option>
                    <option>Hunter</option>
                    <option>Priest</option>
                    <option>Druid</option>
                    <option>Warlock</option>
                    <option>Mage</option>
                  </Input>
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
