import React from 'react'
import Table from './../../ui/Table'
import CategoryRow from './CategoryRow'
import useCategories from './../../hook/useCategories'
import Loader from './../../ui/Loader'
import Empty from './../../ui/Empty'

function CategoryTable() {
    const { rawCategories: categories, isLoading } = useCategories();

    if (!categories) return <Empty resourceName={'دسته بندی'} />
    if (isLoading) return <Loader />
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>توضیحات</th>
                <th>نوع</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    categories && categories.map((category, index) => (
                    <CategoryRow key={category._id} category={category} index={index} />
                ))
                }

            </Table.Body>
        </Table>
    )
}

export default CategoryTable
