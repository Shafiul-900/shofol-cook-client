import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Nevigation from '../pages/shared/NaveVar/Nevigation';


const ChefView = () => {
    return (
        <div>
            <Nevigation></Nevigation>
            <Container className='mt-5'>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ChefView;