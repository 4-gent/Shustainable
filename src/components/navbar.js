import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/navbar.css';
import Logo from "../images/SH.png";

export default function Navigation(){
    return(
        <div>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" width="30" height="30" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse />
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/whatisshustainablle">Thingy</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}