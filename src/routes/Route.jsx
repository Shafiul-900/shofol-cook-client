import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Country from "../pages/Home/Country/Country";
import ChefView from "../Layouts/ChefView";
import Chef from "../pages/Chef/Chef/Chef";
import LoginLayout from "../Layouts/LoginLayout";
import Logon from "../pages/Login/Login/Logon";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/country/0'></Navigate>
            },
            {
                path: '/login',
                element: <Logon></Logon>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }, 
    {
        path: 'country',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Country></Country>,
                loader: ({ params }) => fetch(`https://shofol-cook-server-shafiul-900.vercel.app/chef-country/${params.id}`)
            }
        ]
    },
    {
        path: 'chef',
        element: <ChefView></ChefView>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({ params }) => fetch(`https://shofol-cook-server-shafiul-900.vercel.app/chef/${params.id}`)
            }
        ]
    }
]);

export default router;