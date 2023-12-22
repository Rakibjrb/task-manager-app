import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import Task from "./Task";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import Swal from "sweetalert2";

const CreateTask = ({
  status,
  tasks,
  todo,
  ongoingTask,
  completedTask,
  taskRefetch,
}) => {
  const axiosSecure = useAxiosSecure();

  const handleStatusChange = (id) => {
    axiosSecure
      .put(`/status/change/${id}`, { status })
      .then(() => {
        Swal.fire(`Task added to ${status}`);
        taskRefetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const droppedItem = (item) => {
    if (status === "todo") {
      handleStatusChange(item.id);
    } else if (status === "ongoing") {
      handleStatusChange(item.id);
    } else if (status === "completed") {
      handleStatusChange(item.id);
    }
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => droppedItem(item),
    collect: (monitor) => ({
      isDragging: !!monitor.isOver(),
    }),
  }));

  let tasksToMap = tasks;

  if (status === "todo") {
    tasksToMap = todo;
  } else if (status === "ongoing") {
    tasksToMap = ongoingTask;
  } else if (status === "completed") {
    tasksToMap = completedTask;
  }

  return (
    <div ref={drop} className={`space-y-6 ${isOver ? "p-4 bg-slate-300" : ""}`}>
      {!tasksToMap?.length ? (
        "No tasks available"
      ) : (
        <>
          {tasksToMap?.map((task, index) => (
            <Task
              key={`${task._id}-${index}`}
              task={task}
              index={index}
              taskRefetch={taskRefetch}
            />
          ))}
        </>
      )}
    </div>
  );
};

CreateTask.propTypes = {
  status: PropTypes.string,
  tasks: PropTypes.array,
  todo: PropTypes.array,
  ongoingTask: PropTypes.array,
  completedTask: PropTypes.array,
  taskRefetch: PropTypes.func,
};
export default CreateTask;
