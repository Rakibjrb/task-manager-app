import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-[300px] mt-20">
      <div className="relative">
        <div className="bg-[#55ff53] p-2 absolute -top-12 left-[38%] md:left-[41%] z-10 rounded-full">
          <FaRegUserCircle className="text-7xl text-black" />
        </div>
        <form className="bg-[#616161] w-[320px] md:w-[390px] rounded-lg p-4">
          <h2 className="text-3xl font-bold text-center text-green-500 pt-16">
            Create an Account
          </h2>
          <div className="space-y-4 mt-7">
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="email"
              placeholder="Email ID"
              required
            />
            <input
              className="w-full p-4 placeholder:text-white rounded-lg"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="w-full uppercase mt-4 bg-green-500 text-black hover:text-white btn"
            type="submit"
          >
            Create
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
