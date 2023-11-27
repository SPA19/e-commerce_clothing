import { createContext, useState, useContext } from "react";
import {
  createProductRequest,
  loginAdminRequest,
  loginUserRequest,
} from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used withing an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [changeAdmin, setChangeAdmin] = useState(false);

  const signup = async (user) => {
    try {
      const res = await loginUserRequest(user);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const signupAdm = async (user) => {
    try {
      const res = await loginAdminRequest(user);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const productNew = async (product) => {
    try {
      const res = await createProductRequest(product);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const data = {
    signupAdm,
    signup,
    productNew,
    user,
    isAuthenticated,
    setisAuthenticated,
    changeAdmin,
    setChangeAdmin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
