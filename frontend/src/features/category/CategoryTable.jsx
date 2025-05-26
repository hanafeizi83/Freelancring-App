import React, { useState } from 'react'
import Table from './../../ui/Table'
import CategoryRow from './CategoryRow'
import useCategories from './../../hook/useCategories'
import Loader from './../../ui/Loader'
import Empty from './../../ui/Empty'
import { HiPlus } from 'react-icons/hi'
import Modal from '../../ui/Modal'
import CreateCategoryForm from './CreateCategoryForm'

function CategoryTable() {
    const { rawCategories: categories, isLoading } = useCategories();
    const [isOpenCreate, setIsOpenCreeate] = useState();

    // if (!categories) return <Empty resourceName={'دسته بندی'} />
    if (isLoading) return <Loader />
    return (
        <div className=''>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-base text-secondary-800'>لیست دسته بندی ها</h2>
                <button
                    className='btn btn--primary flex items-center text-secondary-0 gap-3 font-bold'
                    onClick={() => setIsOpenCreeate(true)}>
                    <HiPlus className='w-5 h-5 font-bold' />
                    <span>اضافه کردن دسته بندی</span>
                </button>
                <Modal open={isOpenCreate} onClose={() => setIsOpenCreeate(false)} title={'افزودن دسته بندی جدید'}>
                    <CreateCategoryForm onClose={() => setIsOpenCreeate(false)} />
                </Modal>
            </div>
            {
                !categories.length ? <Empty resourceName={'دسته بندی'} /> : <Table>
                    <Table.Header>
                        <th className='text-center'>#</th>
                        <th className='text-center'>عنوان</th>
                        <th className='text-center'>توضیحات</th>
                        <th className='text-center'>نوع</th>
                        <th className='text-center'>عملیات</th>
                    </Table.Header>
                    <Table.Body>
                        {
                            categories && categories.map((category, index) => (
                                <CategoryRow key={category._id} category={category} index={index} />
                            ))
                        }

                    </Table.Body>
                </Table>
            }

        </div>
    )
}

export default CategoryTable
