import React, { useEffect, useState } from 'react'

type ConfirmationProps = {
    showModal: boolean,
    closeModal: () => void
}

const ConfirmationModal = ({ showModal, closeModal, confirmationText }: ConfirmationProps) => {
    useEffect(() => {
        if (showModal) {
            document.getElementById('my_modal_1').showModal()
        }

    }, [showModal])

    const handleClose = () => {
        closeModal();
        const dialog = document.getElementById('my_modal_1') as HTMLDialogElement;
        dialog.close();
    };

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 onClick={() => {
                    return document.getElementById('my_modal_1').close()

                }} className="font-bold text-lg">{confirmationText?.title || ''}</h3>
                <p className="py-4">{confirmationText?.content || 'Save Changes?'}</p>
                {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                <div className="modal-action">
                    <form method="dialog" className='' >
                        {/* if there is a button in form, it will close the modal */}
                        <button type='submit' className='btn' > delete </button>
                        <button className="btn" onClick={(handleClose)} >Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    )
}

export default ConfirmationModal