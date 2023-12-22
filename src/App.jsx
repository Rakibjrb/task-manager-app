import { Outlet } from "react-router-dom";
import AOS from "aos";
import Nav from "./Layout/Main/Nav/Nav";
import Footer from "./Layout/Main/Footer/Footer";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
