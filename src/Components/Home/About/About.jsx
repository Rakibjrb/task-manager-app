import welcomeImage from "../../../assets/about/welcome-image.png";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-0 text-white mt-20">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex-1" data-aos="fade-right" data-aos-duration="800">
          <img
            className="md:h-[450px]"
            src={welcomeImage}
            alt="welcome image"
          />
        </div>
        <div
          className="font-playpen flex-1"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h4 className="text-green-500 text-center lg:text-left">#about</h4>
          <h2
            className="text-4xl font-bold mt-3 mb-6 text-center lg:text-left"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            About us
          </h2>
          <p className="text-justify lg:text-left">
            Welcome to Task Legend, your digital companion on the path to
            enhanced productivity and unparalleled organization. We are here to
            revolutionize the way you manage your tasks, so you can make the
            most of your precious time. With our user-friendly platform, you
            will effortlessly create, prioritize, and track your to-do lists,
            ensuring that no task is ever forgotten.
          </p>
          <p className="mt-3 text-justify lg:text-left">
            Get ready to transform the way you manage tasks and achieve your
            goals. Join us on the journey to a more productive you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
