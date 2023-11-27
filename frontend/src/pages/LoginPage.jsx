import { useState } from "react";
import LoginUser from "../components/LoginUser";
import LoginAdmin from "../components/LoginAdmin";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";


const LoginPage = () => {
  const { changeAdmin } = useAuth();

  return (
    <div>
    <Navbar/>
      {changeAdmin ? (
        <LoginAdmin />
      ) : (
        <LoginUser/>
      )}
    </div>
  );
};

export default LoginPage;
