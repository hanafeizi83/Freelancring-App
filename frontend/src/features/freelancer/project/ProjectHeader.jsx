import React from 'react'
import useCategories from '../../../hook/useCategories'
import FilterDropDown from '../../../ui/FilterDropDown'
import Filter from '../../../ui/filter'

const sortOptions = [
    { label: "مرتب سازی (قدیمی ترین)", value: 'earliest' },
    { label: "مرتب سازی (جدید ترین)", value: 'latest' }
]

const statusOptions = [
    { label: 'همه', value: 'ALL' },
    { label: 'باز', value: 'OPEN' },
    { label: 'بسته', value: 'CLOSED' },

]
function ProjectHeader() {
    const { transformedCategories } = useCategories()
    return (
        <div className='flex  lg:items-center lg:flex-row lg:justify-between lg:text-secondary-700 mb-8 flex-col md:items-start'>
            <h1 className="text-lg font-bold md:text-right">لیست پروژه ها</h1>
            <div className='flex lg:gap-x-8 lg:flex-row lg:items-center md:gap-x-3 md:flex-row md:items-center  items-start gap-y-3 flex-col'>
                <FilterDropDown
                    filterField="category"
                    options={[
                        { label: 'دسته بندی (همه)', value: 'ALL' }
                        ,
                        ...transformedCategories]}
                />
                <FilterDropDown name='sort' options={sortOptions} />
                <Filter options={statusOptions} filterField='status' />
            </div>

        </div>

    )
}

export default ProjectHeader
