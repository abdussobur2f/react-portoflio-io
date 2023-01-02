import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faCoffee, faLocation, faPhone, faSms } from '@fortawesome/free-solid-svg-icons'

 

 
 
const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <div>
      <div className="section contact">
      <div className="heading">
          <h1>  contact <span className='cng'>us</span>   </h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                     <h1>contact now</h1>
                    <h1 className='mb-3'>lets discus your project</h1>
                    <div className='contact_icon  '>
                        <li> <span> <FontAwesomeIcon icon={faPhone} />  </span> 01645726503</li>
                        <li> <span><FontAwesomeIcon icon={faSms} /> </span> 01645726503</li>
                        <li>   <span><FontAwesomeIcon icon={faLocation} /></span> 01645726503</li>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">


                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                 <div className="row">
                    <div className="col-lg-6 col-sm-6 mb-3">
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                             
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                     
                    <div className="col-lg-6  col-sm-6 mb-3">
                    <Form.Group  controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                           
                        />
                        <Form.Control.Feedback  type="invalid">Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                     
                    <div className="col-lg-6  col-sm-6">
                        
      
                    <Form.Group   controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>
                    </div>
                     
                    <div className="col-lg-6  col-sm-6">
                    <Form.Group   controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>  
                    </div>
                     
                 </div>
      
       
           
       

   
    
   

        <Form.Group className="my-3">
            <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
            />
            </Form.Group>


    <Button type="submit">Submit form</Button>
</Form>
                     </div>
                     
 
                   
               </div>
             </div>
        
      
       </div>
     </div>
   
  )
}

export default Contact
