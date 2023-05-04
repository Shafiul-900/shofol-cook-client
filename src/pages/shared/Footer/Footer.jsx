import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark text-white px-5'>
            <Row className='pt-5'>
                <Col xs={12} lg={3} className='mt-5 text-center'>
                    <h2>SHOFOL-Cook</h2>
                </Col>
                <Col xs={12} lg={3}>
                    <h4>About</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Media</li>
                        <li>Blog</li>
                    </ul>
                </Col>
                <Col xs={12} lg={3}>
                    <h4>Top Cuisines</h4>
                    <ul>
                        <li>Bangali</li>
                        <li>Chinese</li>
                        <li>Italian</li>
                        <li>Thai</li>
                    </ul>
                </Col>
                <Col xs={12} lg={3}>
                    <h4>Top Facilities</h4>
                    <ul>
                        <li>Ramartic</li>
                        <li>Buffet</li>
                        <li>Rcof Top</li>
                        <li>Fine Drink</li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;