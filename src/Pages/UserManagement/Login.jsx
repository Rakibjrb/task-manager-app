import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegUserCircle } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { emailPasswordLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    emailPasswordLogin(data?.email, data?.password)
      .then(() => {
        setLoading(false);
        Swal.fire("User login success ...");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire("Something went wrong !!!");
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[300px] mt-20">
      <div className="relative">
        <div className="bg-[#55ff53] p-2 absolute -top-12 left-[38%] md:left-[41%] z-10 rounded-full">
          <FaRegUserCircle className="text-7xl text-black" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#616161] w-[320px] md:w-[390px] rounded-lg p-4"
        >
          <h2 className="text-3xl font-bold text-center text-green-500 pt-16">
            User Login
          </h2>
          <div className="space-y-4 mt-7">
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="email"
              placeholder="Email ID"
              required
              {...register("email")}
            />
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="password"
              placeholder="Password"
              required
              {...register("password", {
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
              })}
            />
            {errors.password && (
              <p role="alert">
                minimum length 6 with minimum 1 uppercase, 1 lowercase, 1
                spacial character and 1 number
              </p>
            )}
          </div>
          <button
            className="w-full uppercase mt-4 bg-green-500 text-black hover:text-white btn"
            type="submit"
          >
            {loading ? (
              <ImSpinner3 className="animate-spin text-xl" />
            ) : (
              "Login"
            )}
          </button>
          <div className="flex justify-between py-4">
            <a href="" className="hover:underline">
              Forgot Password?
            </a>
            <Link
              to={"/create-account"}
              className="text-green-500 hover:text-black transition-colors"
            >
              Create an Account
            </Link>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
