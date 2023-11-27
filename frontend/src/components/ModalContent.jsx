
const ModalContent = (dataProduct) => {
  console.log(dataProduct.dataProduct?.product?.description);
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {dataProduct.dataProduct?.product?.title}
          </h3>
          <p className="py-4">{dataProduct.dataProduct?.product?.description}</p>
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
}

export default ModalContent