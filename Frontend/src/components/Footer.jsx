import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import Logo from "../assets/camera-svgrepo-com.svg";

const FooterCom = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 py-12 px-4 border-t-8 border-x-slate-900	">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mt-5">
            <Link to="/" className="flex items-center text-white">
              <span className="flex items-center justify-center bg-indigo-500 rounded-full w-10 h-10 text-white mr-2">
                <img src={Logo} alt="Logo Emblem" className="w-6 h-6" />
              </span>
              <span className="text-xl font-semibold">SnapShow</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            <div>
              <h4 className="text-white font-semibold">About</h4>
              <ul className="mt-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wallpaper
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-gray-300">
                    Snap Show
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Follow us</h4>
              <ul className="mt-2">
                <li>
                  <a
                    href="https://www.github.com/"
                    className="text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Legal</h4>
              <ul className="mt-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-gray-700" />
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tech Blog. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300">
              <BsFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsTwitter />
            </a>
            <a
              href="https://github.com/"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
