import React from 'react';
import {NavLink} from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
const Header = () => {
 
 
    return (
        <React.Fragment>
  {/* <div className="header">
  <div className="col-xs-4">
    <div className="logo">
    <img src="images/Logo100.svg"  className="main_logo"alt />
    </div>
  </div>
  <div className="col-xs-8 header_right">
    <span className="menu"> </span>
    <div className="top-menu">
      <ul>
        <li><NavLink  to="/"><i className="fa fa-home"> </i>Home </NavLink></li>
        <li><NavLink  to="/about" ><i className="fa fa-star"> </i> About</NavLink></li>
        <li><NavLink to="/service" ><i className="fa fa-thumbs-up"> </i>Services</NavLink></li>
        <li><NavLink  to="/contact" ><i className="fa fa-envelope-o"> </i>Contact</NavLink></li>
        <div className="clearfix" />
      </ul>
    </div>

  </div>
  <div className="clearfix"> </div>
</div> */}
      <Navbar bg="light" expand="md" fixed="top" style={{display:"flex", justifyContent:"flex-end"}} >
      <Container style={{display:"flex", justifyContent:"flex-end"}}>
        <Navbar.Brand > <img src="images/Logo100.svg"  className="main_logo"alt /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto">
            <Nav.Link href="/" ><i className="fa fa-home"> </i>Home</Nav.Link>
            <Nav.Link href="/about"><i className="fa fa-star"> </i>About</Nav.Link>
            <Nav.Link href="/service"><i className="fa fa-thumbs-up"> </i>Services</Nav.Link>
            <Nav.Link href="/contact"><i className="fa fa-envelope-o"> </i>Contact</Nav.Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="clearfix"> </div>
    </Navbar>

        </React.Fragment>
    );
}

export default Header;
