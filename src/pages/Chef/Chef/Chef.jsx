import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chef = useLoaderData();
    console.log(chef)
    const {_id, image_url, title} = chef;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url}  />
                <Card.Body>
                    <Card.Title>{title}{_id}</Card.Title>
                    <Card.Text>
                       
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;