import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNev from '../pages/shared/LeftNav/LeftNev';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Nevigation from '../pages/shared/NaveVar/Nevigation';

const Main = () => {
    return (
        <div>
             <Nevigation></Nevigation>
            <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg={2}>
                        <LeftNev></LeftNev>
                    </Col>
                    <Col lg={7}>
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

export default Main;