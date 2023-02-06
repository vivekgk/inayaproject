import React,{useEffect} from 'react';
import { Link } from "react-router-dom"
import { MdHomeWork } from 'react-icons/md';


const About = () => {
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById('isVisible').style.display='none'
    },500)
    
  },[])
  return (
    // <React.Fragment>
    //   <div className="about_top">
    //     <div className="container">
    //       <div className="about">
    //         <h1 style={{ textAlign: "center", color: "rgb(74 12 123)", marginTop: 40 }}>Our Company</h1>
    //         <div className="section_group">
    //           <div className="col-md-8" >
    //             <h3 className="m_3" style={{marginBottom:20}}>Our Profile</h3>
    //             <p style={{ color: "rgb(74 12 123)" }}>
    //               “Home is where love resides, memories are created, friends always belong, and laughter never ends.”</p>
    //             <p style={{ width: "80%" }}>Owning a home is a dream for many but only a few achieve that dream, as buying a home is a very strenuous process many give up even before starting or face bad experience while hunting for a home. Fret no more because CPS is here.</p>
    //             <p style={{ width: "80%" }}>Chennai Property Service was founded to make everyman’s dream of owning a home come true. As your realtor, we will work with you seamlessly to find the perfect property for you in your budget.</p>
    //             <p style={{ width: "80%" }}>Our sponsor Quadrant Homes, Inc. is a pioneer in constructing world-class luxury apartments, condos and retirement homes. CPS partnered with them have become a dominant player in the real estate market</p>
    //             <p style={{ width: "80%", fontSize: "15px" }}>Over the years, we have gained a reputation as a trust-worthy realtor due to our integrated service to our diverse range of customers. Our service includes real estate, mortgage and title services. We will standby you from the beginning to the end to facilitate the purchase.</p>

    //             <div className="clearfix"> </div>
    //           </div>
    //         </div>
    //         <div className="col-md-4 about_box">
    //           <img src="images/AboutImage.jpg" alt style={{ width: "400px", height: "400px" }} />

    //         </div>

    //         <div className="clearfix"> </div>
    //       </div>
    //       <div className="about_grid1">
    //         <h1 style={{ textAlign: "center", color: "rgb(74 12 123)" }}>Our Advantages</h1>
    //         <div className="col-md-6">
    //           <div >
    //             <div className="about_split">
    //               <MdHomeWork size="60px" color="#87d54d"  />
    //               <h3 >Dedicated Property Consultant</h3>
    //               <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.
    //               </p>
    //             </div>
    //           </div>
    //         </div> 
    //         <div className="col-md-6">
    //           <div >
    //             <div className="about_split">
    //               <MdHomeWork size="60px" color="#87d54d" />
    //               <h3 >Dedicated Property Consultant</h3>
    //               <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.

    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div>
    //             <div className="about_split">
    //               <MdHomeWork size="60px" color="#87d54d" />
    //               <h3>Dedicated Property Consultant</h3>
    //               <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.

    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div>
    //             <div className="about_split">
    //               <MdHomeWork size="60px" color="#87d54d" />
    //               <h3 >Dedicated Property Consultant</h3>
    //               <p>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="clearfix"> </div>
    //       </div>

    //     </div></div>

    // </React.Fragment>
    <React.Fragment>                
  <section className="page-container about-us-page p-b-0">
    <div className="our-company">
      <div className="container">
        <div className="section-title">
          <h2>Our Company</h2>
        </div>
        <div className="row" style={{marginTop:60}}>
          <div className="col-xs-12 col-sm-8 col-md-8">
            <div className="about_desc">
              <h1 style={{ color:"#ff8a00"}}>About Us</h1>
              <p><b style={{color: 'rgb(74 12 123)'}}>“Home is where love resides, memories are created, friends always belong, and laughter never ends.”</b></p>  
              <p>Owning a home is a dream for many but only a few achieve that dream, as buying a home is a very strenuous process many give up even before starting or face bad experience while hunting for a home. Fret no more because CPS is here.</p>
              <p>Inaya Property Service was founded to make everyman’s dream of owning a home come true. As your realtor, we will work with you seamlessly to find the perfect property for you in your budget.</p>
              <p>Our sponsor Quadrant Homes, Inc. is a pioneer in constructing world-class luxury apartments, condos and retirement homes. CPS partnered with them have become a dominant player in the real estate market.</p>
              <p>Over the years, we have gained a reputation as a trust-worthy realtor due to our integrated service to our diverse range of customers. Our service includes real estate, mortgage and title services. We will standby you from the beginning to the end to facilitate the purchase.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="company-image-slider">                              
              <div className="company-image">
              <img src="images/AboutImage.jpg" alt style={{ width: "400px", height: "400px" }} />
              </div>                                  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-us-icon-box m-b-25">
              <h4 style={{color: 'rgb(74 12 123)'}}><a href="#"> Mission:</a></h4>
              <p>To be our customer’s first step in finding their dream home. We want to take part in your journey of finding the perfect home and make beautiful memories along the way, not stress and agony. 
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-us-icon-box m-b-25">
              <h4 style={{color: 'rgb(74 12 123)'}}><a href="#"> Vision:</a></h4>                                      
              <p>
                <b>We Aim</b><br />
                1. To provide a variety of services to our diverse audience<br />
                2. To make every home buyer’s dream come true.<br /><span id="dots" /><span id="more">
                  3. To acquire the love of Chennai home buyers and expand to other parts of Tamilnadu in 5 years.</span><button className="btn btn-sm btn-normal" onclick="myFunction()" id="myBtn">Read more</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="choose-roofing-section">
    <div className="container">
      <div className="section-title">     
        <h2>Why Choose Us</h2>
      </div>  
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 fact-left wow slideInLeft">
          <div className="icon-box m-b-40 text-center">
          <MdHomeWork size="60px" color="#ff8a00" />
            <div className="content">
              <h4>Dedicated Property Consultant</h4>
              <p style={{textAlign: 'justify'}}>Quick and responsive are two of the words which would describe our service. We want our customers to feel at ease while working with us by giving our undivided attention to all our client’ needs. Never cease until our customer’s real estate needs are fulfilled is our motto.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 fact-right wow slideInRight">
          <div className="icon-box m-b-40 text-center">
          <MdHomeWork size="60px" color="#ff8a00" />
            <div className="content">
              <h4>24*7 Support</h4>
              <p style={{textAlign: 'justify'}}>Having sleepless night because you are haunted by that one doubt? Don’t hesitate to contact us as our doors are always open to our customers. We work seamlessly to satisfy you because we want to make loyal customers not just sales.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 fact-left wow slideInLeft">
          <div className="icon-box m-b-40 text-center">
          <MdHomeWork size="60px" color="#ff8a00" />
            <div className="content">
              <h4>Inception to Completion</h4>
              <p style={{textAlign: 'justify'}}>We will guide you through every step you take to satisfy your needs. From searching to matching, from exchanging money to finishing legal matters we will stand by you. We will not rest until we find you your dream home.</p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 fact-right wow slideInRight">
          <div className="icon-box m-b-40 text-center">
          <MdHomeWork size="60px" color="#ff8a00" />
            <div className="content">
              <h4>Best deals</h4>
              <p style={{textAlign: 'justify'}}>Our understanding of the local market helps us cut the best deals for our customers. We would always keep your best interests in mind while negotiating the terms and conditions. For sure, you will be well pleased with the value for money you get by doing business with us.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>

  );
}

export default About;
