import React from 'react';

const Footer = () => {
    return (
      <React.Fragment>
   <div>
  <div className="grid_4">
    <div className="col-md-7 grid_6">
      <h3>
        Want to sell <br />
        your real estate?
      </h3>
    </div>
    <div className="col-md-5 grid_5">
      <div className="banner2">
        <a className="btn2" href="#">click here</a>
        <h3>
          FOR A FREE <br />
          APPRAISAL
        </h3>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="clearfix"> </div>
  </div>
  <div className="grid_7">
    <div className="col-md-4 box_4">
      <h4>Receive our Newsletter</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq.</p>
      <div className="search">
        <form>
          <input type="text" defaultValue />
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
    </div>
    <div className="col-md-4">
      <address className="footer-addr">
        totam rem aperiam, <br />
        voluptatum deleniti , USA <br />
        E-MAIL:
        <a href="#">MAIL@DEMOLINK.ORG</a>
        <div className="phone">
          <span>(500)</span> 1254 6487
        </div>
      </address>
    </div>
    <div className="col-md-2">
      <ul className="list_2">
        <li>
          <a href="#">1st &amp; 2nd Mortgages</a>
        </li>
        <li>
          <a href="#">Construction Loans</a>
        </li>
        <li>
          <a href="#">Fractional Ownerships</a>
        </li>
        <li>
          <a href="#">Home Refinancing</a>
        </li>
        <li>
          <a href="#">Home Equity Lines</a>
        </li>
      </ul>
    </div>
    <div className="col-md-2">
      <ul className="list_2">
        <li>
          <a href="#">1st &amp; 2nd Mortgages</a>
        </li>
        <li>
          <a href="#">Construction Loans</a>
        </li>
        <li>
          <a href="#">Fractional Ownerships</a>
        </li>
        <li>
          <a href="#">Home Refinancing</a>
        </li>
        <li>
          <a href="#">Home Equity Lines</a>
        </li>
      </ul>
    </div>
    <div className="clearfix"> </div>
  </div>
</div>

  </React.Fragment>
    );
}

export default Footer;
