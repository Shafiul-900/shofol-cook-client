import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Recipe from '../Recipe/Recipe';

const Chef = () => {
    const {user} = useContext(AuthContext)
    
    const chef = useLoaderData();
    const { _id, category_id, author, details, rating, total_view, experience, image_url, title } = chef;
    return (
        <div>
            <Card>
                <Card.Img variant="top" style={{ height: '400px' }} src={image_url} />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>{author.name}</h2>
                        <h5>Experience {experience} Year</h5>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{details}</p>
                        <div className='d-flex justify-content-between '>
                            <div className='fs-3 d-flex  align-items-center'>
                                <Rating 
                                     placeholderRating={rating.number}
                                     readonly
                                     emptySymbol={<FaRegStar></FaRegStar>}
                                     placeholderSymbol={<FaStar></FaStar>}
                                     fullSymbol={<FaStar></FaStar>}
                                >
                                </Rating>
                                <span className='ps-3 '>{rating?.number}</span>
                            </div>
                            <div className='fs-3 d-flex justify-content-between align-items-center'>
                                <FaThumbsUp className='me-2'></FaThumbsUp>{total_view}
                            </div>
                        </div>
                    </Card.Text>
                    <Link to={`/country/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> Go Back</Button></Link>
                </Card.Body>
            </Card>
            <Recipe></Recipe>
        </div>
    );
};

export default Chef;