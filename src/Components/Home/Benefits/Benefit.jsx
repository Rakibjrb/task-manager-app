import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

const Benefit = ({ benefit }) => {
  const { title, description } = benefit;
  return (
    <div className="flex gap-4" data-aos="fade-left" data-aos-duration="800">
      <FaCheck className="text-4xl text-green-500" />
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  benefit: PropTypes.object,
};
export default Benefit;
