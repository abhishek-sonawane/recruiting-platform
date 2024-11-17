import React, { useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal';
import { FaRegSave } from "react-icons/fa";

interface jobsTableProp {
    items: jobObject[]
}

const JobsTable = ({ items }: jobsTableProp) => {
    const [isEdit, setIsEdit] = useState('')
    const [isDelete, setIsDelete] = useState('')
    const [DialogState, setDialogState] = useState(false)
    console.log('itemssss', items)

    const handleModalState = (dialogState) => {
        if (dialogState) {
            return document.getElementById('my_modal_1').show()
        } else {
            // return document.getElementById('my_modal_1').close()
        }
    }


    const handleEdit = (item: jobObject) => {
        setDialogState(true)
        setIsEdit(prev => {
            if (prev == item._id) {
                return ''
            } else {
                return item._id
            }
        })
    }

    const handleDelete = (id: string) => {
        setDeleteDialog(true)
    }

    const handleSave = () => {
        const changesState = window.confirm('Save Changes ?')
        console.log('change state', changesState)
        if (changesState) {
            console.log('saved')
            setIsEdit('')
        } else {
            setIsEdit('')
        }

    }


    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Description</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {items && items.map((item) => {
                        return (
                            <tr key={item?._id} >

                                <td>{item?.title || 'no title found'}</td>
                                {
                                    // (isEdit && isEdit == item._id) ?
                                    //     <td >
                                    //         <textarea autoFocus className={`w-full max-h-32 border border-slate-200 rounded-md `} name="" id="">
                                    //             {item.description}
                                    //         </textarea>
                                    //     </td> :
                                    <td >
                                        {(item.description.length > 90) ? `${item.description.substring(0, 90)}...` : item.description}
                                    </td>
                                }

                                {
                                    // (isEdit && isEdit == item._id)
                                    //     ?
                                    //     <td onClick={() => handleSave(item)} >
                                    //         <FaRegSave size={19} />
                                    //     </td>
                                    //     :
                                    <td onClick={() => handleEdit(item)} >
                                        <FiEdit2 size={18} />
                                    </td>
                                }

                                <td onClick={() => handleDelete(item._id)} >
                                    <MdOutlineDelete size={17} />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <dialog modalState={handleModalState(DialogState)} id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 onClick={() => {
                        // return document.getElementById('my_modal_1').close()

                    }} className="font-bold text-lg">hi</h3>
                    <p className="py-4">save changes</p>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="modal-action">
                        <form method="dialog" className='' >
                            {/* if there is a button in form, it will close the modal */}
                            <button type='submit' className='btn' > delete </button>
                            <button className="btn" onClick={() => {

                            }} >Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* confirmation modal */}
            {/* {
                DialogState
                &&
                <ConfirmationModal
                    closeModal={() => setDialogState(false)}
                    type={isEdit ? 'Edit' : 'Delete'}
                    confirmationText={isEdit ? { content: 'Save Changes?' } : {
                        title: 'Delete Job',
                        content: 'Do you want to delete this job?'
                    }}
                />
            } */}
        </div>
    )
}

export default JobsTable