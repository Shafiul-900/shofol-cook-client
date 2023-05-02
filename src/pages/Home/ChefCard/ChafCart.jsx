import React from 'react';
import { Card, Col, } from 'react-bootstrap';

const ChafCart = ({ chef }) => {
    const { _id, title, number_of_recipes, thumbnail_url, country, details, author } = chef;
    return (
        <Col lg={6}>
            <Card className='mb-4'>
                <Card.Img style={{ height: '200px' }} variant="top" src={thumbnail_url} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{author.name}</Card.Title>
                        <p>{country}</p>
                    </div>
                    <Card.Text>
                        <p>Her Recipes:- {number_of_recipes}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ChafCart;