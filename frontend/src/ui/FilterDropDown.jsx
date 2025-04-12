import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

function FilterDropDown({ name, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
        searchParams.set(name, e.target.value);
        setSearchParams(searchParams)
    }
    return (
        <Select name={name} options={options} onChange={handleChange} />
    )
}

export default FilterDropDown
