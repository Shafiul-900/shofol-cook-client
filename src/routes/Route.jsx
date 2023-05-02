import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Country from "../pages/Home/Country/Country";
import ChefView from "../Layouts/ChefView";
import Chef from "../pages/Chef/Chef/Chef";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/country/:id',
                element:<Country></Country>,
                loader: ({params}) => fetch(`http://localhost:5000/chef-country/${params.id}`)
            }
        ]
    },
    {
        path:'chef',
        element: <ChefView></ChefView>,
        children: [
            {
                path:':id',
                element:<Chef></Chef>
            }
        ]
    }
]);

export default router;