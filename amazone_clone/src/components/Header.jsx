import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <>
      <Navbar variant="dark" className="header">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://lh3.googleusercontent.com/proxy/kF1CgEa3GGSyY5Cd87Lc9gz9ygAAT3yPiUDUx0oknE3rZAqmX_MOAGImxRmFvM6u9rloAMI-Lxlbn9Lvf8ns4E9rfzC9JuoJ9VFiuy4c0b77YggYBjAZ4SUNbbBXejROTbnrytkBlMo"
            width="100"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <Nav className="header_nav">
          <Nav.Link href="#deets">
            <span className="header_optionOne"> Hello Guest</span>
            <span className="header_optionTwo"> Sign In</span>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <span className="header_optionOne"> Returns</span>
            <span className="header_optionTwo"> & Orders</span>
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <span className="header_optionOne"> Your</span>
            <span className="header_optionTwo"> Prime </span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
