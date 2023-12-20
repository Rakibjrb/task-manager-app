import { Outlet } from "react-router-dom";
import Nav from "./Layout/Main/Nav/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
