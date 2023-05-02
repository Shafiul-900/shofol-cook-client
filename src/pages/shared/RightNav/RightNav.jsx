import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Resipe from '../Resipe/Resipe';

const RightNav = () => {
    return (
        <div>
            <h3>Login Width</h3>
            <div className='ms-3'>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login Width Google</Button>
                <Button variant="outline-primary"><FaGithub></FaGithub> Login Width GitHub</Button>
            </div>

            <div className='mt-5'>
                <h3>Social Contact</h3>
                <ListGroup className='ms-3'>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Resipe></Resipe>
        </div>
    );
};

export default RightNav;