import { Link } from "react-router-dom";
import Logo from "../assets/camera-svgrepo-com.svg";
import { AiOutlineHome, AiOutlineSave } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4  my-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white">
          <span className="flex items-center justify-center bg-indigo-500 rounded-full w-10 h-10 text-white mr-2">
            <img src={Logo} alt="Logo Emblem" className="w-6 h-6" />
          </span>
          <span className="text-xl font-semibold">SnapShow</span>
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-white flex items-center hover:text-gray-300"
            >
              <AiOutlineHome className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/saved-images"
              className="text-white flex items-center hover:text-gray-300"
            >
              <AiOutlineSave className="mr-1" /> Saved
            </Link>
          </li>
          {/* //darkmod */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
