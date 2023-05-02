import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is country{id}</h2>
        </div>
    );
};

export default Country;