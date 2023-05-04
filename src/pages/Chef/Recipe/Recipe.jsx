import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import { FaHardHat, FaHeart, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(true)
    const [active3, setActive3] = useState(true)
    const { recipes, rating } = recipe;

    const handel2 = () => {
        setActive(prev => !prev);
        if (active) {
            toast(' Cnceled  your favorite recipes');
        }
        else {
            toast('success  your favorite recipes');
        }
    }
    const fevariteHandel2 = () => {
        setActive2(prev => !prev);
        if (active) {
            toast('Cnceled  your favorite recipes');
        }
        else {
            toast('success  your favorite recipes');
        }
    }
    const fevariteHandel3 = () => {
        setActive3(prev => !prev);
        if (active) {
            toast('Cnceled  your favorite recipes');
        }
        else {
            toast('success  your favorite recipes');
        }
    }

    return (
        <div className='mt-5'>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" style={{height:"300px"}} src={recipes.recipe1.resipe_img} />
                        <Card.Body>
                            <Card.Title>{recipes.recipe1.name}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{recipes.recipe3.build?.itms1}</li>
                                    <li>{recipes.recipe3.build?.itms2}</li>
                                    <li>{recipes.recipe3.build?.itms3}</li>
                                    <li>{recipes.recipe3.build?.itms4}</li>
                                </ul>
                            </Card.Text>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div>
                                    <Rating
                                        placeholderRating={rating.number}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    >
                                    </Rating>
                                    <span className='ms-3'>{rating.number}</span>
                                </div>
                                <span onClick={handel2} className={active ? 'text-danger' : 'text-black'}><FaHeart></FaHeart>
                                </span>
                                <Toaster></Toaster>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" style={{ height: "300px" }} src={recipes.recipe2.resipe_img} />
                        <Card.Body>
                            <Card.Title>{recipes.recipe2.name}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{recipes.recipe3.build?.itms1}</li>
                                    <li>{recipes.recipe3.build?.itms2}</li>
                                    <li>{recipes.recipe3.build?.itms3}</li>
                                    <li>{recipes.recipe3.build?.itms4}</li>
                                </ul>
                            </Card.Text>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div>
                                    <Rating
                                        placeholderRating={rating.number}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    >
                                    </Rating>
                                    <span className='ms-3'>{rating.number}</span>
                                </div>
                                <span onClick={fevariteHandel2} className={active2 ? 'text-danger' : 'text-black'}><FaHeart></FaHeart>
                                </span>
                                <Toaster></Toaster>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img style={{ height: "300px" }} variant="top" src={recipes.recipe3.resipe_img} />
                        <Card.Body>
                            <Card.Title>{recipes.recipe2.name}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>{recipes.recipe3.build?.itms1}</li>
                                    <li>{recipes.recipe3.build?.itms2}</li>
                                    <li>{recipes.recipe3.build?.itms3}</li>
                                    <li>{recipes.recipe3.build?.itms4}</li>
                                </ul>
                            </Card.Text>
                            <div className='d-flex justify-content-between align-item-center'>
                                <div>
                                    <Rating
                                        placeholderRating={rating.number}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    >
                                    </Rating>
                                    <span className='ms-3'>{rating.number}</span>
                                </div>
                                <span onClick={fevariteHandel3} className={active3 ? 'text-danger' : 'text-black'}><FaHeart></FaHeart>
                                </span>
                                <Toaster></Toaster>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Recipe;