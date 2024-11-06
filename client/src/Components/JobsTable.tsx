import React, { useState } from 'react'

interface jobsTableProp {
    items: jobObject[]
}

const JobsTable = ({ items }: jobsTableProp) => {
    const [isEdit, setIsEdit] = useState('')
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
                    {items && items.map((item) => {
                        return (
                            <tr key={item?._id} >

                                <td>{item?.title || 'no title found'}</td>
                                <td >{(item.description.length > 50 && isEdit !== item._id) ? `${item.description.substring(0, 50)}...` : item.description}</td>
                                <td onClick={() => setIsEdit(prev => prev.length ? '' : item._id)} >Blue</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default JobsTable