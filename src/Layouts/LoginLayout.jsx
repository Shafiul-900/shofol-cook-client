import React from 'react';
import Nevigation from '../pages/shared/NaveVar/Nevigation';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Nevigation></Nevigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;