import { useState } from "react";
import { getProductByid } from "../api/auth";

const ModalDetail = (ident) => {
  const [dataProduct, setDataProduct] = useState({});

  const handleDtailProduct = async () => {
    document.getElementById("my_modal_1").showModal();
    console.log(ident)
    //const res = await getProductByid(ident);
    setDataProduct({
      ...dataProduct,
      
    });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleDtailProduct}>
        Detalles
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{dataProduct.title}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ModalDetail;
