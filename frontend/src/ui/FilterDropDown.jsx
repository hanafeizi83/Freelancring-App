import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

function FilterDropDown({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterValue = searchParams.get(filterField) || "";

    const handleChange = (e) => {
        searchParams.set(name, e.target.value);
        setSearchParams(searchParams)
    }
    return (
        <Select options={options} value={filterValue} onChange={handleChange} />
    )
}

export default FilterDropDown
