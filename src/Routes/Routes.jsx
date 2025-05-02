import { createBrowserRouter } from "react-router";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import FallBack from "../Components/FallBack/FallBack";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/Auth/AuthLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../Provider/Private/PrivateRoute";

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
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: "news-details/:id",
        element: <PrivateRoute><NewsDetails /></PrivateRoute>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <FallBack />
    },
    {
        path: '*',
        Component: ErrorPage
    }
])