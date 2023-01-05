import React from 'react';
import {Link} from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
    return (
        <React.Fragment>
  <div className="header">
  <div className="col-xs-4">
    <div className="logo">
      <a href="index.html"><img src="images/logo.png" alt /></a>
    </div>
  </div>
  <div className="col-xs-8 header_right">
    <span className="menu" />
    <div className="top-menu">
      <ul>
        <li><Link to="/"><i className="fa fa-home"> </i>Home </Link></li>
        <li><Link to="/about"><i className="fa fa-star"> </i> About</Link></li>
        <li><Link to="/service"><i className="fa fa-thumbs-up"> </i>Services</Link></li>
        <li><Link to="/contact"><i className="fa fa-envelope-o"> </i>Contact</Link></li>
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
