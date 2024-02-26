import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/banner.css';
import Logo from '../public/images/logo.png';

export default function Banner(){
    return(
        <div className="banner">
            <Navbar>
                <Container fluid>
                    <Navbar.Brand><img src={Logo} alt="logo" width="30" height="30" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse />
                        <Nav>
                            <h4>Shop Locally, Shop Sustainably, Shustainable</h4>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}