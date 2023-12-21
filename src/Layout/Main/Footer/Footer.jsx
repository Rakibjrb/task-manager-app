import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="pt-20 pb-10 bg-[#424141] mt-32">
        <footer className="max-w-7xl mx-auto px-4 xl:px-0 footer text-base-content">
          <nav>
            <header className="footer-title text-xl">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title text-xl">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                  required
                />
                <button className="btn bg-green-500 join-item text-black uppercase hover:text-white">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <div className="bg-[#424141] pb-20">
        <div className="footer items-center max-w-7xl mx-auto px-4 xl:px-0">
          <p className="text-xl">Copyright © 2023 - All right reserved</p>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="">
              <FaFacebookSquare className="text-3xl" />
            </a>
            <a href="">
              <FaInstagramSquare className="text-3xl" />
            </a>
            <a href="">
              <FaTwitterSquare className="text-3xl" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
