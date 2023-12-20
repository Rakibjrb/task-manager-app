import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner h-[820px] md:h-[580px] xl:h-[720px] text-white">
      <div className="max-w-7xl mx-auto h-full flex items-center px-4 xl:px-0">
        <div className="space-y-7">
          <h2 className="text-2xl md:text-3xlfont-semibold text-center md:text-left">
            Welcome to <span className="text-green-500">Task Legend</span>
          </h2>
          <h1 className="text-4xl text-center md:text-left md:text-5xl font-bold">
            Achieve Your Goals, Complete <br /> One task at a time
          </h1>
          <p className="text-center md:text-left text-xl font-semibold">
            Your ultimate task management solution. Effortlessly <br /> organize
            your tasks, set priorities, and stay <br /> on top of your to-do
            list.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to={"/login"}>
              <button className="btn uppercase bg-green-500 text-black hover:bg-gray-400">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
