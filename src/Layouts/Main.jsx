import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNev from '../pages/shared/LeftNav/LeftNev';
import RightNav from '../pages/shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-5'>
                <Row>
                    <Col lg={3}>
                        <LeftNev></LeftNev>
                    </Col>
                    <Col lg={6}>
                        <h2>Main is coming..</h2>
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