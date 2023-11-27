import { useState } from "react";
import { getProductByid } from "../api/auth";
import ModalContent from "./ModalContent";

const ModalDetail = (id) => {
  const [dataProduct, setDataProduct] = useState({});

  const handleDetailProduct = async () => {
    document.getElementById("my_modal_1").showModal();
    const res = await getProductByid(id.ident);
    setDataProduct({
      ...dataProduct,
      product: res.data,
    });

  };
  return (
    <div>
      <button className="btn btn-primary" onClick={handleDetailProduct}>
        Detalles
      </button>
      {/* <ModalContent dataProduct={dataProduct}/> */}
    </div>
  );
};

export default ModalDetail;
