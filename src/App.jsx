import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "./Store/userSlice";

function App() {
 
  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
