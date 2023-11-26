import { createContext, useState, useContext } from "react";
import { loginUserRequest } from "../api/auth";

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
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const signup = async (user) => {
    try {
      const res = await loginUserRequest(user);
      console.log(res.data);
      setUser(res.data);
      setisAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
