import React,{useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Forms from './Forms';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

const Popup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <>

<Button variant="primary" onClick={handleShow}>
      Check Price
      </Button>

      <Modal style={{opacity:1}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="User Name"
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="user_number"
                placeholder="User Number"
               
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3}  name="message"/>
            </Form.Group>
            <Button variant="success" type="submit">
        Submit
      </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    );
}

export default Popup;
