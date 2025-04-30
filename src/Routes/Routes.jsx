import { createBrowserRouter } from "react-router";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

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
            }
        ]
    }
])