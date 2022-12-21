import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import MyReview from "../Pages/Review/MyReview";
import Review from "../Pages/Review/Review";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;