import React from 'react';
import { Link } from "react-router-dom"

const About = () => {
    return (
        <React.Fragment>
   <div className="about_top">
  <div className="container">
    <div className="about">
      <div className="col-md-8">
        <h3 className="m_3">Our Profile</h3>
        <div className="section_group"> 
          <div className="col_1_of_2 span_1_of_2">
            <img src="images/about.jpg" className="img-responsive" alt />
          </div>
          <div className="col_1_of_2 span_1_of_2">
            <h4>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem tempor incididunt ut labore"</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="col-md-4 about_box">
        <h3 className="m_3">Careers</h3>
        <h4>"But I must explain to you how all this mistaken idea of denouncing pleasure"</h4>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain</p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="about_grid1">
      <h3>Our Advantages</h3>
      <div className="col-md-4">
        <div className="list styled custom-list">
          <ul>
            <li><span className="dropcap">01 / </span>  
              <div className="about_desc">
                <h5><a href="#">The standard chunk of Lorem Ipsum used since the 1500s</a></h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="list styled custom-list">
          <ul>
            <li><span className="dropcap">02 / </span>  
              <div className="about_desc">
                <h5><a href="#">The standard chunk of Lorem Ipsum used since the 1500s</a></h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="list styled custom-list">
          <ul>
            <li><span className="dropcap">03 / </span>  
              <div className="about_desc">
                <h5><a href="#">The standard chunk of Lorem Ipsum used since the 1500s</a></h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="about_grid2">
      <h3>Our Staff</h3>
      <div className="col-md-3 about_box2">
        <img src="images/a1.jpg" className="img-responsive" alt /> 
        <h3>suffered </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
      </div>
      <div className="col-md-3 about_box2">
        <img src="images/a2.jpg" className="img-responsive" alt /> 
        <h3>suffered </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
      </div>
      <div className="col-md-3 about_box2">
        <img src="images/a3.jpg" className="img-responsive" alt /> 
        <h3>suffered </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
      </div>
      <div className="col-md-3 about_box2">
        <img src="images/a4.jpg" className="img-responsive" alt /> 
        <h3>suffered </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it</p>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div></div>

        </React.Fragment>
    );
}

export default About;
