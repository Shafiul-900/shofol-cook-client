import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChafCart = ({ data }) => {
    const { _id, total_view, category_id, experience, number_of_recipes, thumbnail_url, country, author } = data;
    return (
        <Col lg={6}>
            <Card className='mb-4'>
                <Card.Img style={{ height: '200px' }} variant="top" src={thumbnail_url} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{author.name}</Card.Title>
                        <p>{country}</p>
                    </div>
                    <div>
                        <p>Her Recipes:- {number_of_recipes}</p>
                        <p>Exprience {experience} Year</p>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between   align-items-center'>
                    <p className='d-flex align-items-center justify-content-center'><span></span> <FaThumbsUp> </FaThumbsUp>{total_view}</p>
                    <Link to={`/chef/${_id}`}>
                        <Button variant="secondary">view Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ChafCart;