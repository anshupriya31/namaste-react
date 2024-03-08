import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Image not loading" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 m-10">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link className="remove-link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="remove-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="remove-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="remove-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
