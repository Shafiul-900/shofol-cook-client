import React, { useContext } from 'react';
import banner from '../../../assets/colourful-various-herbs-spices-cooking-dark-background-herbs-spices-cooking-dark-background-113655482.jpg'


const Header = () => {

    return (
        <div>
            <img style={{width: '100%', height: '500px'}} src={banner} alt="" />
        </div>
    );
};

export default Header;