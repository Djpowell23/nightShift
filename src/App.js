import React, { Component } from "react";
import { Button } from "reactstrap";
import NavBar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h3>Hello World</h3>
      </div>
    );
  }
}

export default App;

// const Example = props => {
//   return (
//     <div>
//       <Button color="primary">primary</Button>{" "}
//       <Button color="secondary">secondary</Button>{" "}
//       <Button color="success">success</Button>{" "}
//       <Button color="info">info</Button>{" "}
//       <Button color="warning">warning</Button>{" "}
//       <Button color="danger">danger</Button> <Button color="link">link</Button>
//     </div>
//   );
// };

// export default Example;
