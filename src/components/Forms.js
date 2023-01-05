import React, { useState,useEffect,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


function Forms() {
    const [isVisible, setIsVisible] = useState(true);
    const form = useRef();

//     useEffect(() => {   
//         window.addEventListener("scroll", listenToScroll);
//         return () => 
//            window.removeEventListener("scroll", listenToScroll); 
//       }, []);
// useEffect(()=>{
// console.log("enter",isVisible)

// },[isVisible])
//       const listenToScroll = () => {
//         let heightToHideFrom = 300;
//         const winScroll = document.body.scrollTop || 
//             document.documentElement.scrollTop;
//       //  setHeight(winScroll);
//         let view;
//         if (winScroll > heightToHideFrom) {  
//             view= true;
//         } else {
//            view= false;
//         }    setIsVisible(view);

//       };
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_xmslikd', 'template_ceufy0e', form.current, 'YcGb6ihFrtSB_bT-Q')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};
    return (
        // <React.Fragment>
        //     {/* <div className="col-md-7 contact_right"> */}
        //     {isVisible && <div className='form-sec'>
        //         {/* <div className="col-md-4 contact_right"> */}
        //             <div style={{display:'flex',justifyContent:'space-between'}}>
        //             <h3 style={{marginLeft:50}}>Enqury Details</h3>
        //             <button type="button" class="close" aria-label="Close" onClick={() => setIsVisible(!isVisible)} style={{ color: "rgb(249, 75, 75)", fontSize: 40, cursor:"pointer",zIndex:999 }}>
        //                 <span aria-hidden="true">&times;</span>
        //             </button>
        //             </div>
        //             <form style={{width:"700px", padding:30,borderRadius:"20px"}}>
        //                 <div className="text">
        //                     <div className="text-fild">
        //                         <span>Name:</span>
        //                         <input type="text" className="text" defaultValue="Your Name here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Name here';}" />
        //                     </div>
        //                     <div className="text-fild">
        //                         <span>Email:</span>
        //                         <input type="text" className="text" defaultValue="Your Email here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Email here';}" />
        //                     </div>
        //                     <div className="clearfix"> </div>
        //                 </div>
        //                 <div className="msg-fild">
        //                     <span>Subject:</span>
        //                     <input type="text" className="text" defaultValue="Your Subject here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Subject here';}" />
        //                 </div>
        //                 <div className="message-fild">
        //                     <span>Message:</span>
        //                     <textarea defaultValue={" "} />
        //                 </div>
        //                <Button>Submit</Button>
        //             </form>
        //         </div>}
        

        //     {/* </div> */}
        // </React.Fragment>
        <React.Fragment>
            {isVisible && <div className='color-overlay d-flex justify-content-center align-items-center'>
               <Form className='rounded p-4 p-sm-4' style={{position:"fixed"}} ref={form} onSubmit={sendEmail}>
                <div style={{display:"flex", justifyContent:'space-between', color:"rgb(249, 75, 75)"}}>
                <h5>Contact Details</h5>
                <button type="button" class="close" aria-label="Close" onClick={() => setIsVisible(!isVisible)} style={{ color: "rgb(249, 75, 75)", fontSize: 40, cursor:"pointer",zIndex:999 }}>
                       <span aria-hidden="true">&times;</span>
                   </button>
                   </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please Type Any Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </div>}
        </React.Fragment>
    );
}

export default Forms;
