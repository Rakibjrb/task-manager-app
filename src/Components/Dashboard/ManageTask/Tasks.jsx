import PropTypes from "prop-types";
import CreateTask from "./CreateTask";

const Tasks = ({ tasks, todo, ongoingTask, completedTask, taskRefetch }) => {
  const statuses = ["todo", "ongoing", "completed"];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 mb-8">
      {statuses?.map((status) => (
        <div key={status}>
          <h3 className="text-black text-2xl uppercase font-semibold mb-5 bg-slate-100 p-4 rounded-lg">
            {status}
          </h3>
          <CreateTask
            status={status}
            tasks={tasks}
            todo={todo}
            ongoingTask={ongoingTask}
            completedTask={completedTask}
            taskRefetch={taskRefetch}
          />
        </div>
      ))}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  todo: PropTypes.array,
  ongoingTask: PropTypes.array,
  completedTask: PropTypes.array,
  taskRefetch: PropTypes.func,
};
export default Tasks;
