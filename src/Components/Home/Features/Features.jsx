import axios from "axios";
import { useEffect, useState } from "react";
import Feature from "./Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios.get("./features.json").then((res) => setFeatures(res.data));
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 xl:px-0 mt-20 text-white"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="font-playpen">
        <p className="text-green-500 text-center">#features</p>
        <h2
          className="text-4xl font-bold mt-3 mb-10 text-center"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Our Features
          <div className="flex justify-center mt-3">
            <div className="w-24 h-1 bg-green-500"></div>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features?.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
