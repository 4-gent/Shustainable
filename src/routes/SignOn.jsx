import React from 'react'
import { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import lady from '../public/images/signOn.png'
import logo from '../public/images/SH.png'
import { Link } from 'react-router-dom';
import '../public/signOn.css'

function SignOn() {
    const[activeIndex, setActiveIndex] = useState(false);

    const handleNext = () => {
            setActiveIndex(true);
            if(activeIndex === true){
                window.location.href = '/Home'
            }
    }

  return (
    <>
    <div className=''>
        <Row>
            <Col >
                <div style={{backgroundColor: '#F9F7F1', width: '720px', height: 'auto'}}>
                    <img className="sideImage" src={logo} alt="" />   

                </div>
            </Col>

            <Col>
                <img className="formHead" src={lady} alt="" onSubmit={handleNext} />   
                <Form className='formGuy' style= {{marginLeft:'15%', marginRight:'18%'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Link to="/Home"><Button variant="" type="submit" style={{backgroundColor:'#C9EAE5'}}>
                            Submit
                        </Button></Link>

                </Form>
            
            </Col>

        </Row>

    </div>
    </>
  )
}

export default SignOn