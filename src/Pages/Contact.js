import React from 'react';
import { Link } from "react-router-dom"

const Contact = () => {
    return (
 <React.Fragment>
 <div className="about_top">
  <div className="container">
    <div className="about">
      <h1 className="blog_head">Contact</h1>
      <div className="map">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe> */}
        <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=chennai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      <div className="contact">
        <div className="col-md-4 contact_left">
          <h3>Contact info</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum adipiscing vestibulum sapien, in ultricies tellus dignissim eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p> Praesent mollis dolor eros, vel facilisis nisi auctor ut. Cras id convallis ipsum. Mauris posuere, ligula ac sodales sollicitudin, risus sapien iaculis libero, ac molestie orci arcu non ante. Fusce est leo, ornare ut porta quis, dictum et mi. Aliquam vel pretium sem</p>
        </div>
        <div className="col-md-8 contact_right">
          <h3>Catch me</h3>
          <form>
            <div className="text">
              <div className="text-fild">
                <span>Name:</span>
                <input type="text" className="text" defaultValue="Your Name here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Name here';}" />
              </div>
              <div className="text-fild">
                <span>Email:</span>
                <input type="text" className="text" defaultValue="Your Email here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Email here';}" />
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="msg-fild">
              <span>Subject:</span>
              <input type="text" className="text" defaultValue="Your Subject here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Subject here';}" />
            </div>
            <div className="message-fild">
              <span>Message:</span>
              <textarea defaultValue={" "} />
            </div>
            <label className="btn1 btn-8 btn-8c"><input type="submit" defaultValue="Send" /></label>
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
