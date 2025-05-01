import { createBrowserRouter } from "react-router";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import FallBack from "../Components/FallBack/FallBack";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Roots,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/career',
                Component: Career
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <FallBack />
            }
        ]
    },
    {
        path: '/auth',
        element: <h3>Authentication Layout</h3>,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register'
            }
        ]
    }
])