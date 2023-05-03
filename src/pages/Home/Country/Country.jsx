import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChafCart from '../ChefCard/ChafCart';
import { Row } from 'react-bootstrap';

const Country = () => {
    const { id } = useParams();
    const countryChef = useLoaderData();
    return (
        <div>
            {id && <h2>Coutry {countryChef.length}</h2>}
            <Row>
                {
                    countryChef.map(chef => <ChafCart
                        key={chef._id}
                        data={chef}
                    ></ChafCart>)
                }
            </Row>
        </div>
    );
};

export default Country;