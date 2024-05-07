import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterUser from "../Pages/User/RegisterUser";
import Login from "../Pages/User/Login";
import NotfoundPage from "../Pages/NotfoundPage";
import RequestCreate from "../Pages/Request/RequestCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children:[
      {
        path: "/Request",
        element: <RequestCreate/>,
      }
     ]
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
  
  {
    path: "/*",
    element: <NotfoundPage/>,
  }

]);

export { router };
