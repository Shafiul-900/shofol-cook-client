import React from 'react';
import { Link } from 'react-router-dom';

const Condation = () => {
    return (
        <div>
            <h2>Accept Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam nihil recusandae eligendi exercitationem in ea animi possimus tenetur vero magnam similique dolorum quam ipsum, accusantium atque commodi, consequuntur culpa.</p>

            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Condation;