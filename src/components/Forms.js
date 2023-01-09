import React, { useState,useEffect,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


function Forms() {
    const [isVisible, setIsVisible] = useState(true);
    const form = useRef();
    localStorage.setItem('mail','hi')
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

  emailjs.sendForm('service_jc49jd8', 'template_v0b0q8h', form.current, 'YcGb6ihFrtSB_bT-Q')
    .then((result) => {
      Object.keys(result).length > 1 ?<p>successfully submitted</p>  : <p>successfully submitted</p>
        console.log("result",result.text);
        console.log("response", result)
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};


    return (
       
        <React.Fragment>
            {isVisible && <div className='color-overlay d-flex justify-content-center align-items-center'>
               <Form className='rounded p-4 p-sm-4' style={{position:"fixed"}} ref={form} onSubmit={sendEmail}>
                <div style={{display:"flex", justifyContent:'space-between', color:"rgb(249, 75, 75)"}}>
                <h5 style={{color:"royalblue"}}>Contact Details</h5>
                <button type="button" class="close" aria-label="Close" onClick={() => setIsVisible(!isVisible)} style={{ color: "rgb(249, 75, 75)", fontSize: 40, cursor:"pointer",zIndex:999 }}>
                       <span aria-hidden="true">&times;</span>
                   </button>
                   </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" name="user_number" placeholder="User Number" />
      </Form.Group>
      <Form.Group className="mb-3" name="user_message" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
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
