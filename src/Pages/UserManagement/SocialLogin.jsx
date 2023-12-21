import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div className="px-5 flex gap-3 justify-center mt-7 pb-7">
      <button>
        <FcGoogle className="text-3xl" />
      </button>
      <button>
        <FaGithub className="text-3xl text-white" />
      </button>
    </div>
  );
};

export default SocialLogin;
