import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import Features from "../Components/Home/Features/Features";
import Benefits from "../Components/Home/Benefits/Benefits";
import About from "../Components/Home/About/About";
import SignUp from "../Pages/UserManagement/SignUp";
import Login from "../Pages/UserManagement/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageTask from "../Components/Dashboard/ManageTask/ManageTask";
import AddTask from "../Components/Dashboard/AddTask/AddTask";
import EditTask from "../Components/Dashboard/ManageTask/EditTask";

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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "manage-task",
        element: <ManageTask />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "task/edit/:id",
        element: <EditTask />,
      },
    ],
  },
]);

export default router;
