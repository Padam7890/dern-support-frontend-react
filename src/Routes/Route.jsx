import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterUser from "../Pages/User/RegisterUser";
import Login from "../Pages/User/Login";
import NotfoundPage from "../Pages/NotfoundPage";
import RequestCreate from "../Pages/Request/RequestCreate";
import RequestIndex from "../Pages/Request/RequestIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children:[
      {
        path: "/Request/create",
        element: <RequestCreate/>,
      },
      {
        path: "/Request",
        element: <RequestIndex/>,
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
