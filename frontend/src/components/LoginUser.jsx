import { useForm } from "react-hook-form";
import { loginUserRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const { signup, isAuthenticated, changeAdmin, setChangeAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/products");
  }, [isAuthenticated]);

  const handlChangeAdm = () => {
    setChangeAdmin(!changeAdmin);
    navigate("/admin/login");
  };

  const handleCreateCount = () => {
    navigate("/register");
  };

  const onSubmit = handleSubmit((values) => {
    signup(values);
  });
  return (
    <div className="hero min-h-[45rem] bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card card-body p-8">
          <div className="flex flex-col items-start">
            <h1 className="text-left text-5xl font-bold">¡Bienvenido!</h1>
            <p className="text-justify text-xl text-gray-500 font-semibold py-10 w-[50rem]">
              Te damos la bienvenida a el inicio de sesion de nuestra pagina
              para vivir mejor la experiencia y poder optener tus productos te
              invitamos a crear una cuenta o si ya tienes una puedes iniciar
              sesion, que esperas para vivir la experiencia.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <button
              type="button"
              className="btn btn-lg btn-secondary w-[18rem]"
              onClick={handleCreateCount}
            >
              Crear Cuenta
            </button>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-xl border-2 bg-base-100">
          <form className="card-body" onSubmit={onSubmit}>
            <div className="form-control my-2">
              <div className="label">
                <h1 className="text-2xl font-semibold pb-4">
                  Inicio de sesión
                </h1>
              </div>
              <input
                type="email"
                placeholder="Correo"
                className="input hover:input-bordered h-14 text-lg bg-blue-50"
                required
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control my-2">
              <input
                type="password"
                placeholder="Contraseña"
                className="input hover:input-bordered h-14 text-lg bg-blue-50"
                required
                {...register("password", { required: true })}
              />
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-secondary">
                Entrar
              </button>
            </div>
          </form>
          <div className="flex place-content-end mb-4 mr-[1.5rem]">
            <button
              type="button"
              className="btn btn-sm btn-secondary btn-outline w-[7rem]"
              onClick={handlChangeAdm}
            >
              Admin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
