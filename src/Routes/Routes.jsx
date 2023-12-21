import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import Features from "../Components/Home/Features/Features";
import Benefits from "../Components/Home/Benefits/Benefits";
import About from "../Components/Home/About/About";
import SignUp from "../Pages/UserManagement/SignUp";
import Login from "../Pages/UserManagement/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/benefits",
        element: <Benefits />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
