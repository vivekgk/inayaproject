import React from 'react';
import { Link } from "react-router-dom"
import { MdHomeWork } from 'react-icons/md';


const About = () => {
  return (
    <React.Fragment>
      <div className="about_top">
        <div className="container">
          <div className="about">
            <h1 style={{ textAlign: "center", color: "rgb(74 12 123)", marginTop: 40 }}>Our Company</h1>
            <div className="section_group">
              <div className="col-md-8" >
                <h3 className="m_3" style={{marginBottom:20}}>Our Profile</h3>
                <p style={{ color: "rgb(74 12 123)" }}>
                  “Home is where love resides, memories are created, friends always belong, and laughter never ends.”</p>
                <p style={{ width: "80%" }}>Owning a home is a dream for many but only a few achieve that dream, as buying a home is a very strenuous process many give up even before starting or face bad experience while hunting for a home. Fret no more because CPS is here.</p>
                <p style={{ width: "80%" }}>Chennai Property Service was founded to make everyman’s dream of owning a home come true. As your realtor, we will work with you seamlessly to find the perfect property for you in your budget.</p>
                <p style={{ width: "80%" }}>Our sponsor Quadrant Homes, Inc. is a pioneer in constructing world-class luxury apartments, condos and retirement homes. CPS partnered with them have become a dominant player in the real estate market</p>
                <p style={{ width: "80%", fontSize: "15px" }}>Over the years, we have gained a reputation as a trust-worthy realtor due to our integrated service to our diverse range of customers. Our service includes real estate, mortgage and title services. We will standby you from the beginning to the end to facilitate the purchase.</p>

                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-4 about_box">
              <img src="images/AboutImage.jpg" alt style={{ width: "400px", height: "400px" }} />

            </div>

            <div className="clearfix"> </div>
          </div>
          <div className="about_grid1">
            <h1 style={{ textAlign: "center", color: "rgb(74 12 123)" }}>Our Advantages</h1>
            <div className="col-md-6">
              <div >
                <div className="about_split">
                  <MdHomeWork size="60px" color="#87d54d"  />
                  <h3 >Dedicated Property Consultant</h3>
                  <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.
                  </p>
                </div>
              </div>
            </div> 
            <div className="col-md-6">
              <div >
                <div className="about_split">
                  <MdHomeWork size="60px" color="#87d54d" />
                  <h3 >Dedicated Property Consultant</h3>
                  <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="about_split">
                  <MdHomeWork size="60px" color="#87d54d" />
                  <h3>Dedicated Property Consultant</h3>
                  <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="about_split">
                  <MdHomeWork size="60px" color="#87d54d" />
                  <h3 >Dedicated Property Consultant</h3>
                  <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.
                  </p>
                </div>
              </div>
            </div>

            <div className="clearfix"> </div>
          </div>

        </div></div>

    </React.Fragment>
  );
}

export default About;
