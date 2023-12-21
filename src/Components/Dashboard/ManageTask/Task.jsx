import PropTypes from "prop-types";

const Task = ({ task, index }) => {
  return (
    <div className=" text-black rounded-lg p-3 bg-white space-y-5 shadow-lg shadow-white">
      <h2 className="text-xl font-bold uppercase text-black">
        {index + 1}. {task?.title}
      </h2>
      <div className="flex justify-between">
        <h2 className="text-black">
          Priority :{" "}
          <span className="uppercase font-bold text-red-300">
            {task?.priority}
          </span>
        </h2>
        <h2>Date : {task?.date}</h2>
      </div>
      <p className="text-black">{task?.description}</p>
      <div className="grid grid-cols-2 gap-5">
        <button className="btn bg-red-300 text-black hover:text-white">
          Delete
        </button>
        <button className="btn bg-green-400 text-black hover:text-white">
          Edit
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
};
export default Task;
