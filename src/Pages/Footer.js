import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <React.Fragment>    
   <div className="footer_top">
  <div className='foot-container'>
    <div className="about">
      <div className="service_grid" >
          <div className="col-md-6 col-sm-12">
            <h3 className='foot_head'>Get In Touch</h3>
            <div className='foot_contact'>
            <HiLocationMarker  size="20px" color="#ff8a00" />
            <p>Address: No.30 Anna Nagar plaza Near<br /> Ayyappan Temple
              Chennai, Tamil Nadu 600040</p>
              </div>
              <div className='foot_contact'>
              <BsTelephoneOutboundFill  size="20px" color="#ff8a00" />
              <p>Phone: +91 - 96000 51444</p>
              </div>
              <div className='foot_contact'>
               <MdAttachEmail size="20px" color="#ff8a00" />
               <p>Sales@Inayapropertyservices.com</p>
               </div>
          </div>
          <div className="col-md-6 col-sm-12" >
            <h3 className='foot_head'>Social Links</h3>
            <div style={{display:"flex", marginTop:20}}>
            <div className='icons'>
            <BsFacebook size="30px" color="#ff8a00" />
            </div>
            <div className='icons'>
            <BsTwitter size="30px" color="#ff8a00" />
            </div>
            <div className='icons'>
            <FaInstagramSquare size="30px"  color="#ff8a00"/>
            </div>
            <div className='icons'>
            <IoLogoWhatsapp size="30px" color="#ff8a00" />
            </div>
          </div>
          </div>
        </div>
        <div className="clearfix"> </div>
        </div>
        </div>
        </div>
        
     


    </React.Fragment>
  );
}

export default Footer;
