import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/navbar.css';
import Logo from "../images/SH.png";

const fontStyle = {
    fontFamily: 'Monaco', 
    fontSize: '20px', 
    color:'#36455A',
    fontWeight: 'bold'
}

export default function Navigation(){
    return(
        <div>
            <Navbar className='nav'>
                <Container fluid>
                    <Navbar.Brand href="/" ><img src={Logo} alt="logo" width="40" height="40" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse />
                        <Nav >
                            <Nav.Link href="/" style={fontStyle}>HOME</Nav.Link>
                            <Nav.Link href="/whatisshustainablle" style={fontStyle}>Thingy</Nav.Link>
                            <Nav.Link href="/profile" style={fontStyle}>PROFILE</Nav.Link>
                            <Nav.Link href='/signOn' style={fontStyle}>LOGIN</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}