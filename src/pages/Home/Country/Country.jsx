import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChafCart from '../ChefCard/ChafCart';
import { Row } from 'react-bootstrap';


const Country = () => {
    const { id } = useParams();
    const countryChef = useLoaderData();
    const [set, setSet] = useState('')
    console.log(countryChef)

    useEffect(() => {
        countryChef.findIndex(x =>  setSet(x.country));
       },[])
    return (
        <div>
            {id && <h2>All Chef Country{countryChef.length}</h2>}
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