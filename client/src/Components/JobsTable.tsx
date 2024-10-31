import React, { useState } from 'react'

const JobsTable = ({ items }) => {
    const [isEdit, setIsEdit] = useState(false)
    console.log('itemssss', items)
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Description</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {items && items.map((item, index) => {
                        return (
                            <tr key={item?._id} >

                                <td>{item?.title || 'no title found'}</td>
                                <td >{(item.description.length > 50 && !isEdit) ? `${item.description.substring(0, 50)}...` : item.description}</td>
                                <td onClick={() => setIsEdit(prev => !prev)} >Blue</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default JobsTable