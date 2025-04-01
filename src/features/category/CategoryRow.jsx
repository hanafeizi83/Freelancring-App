import React, { useState } from 'react'
import Table from '../../ui/Table'
import { HiTrash } from 'react-icons/hi';
import { MdEditDocument } from 'react-icons/md';

function CategoryRow({ category, index }) {
    const { title, description, type } = category;
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{type}</td>
            <td>
                <div className='flex gap-x-3 justify-center items-center'>
                    <button className='btn' onClick={() => setIsOpenDelete(true)}>
                        <HiTrash className='icon text-error' />
                    </button>
                    <button onClick={() => setIsOpenEdit(true)} className='btn'>
                        <MdEditDocument className='icon text-primary-800' />
                    </button>
                </div>
            </td>
        </Table.Row>
    )
}

export default CategoryRow

