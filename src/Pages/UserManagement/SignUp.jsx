import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { emailPasswordSignUp, loading, updateNameAndPhoto } = useAuth();

  const onSubmit = (data) => {
    emailPasswordSignUp(data?.email, data?.password)
      .then(() => {
        updateNameAndPhoto(data?.name)
          .then(() => {
            Swal.fire("User account created ...");
            navigate("/");
          })
          .catch((err) => {
            Swal.fire("Something went wrong !!!");
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire("something went wrong !!!");
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
            Create an Account
          </h2>
          <div className="space-y-4 mt-7">
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="text"
              placeholder="Name"
              required
              {...register("name", { minLength: 3 })}
            />
            {errors.name && <p role="alert">Min length 3 characters</p>}
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="email"
              placeholder="Email ID"
              required
              {...register("email")}
            />
            {errors.email && <p role="alert">enter valid mail</p>}
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
              "Create"
            )}
          </button>
          <div className="flex justify-between py-4">
            <a href="" className="hover:underline">
              Have an Account?
            </a>
            <Link
              to={"/login"}
              className="text-green-500 hover:text-black transition-colors"
            >
              Login Now
            </Link>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
