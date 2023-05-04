import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Logon = () => {
const { sinIn, loggedGoogle } = useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || '/country/0'

// sign in with email and password
const handelSighIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    sinIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
    })
    .catch(error => {
        console.log(error);
    })
}


// sign in with google
const handelGoogleSignIn = () => {
    loggedGoogle()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
    })
    .catch(error => {
        console.log(error);
    })
}

// login with github 
const handelGithubSignIn = () => {
    signInGitHub()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
    })
    .catch(error => {
        console.log(error);
    })
}
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handelSighIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Form.Text className="text-secondary">
                    Don't Have An Account?
                    <Link to="/register">Register</Link>
                </Form.Text>
            </Form>

            <hr></hr>
            <hr></hr>
                <Link onClick={handelGoogleSignIn}  className='py-2 fw-medium  text-white d-flex justify-content-center align-items-center bg-primary text-decoration-none'><FaGoogle className='pe-2  fs-3'></FaGoogle> Login With Google</Link>
                <br></br>
                <Link onClick={handelGithubSignIn} className='py-2 fw-medium  text-white d-flex justify-content-center align-items-center bg-primary text-decoration-none' variant="secondary"><FaGithub className='pe-2  fs-3'></FaGithub> Login With GitHub</Link>
        </Container>
    );
};

export default Logon;