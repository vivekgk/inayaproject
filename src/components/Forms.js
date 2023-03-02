import React, { useState,useEffect,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import {TbArrowsCross} from 'react-icons/tb';
import swal from 'sweetalert';
import Modal from 'react-bootstrap/Modal';


function Forms() {
    const [isVisible, setIsVisible] = useState(false);


    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      // clear timer if the component unmount
      return () => clearTimeout(timer);
    }, []);
    const form = useRef();
  

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ek023lp', 'template_v0b0q8h', form.current, 'NnWj2OW4wrQrYvDe1')
    .then((result) => {
        console.log("result",result.text);
        console.log("response", result)
        if(result){
          swal({
            title: "form successfully submitted!",
            text: "You clicked the button!",
            icon: "success",
            button: "Close!",
          });
        }
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};


    return (
       
        <React.Fragment>
             <div className='color-overlay d-flex justify-content-center align-items-center'>
               <Form className='rounded p-4 p-sm-4' id="isVisible" style={{display:"none",position:"fixed", backgroundColor:"#6f42c1", color:"#FFFF", top:"100px"}} ref={form} onSubmit={sendEmail}>
                <div style={{display:"flex", justifyContent:'space-between', color:"rgb(249, 75, 75)"}}>
                <h4 style={{color:"#FFFF"}}>Contact Details</h4>
                   <TbArrowsCross  size="30px" style={{cursor:"pointer"}} onClick={() => {document.getElementById('isVisible').style.display='none'}}/>
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
        <Form.Control type="text" name="user_name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" name="user_number" placeholder="Enter number" />
      </Form.Group>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label> Message</Form.Label>
        <Form.Control as="textarea" rows={3}  name="message"/>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </div>  
        </React.Fragment>
    );
}

export default Forms;
