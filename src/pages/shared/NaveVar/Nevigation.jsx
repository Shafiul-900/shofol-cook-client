import React, { useContext } from 'react';
import { Button, Card, CardImg, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';


const Nevigation = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then()
            .catch(error => { console.log(error) })
    }

    return (
        <div>
            <Navbar collapseOnSelect className='px-5' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        SHOFOL-COOK
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link href="/country/0">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                            }
                            <Navbar.Brand href="#home">
                                {
                                    user && <img 
                                    src={user?.photoURL}
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top rounded"
                                    alt="React Bootstrap logo"
                                />
                                }
                            </Navbar.Brand>
                            {
                                user ? <Button onClick={handelLogOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Nevigation;