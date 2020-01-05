import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Logs from "./pages/Logs";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NavBar />
        <Home /> */}
        <Login />
        {/* Uncomment below for viewing purposes until routing gets set up */}
        {/* <Logs /> */}
      </div>
    );
  }
}

export default App;
