import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"

import Register from "../pages/authentication/Register"
import LoginComponent from "../pages/authentication/Login";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import UpdateVolunteerNeedPost from "../pages/UpdateVolunteerNeedPost/UpdateVolunteerNeedPost";
import AllVoluteerNeedPosts from "../pages/AllVoluteerNeedPosts/AllVoluteerNeedPosts";
import ManagePosts from "../pages/ManagePosts/ManagePosts";
import SecureRoutes from "./SecureRoutes";
import PrivateRoute from "./PrivateRoute.jsx"
import PostDetails from "../pages/PostDetails/PostDetails.jsx";
import NotFound from "../pages/404/NotFound.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Contact from "../pages/contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <SecureRoutes><Register /></SecureRoutes>
      },

      {
        path: '/login',
        element: <SecureRoutes><LoginComponent /></SecureRoutes>
      },

      {
        path: '/add-post',
        element: <PrivateRoute>
          <AddVolunteerNeedPost />
        </PrivateRoute>
      },

      {
        path: '/update-post/:id',
        element: <PrivateRoute>
          <UpdateVolunteerNeedPost />
        </PrivateRoute>

      },

      {
        path: '/all-posts',
        element: <AllVoluteerNeedPosts />
      },

      {
        path: '/manage-posts',
        element: <PrivateRoute>
          <ManagePosts />
        </PrivateRoute>
      },
      {
        path: '/post-details/:id',
        element: <PrivateRoute>
          <PostDetails />
        </PrivateRoute>
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "contact-us",
        element: <Contact />
      },
    ]
  },
]);
export default router;