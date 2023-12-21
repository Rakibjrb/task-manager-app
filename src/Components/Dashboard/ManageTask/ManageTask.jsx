import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Task from "./Task";

const ManageTask = () => {
  const [newTask, setNewTask] = useState([]);
  const [ongoingTask, setOngoingTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tasks } = useQuery({
    queryKey: ["alltasks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks");
      return res.data;
    },
  });

  useEffect(() => {
    const newTasks = tasks?.filter(
      (task) => task?.startDate === moment().format("Y-M-D")
    );
    setNewTask(newTasks);

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
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="p-3 rounded-lg border border-green-400">
          <h3 className="text-green-500 text-2xl uppercase font-semibold mb-5">
            New
          </h3>
          <div className="flex flex-col gap-6">
            {newTask?.map((task, index) => (
              <Task key={`${task._id}-_-${index}`} task={task} index={index} />
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg border border-green-400">
          <h3 className="text-green-500 text-2xl uppercase font-semibold mb-5">
            Ongoing
          </h3>
          <div className="flex flex-col gap-6">
            {ongoingTask?.map((task, index) => (
              <Task key={`${task._id}-_${index}`} task={task} index={index} />
            ))}
          </div>
        </div>
        <div className="p-3 rounded-lg border border-green-400">
          <h3 className="text-green-500 text-2xl uppercase font-semibold mb-5">
            Completed
          </h3>
          <div className="flex flex-col gap-6">
            {completedTask?.map((task, index) => (
              <Task key={`${task._id}-${index}`} task={task} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTask;
