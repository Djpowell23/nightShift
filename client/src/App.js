import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./pages/Register";
// import Logs from "./pages/Logs";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar />
        <Home /> */}
        <Register />
        {/* <Logs /> */}
      </div>
    );
  }
}

export default App;
