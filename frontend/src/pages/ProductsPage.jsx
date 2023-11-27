import { useEffect, useState } from "react";
import { getAllProductsRequest } from "../api/auth";
import Navbar from "../components/Navbar";
import ModalDetail from "../components/ModalDetail";

const ProductsPage = () => {
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getAllProductsRequest();
      setDataProduct({
        ...dataProduct,
        products: response.data,
      });
    })();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 w-full">
        {dataProduct.products?.map((product) => (
          <div
            key={product._id}
            className="card card-side bg-base-100 shadow-xl border mt-10 mx-4"
          >
            <figure>
              <img
                className="w-[20rem] h-full"
                src={`../../public/assets/imgProduct/${product.ref}.jpg`}
                alt={product.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>Precio: ${product.price}</p>
              <p>Color: {product.color}</p>
              <p>Talla: {product.size}</p>
              <p>Ref: {product.ref}</p>
              <p>Categoria: {product.category.name}</p>
              <div className="card-actions justify-end">
                {/* <ModalDetail ident={product._id} /> */}
                {/* <button
                  className="btn btn-primary"
                  onClick={() => handleChangePage(product._id)}
                >
                  Detalles
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
