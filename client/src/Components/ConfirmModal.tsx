import React, { useState } from "react";

function ConfirmModal() {

    const [confirm,setConfirm] = useState(false)
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      {/* Open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>setConfirm(true)} className="btn">Yes </button>
            <button onClick={()=>setConfirm(false)} className="btn">No </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ConfirmModal;
