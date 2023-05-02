import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Nevigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='px-5' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SHOFOL-COOK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Button variant="secondary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Nevigation;