import React,{useRef} from 'react';
import { Link } from "react-router-dom"
import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jaq3dlh', 'template_b9a3vcu', form.current, 'NnWj2OW4wrQrYvDe1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
 <React.Fragment>
 <div className="about_top">
  <div className="container">
    <div className="about">
      <h1 className="blog_head">Contact</h1>
      <div className="map">
      
        {/* <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=chennai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}

    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%2021,%2011,%20Bawa%20Rd,%20Sriram%20Colony%20Abiramapuram%20Chennai,%20Tamil%20Nadu%20600018&t=&z=13&ie=UTF8&iwloc=&output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">area maps</a></iframe>
      </div>
      <div className="contact">
        <div className="col-md-4 contact_left">
          <h3>Contact info</h3>
          <div className='foot_contact'>
            <HiLocationMarker  size="20px"  color="#ff8a00"/>
            <p>Address: 21, 11, Bawa Rd, Sriram Colony<br /> Abiramapuram
              Chennai, Tamil Nadu 600018</p>
              </div>
              <div className='foot_contact'>
              <BsTelephoneOutboundFill  size="20px" color="#ff8a00"/>
              <p>Phone: +91 - 96000 51444</p>
              </div>
              <div className='foot_contact'>
               <MdAttachEmail size="20px" color="#ff8a00"/>
               <p>Sales@Inayapropertyservices.com</p>
               </div>
        </div>
        <div className="col-md-8 contact_right">
          <h3>Catch me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text">
              <div className="text-fild">
                <span>Name:</span>
                <input type="text" className="text" name="name" defaultValue="Your Name here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Name here';}" />
              </div>
              <div className="text-fild">
                <span>Email:</span>
                <input type="text" className="text" name="email" defaultValue="Your Email here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Email here';}" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="msg-fild">
              <span>Subject:</span>
              <input type="text" className="text" name="subject" defaultValue="Your Subject here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Subject here';}" />
            </div>
            <div className="message-fild">
              <span>Message:</span>
              <textarea defaultValue={" "}  name="message"/>
            </div>
           <button className='contact-btn'>Send</button>
          </form>
              
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div></div>

</React.Fragment>

    );
}

export default Contact;
