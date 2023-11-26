import { useState } from "react";
import LoginUser from "../components/LoginUser";
import LoginAdmin from "../components/LoginAdmin";

const LoginPage = () => {
  const [stateAdm, setStateAdm] = useState(false);
  return (
    <div>
      {stateAdm ? (
        <LoginAdmin />
      ) : (
        <LoginUser stateAdm={stateAdm} setStateAdm={setStateAdm} />
      )}
    </div>
  );
};

export default LoginPage;
