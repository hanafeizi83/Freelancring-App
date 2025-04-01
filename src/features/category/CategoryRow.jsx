import React, { useState } from 'react'
import Table from '../../ui/Table'
import { HiTrash } from 'react-icons/hi';
import { MdEditDocument } from 'react-icons/md';
import Modal from './../../ui/Modal'
import ConfirmDelete from './../../ui/ConfirmDelete'
import useCategoryDelete from './useCategoryDelete';
import CreateCategoryForm from './CreateCategoryForm';

function CategoryRow({ category, index }) {
    const { title, description, type } = category;
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const { isDeleting, deleteCategory } = useCategoryDelete();

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{type}</td>
            <td>
                <div className='flex gap-x-3 justify-center items-center'>
                    <>
                        <button className='btn' onClick={() => setIsOpenDelete(true)}>
                            <HiTrash className='icon text-error' />
                        </button>
                        <Modal onClose={() => setIsOpenDelete(false)} open={isOpenDelete} title={`حذف دسته بندی ${category.title}`}>
                            <ConfirmDelete
                                cb={() => deleteCategory(category._id, {
                                    onSuccess: () => {
                                        onClose();
                                    }
                                })}
                                title={category.title}
                                onClose={() => setIsOpenDelete(false)}
                                isDeleting={isDeleting}
                            />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsOpenEdit(true)} className='btn'>
                            <MdEditDocument className='icon text-primary-800' />
                        </button>
                        <Modal onClose={() => setIsOpenEdit(false)} open={isOpenEdit} title={`ویرایش دسته بندی ${category.title}`}>
                            <CreateCategoryForm onClose={() => setIsOpenEdit(false)} category={category} />
                        </Modal>
                    </>

                </div>
            </td>
        </Table.Row>
    )
}

export default CategoryRow

