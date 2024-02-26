import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/navbar.css';
import Logo from "../images/SH.png";
<<<<<<< HEAD

const fontStyle = {
    fontFamily: 'Monaco', 
    fontSize: '20px', 
    color:'#36455A',
    fontWeight: 'bold'
}
=======
// import signOn from '../routes/signOn';
>>>>>>> ac3d09f39d7fd7b5e19cfd89e852722b7f63c224

export default function Navigation(){
    return(
        <div>
            <Navbar className='nav'>
                <Container fluid>
                    <Navbar.Brand href="/" ><img src={Logo} alt="logo" width="40" height="40" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse />
<<<<<<< HEAD
                        <Nav >
                            <Nav.Link href="/" style={fontStyle}>HOME</Nav.Link>
                            <Nav.Link href="/whatisshustainablle" style={fontStyle}>Thingy</Nav.Link>
                            <Nav.Link href="/profile" style={fontStyle}>PROFILE</Nav.Link>
                            <Nav.Link href='/signOn' style={fontStyle}>LOGIN</Nav.Link>
=======
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/whatisshustainablle">Thingy</Nav.Link>
                            <Nav.Link href="/tips">Tips</Nav.Link>

                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href='/signOn'>Sign In</Nav.Link>
>>>>>>> ac3d09f39d7fd7b5e19cfd89e852722b7f63c224
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}