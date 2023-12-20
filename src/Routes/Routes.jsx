import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import Features from "../Components/Home/Features/Features";
import Benefits from "../Components/Home/Benefits/Benefits";
import About from "../Components/Home/About/About";

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
    ],
  },
]);

export default router;
