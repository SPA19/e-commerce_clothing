import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const { register, handleSubmit } = useForm();
  const { signupAdm, isAuthenticated, changeAdmin, setChangeAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/admin/profile");
  }, [isAuthenticated]);

  const handlChangeUser = () => {
    setChangeAdmin(!changeAdmin);
  };

  const onSubmit = handleSubmit((values) => {
    signupAdm(values);
  });

  return (
    <div className="hero min-h-[45rem] bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card card-body p-8">
          <div className="flex flex-col items-start">
            <h1 className="text-left text-5xl font-bold">
              ¡Bienvenido Administrador!
            </h1>
            <p className="text-justify text-xl text-gray-500 font-semibold py-10 w-[50rem]">
              Te damos la bienvenida de nuevo a nuetra parte de administrador,
              desde aqui podras crear tus productos y poderlos administrar de
              forma optima para que tu pagina tenga la mejor forma siendo
              agradable para ti y para tus clientes.
            </p>
          </div>
          <div className="flex flex-col items-start"></div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-xl border-2 bg-base-100">
          <form className="card-body" onSubmit={onSubmit}>
            <div className="form-control my-2">
              <div className="label">
                <h1 className="text-2xl font-semibold pb-4">
                  Inicio de sesión admin
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
              onClick={handlChangeUser}
            >
              Usuario
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
