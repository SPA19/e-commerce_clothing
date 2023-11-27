import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const LoginAdmin = () => {
  const { changeAdmin, setChangeAdmin } = useAuth();
  useEffect(() => {
    setChangeAdmin(!changeAdmin);
  }, []);

  return <div>LoginAdmin</div>;
};

export default LoginAdmin;
