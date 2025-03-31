import React from 'react'
import useCategories from '../../../hook/useCategories'
import FilterDropDown from '../../../ui/FilterDropDown'
import Filter from '../../../ui/filter'

const sortOptions = [
    { label: 'قدیمی ترین ', value: 'earliest' },
    { label: 'جدید ترین', value: 'latest' }
]

const statusOptions = [
    { label: 'همه', value: 'ALL' },
    { label: 'باز', value: 'OPEN' },
    { label: 'بسته', value: 'CLOSED' },

]
function ProjectHeader() {
    const { transformedCategories } = useCategories()
    return (
        <div className='flex items-center gap-x-10'>
            <FilterDropDown
                name='category'
                options={[
                    { label: 'دسته بندی (همه)', value: 'ALL' }
                    ,
                    ...transformedCategories]}
            />
            <FilterDropDown
                name='sort'
                options={sortOptions}
            />
            <Filter options={statusOptions} filterField='status' />
        </div>

    )
}

export default ProjectHeader
