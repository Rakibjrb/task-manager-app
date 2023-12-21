import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import { FaGithub } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Google Login Success ...");
        navigate("/");
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
