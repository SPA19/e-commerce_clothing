import React from "react";
import logo_main from "../assets/img/logo_main.jpg";
import { useAuth } from "../context/AuthContext";
import { logoutRequest } from "../api/auth";

const Navbar = () => {
  const { isAuthenticated, setisAuthenticated } = useAuth();

  const createFuncion = async () => {
    await logoutRequest();
    setisAuthenticated(false);
  };

  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a href="/home">
          <img className="w-56 h-[4rem]" src={logo_main} alt="Logo empresa" />
        </a>
      </div>
      <div className="flex-reverse">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-semibold" href="/products">
              Home
            </a>
          </li>
          <li>
            {isAuthenticated ? (
              <a
                className="text-lg font-semibold"
                onClick={createFuncion}
                href="/login"
              >
                Logout
              </a>
            ) : (
              <a className="text-lg font-semibold" href="/login">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
