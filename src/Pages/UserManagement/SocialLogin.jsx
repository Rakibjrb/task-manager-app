import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Google Login Success ...");
      })
      .catch((err) => {
        Swal.fire("Something went wrong !!!");
        console.log(err);
      });
  };

  return (
    <div className="px-5 flex gap-3 justify-center mt-7 pb-7">
      <button onClick={handleGoogleLogin}>
        <FcGoogle className="text-3xl" />
      </button>
      {/* <button>
        <FaGithub className="text-3xl text-white" />
      </button> */}
    </div>
  );
};

export default SocialLogin;
