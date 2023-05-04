import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, loggedGoogle, signInGitHub } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const from = location?.state?.from?.pathname || '/country/0';

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, name, photo)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handelAccepted = event => {
        setAccepted(event.target.checked);
    }

    // google sing in
    const handelGoogleSignIn = () => {
        loggedGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    // github signIn 
    const handelGithubSignIn = () => {
        signInGitHub()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Sent Photo URl" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/condation">Terms and condition</Link></>}
                    />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Submit
                </Button>

                <br></br>
                <Form.Text className="text-secondary">
                    Already Have An Account?
                    <Link to="/login">Login</Link>
                </Form.Text>
            </Form>
        <hr></hr>
        <hr></hr>
                <Link onClick={handelGoogleSignIn}  className='py-2 fw-medium  text-white d-flex justify-content-center align-items-center bg-primary text-decoration-none'><FaGoogle className='pe-2  fs-3'></FaGoogle> SignUp With Google</Link>
                <br></br>
                <Link onClick={handelGithubSignIn} className='py-2 fw-medium  text-white d-flex justify-content-center align-items-center bg-primary text-decoration-none' variant="secondary"><FaGithub className='pe-2  fs-3'></FaGithub> SignUp With GitHub</Link>
        </Container>
    );
};

export default Register;