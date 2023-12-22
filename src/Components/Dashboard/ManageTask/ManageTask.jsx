import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Tasks from "./Tasks";

const ManageTask = () => {
  const [todo, setTodo] = useState([]);
  const [ongoingTask, setOngoingTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: tasks, refetch: taskRefetch } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  useEffect(() => {
    const newTasks = tasks?.filter((task) => task?.status === "todo");
    setTodo(newTasks);

    const ongoing = tasks?.filter((task) => task?.status === "ongoing");
    setOngoingTask(ongoing);

    const completed = tasks?.filter((task) => task?.status === "completed");
    setCompletedTask(completed);
  }, [tasks]);

  return (
    <>
      <div className="flex justify-between items-center flex-col gap-5 md:flex-row md:gap-0">
        <div className="flex items-center gap-5">
          <img
            className="rounded-full w-14 h-14"
            src={user?.photoURL}
            alt={"user image"}
          />
          <h2 className="text-3xl font-semibold text-white">
            {user?.displayName}
          </h2>
        </div>
        <h1 className="text-3xl text-white font-semibold">Manage your task</h1>
      </div>
      <div className="flex justify-center my-12">
        <div className="h-1 w-3/4 bg-green-300"></div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Tasks
          tasks={tasks}
          todo={todo}
          ongoingTask={ongoingTask}
          completedTask={completedTask}
          taskRefetch={taskRefetch}
        />
      </DndProvider>
    </>
  );
};

export default ManageTask;
