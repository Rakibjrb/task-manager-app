import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/axios/useAxiosSecure";

const EditTask = () => {
  const [loading, setLoading] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();
  const id = path?.pathname?.split("/")[4];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  errors?.date && Swal.fire("Date is required");

  const { data: task } = useQuery({
    queryKey: ["getsingletask", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/task/${id}`);
      return res.data;
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    const taskData = {
      email: user?.email,
      title: data?.title,
      description: data?.description,
      date: data?.date,
      priority: data?.priority === "none" ? "low" : data?.priority,
      status: "todo",
    };

    axiosSecure
      .put(`/task/edit/${id}`, taskData)
      .then(() => {
        Swal.fire("Task Edited successfully ...");
        setLoading(false);
        reset();
        navigate("/dashboard/manage-task");
      })
      .catch((err) => {
        Swal.fire("Something went wrong !!!");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[400px] lg:w-[600px] bg-transparent border border-green-400 px-4 py-8 rounded-lg"
      >
        <h1 className="text-4xl text-green-400 text-center font-bold">
          Add a Task
        </h1>
        <div className="mt-8 space-y-5 mb-4">
          <input
            className="w-full p-4 placeholder:text-gray-200 rounded-lg border border-green-400 outline-none text-green-400"
            type="text"
            placeholder="write task title"
            required
            {...register("title")}
            defaultValue={task?.title}
          />
          <textarea
            rows={5}
            className="w-full p-4 placeholder:text-gray-200 rounded-lg border border-green-400 outline-none text-green-400"
            placeholder="write task description"
            {...register("description")}
            defaultValue={task?.description}
          ></textarea>
          <div className="flex gap-4">
            <input
              {...register("date", { required: true })}
              type="date"
              defaultValue={task?.date}
              className="w-full p-4 placeholder:text-gray-200 rounded-lg border border-green-400 outline-none text-green-400"
            />
            <select
              {...register("priority", { required: true })}
              className="w-full p-4 placeholder:text-gray-200 rounded-lg border border-green-400 outline-none text-green-400"
            >
              <option value="none">Select Priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <button className="flex-1 hover:bg-slate-400 rounded-lg bg-green-400 text-black uppercase btn">
            {loading ? (
              <ImSpinner3 className="text-xl animate-spin" />
            ) : (
              "Update Now"
            )}
          </button>
          <Link
            to={"/dashboard/manage-task"}
            className=" hover:bg-slate-400 rounded-lg bg-red-400 text-black uppercase btn"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
