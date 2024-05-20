import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import RegisterUser from "../Pages/User/RegisterUser";
import Login from "../Pages/User/Login";
import NotfoundPage from "../Pages/NotfoundPage";
import RequestCreate from "../Pages/Request/RequestCreate";
import RequestIndex from "../Pages/Request/RequestIndex";
import ViewRequest from "../Pages/Request/ViewRequest";
import RepairIndex from "../Pages/RepairJob/RepairIndex";
import RepairView from "../Pages/RepairJob/RepairView";
import ArticleIndex from "../Pages/Articles/ArticleIndex";

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
      },
  
      {
        path: "/Request/view/:id",
        element: <ViewRequest/>,
      },
      {
        path: "/repair",
        element: <RepairIndex/>,
      },
      {
        path: "/repair/view/:id",
        element: <RepairView/>,
      },
      {
        path: "/articles",
        element: <ArticleIndex/>,
      },
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
