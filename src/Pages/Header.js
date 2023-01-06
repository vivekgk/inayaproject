import React from 'react';
import {NavLink} from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
 
    return (
        <React.Fragment>
  <div className="header">
  <div className="col-xs-4">
    <div className="logo">
      <a href="index.html"><img src="images/Logo100.svg"  className="main_logo"alt /></a>
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
</div>

        </React.Fragment>
    );
}

export default Header;
