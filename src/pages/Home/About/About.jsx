import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
       <Container>
            <h4><span>1: </span> Tell us the differences between uncontrolled and controlled components?</h4>
            <p><span >Ans:- In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</span></p>

            <h4><span>2: </span> How to validate React props using PropTypes?</h4>
            <p><span>Ans:-</span> 
            <ul>
                <li>PropTypes.any : The prop can be of any data type.</li>
                <li>PropTypes.bool : The prop should be a Boolean.</li>
                <li>PropTypes.number : The prop should be a number.</li>
                <li>PropTypes.string : The prop should be a string.</li>
                <li>PropTypes.func : The prop should be a function.</li>
                <li>PropTypes.array : The prop should be an array.</li>
            </ul>
            </p>

            <h4><span>3: </span>Tell us the difference between nodejs and express js? </h4>
            <p><span>Ans:- </span> Js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>

            <h4><span>4: </span> What is a custom hook, and why will you create a custom hook?</h4>
            <p><span>Ans:- </span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
       </Container>
    );
};

export default About;