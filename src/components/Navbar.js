import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="Navbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Night Shift</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Announcements</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Media</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Logs</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
