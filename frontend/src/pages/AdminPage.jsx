import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const AdminPage = () => {
  const { register, handleSubmit } = useForm();
  const [createProduct, setCreateProduct] = useState(false);
  const { productNew } = useAuth();

  const handlChangeCreate = () => {
    setCreateProduct(!createProduct);
  };
  const onSubmit = handleSubmit((values) => {
    console.log(values);
    productNew(values);
  });
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-left text-5xl font-bold m-10">
          Puedes Editar y crear tus porductos
        </h1>
        <div>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 btn-secondary">
            Editar Producto
          </button>
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 btn-secondary"
            onClick={handlChangeCreate}
          >
            Crear un nuevo producto
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg m-2 btn-secondary">
            Eliminar
          </button>
        </div>
        <div>
          {createProduct && (
            <form className="card-body mt-8" onSubmit={onSubmit}>
              <div className="form-control my-2">
                <div className="label">
                  <h1 className="text-2xl font-semibold pb-4 w-96">
                    Crear nuevo Producto
                  </h1>
                </div>
                <input
                  type="text"
                  placeholder="titulo"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("title", { required: true })}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Descripcion"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("description")}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Referencia"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("ref", { required: true })}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="number"
                  placeholder="Precio"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Talla"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("size", { required: true })}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Color"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("color", { required: true })}
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Categoria"
                  className="input hover:input-bordered h-14 text-lg bg-blue-50"
                  required
                  {...register("category", { required: true })}
                />
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-secondary">
                  Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
