import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({ options, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentValue = searchParams.get(filterField) || options.at(0).value

    const handleClick = (e) => {
        searchParams.set(filterField, e.target.value);
        setSearchParams(searchParams)
    }
    return (
        <div className='flex items-center gag-x-3 text-xs'>
            <span>وضعیت</span>
            <div className='flex items-center gap-x-2  border border-secondary-100 bg-secondary-0 rounded-xl p-1'>
                {
                    options.map(item => {
                        const isActive = currentValue === item.value;
                        return < button
                            className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                                ${isActive ? "bg-primary-900 text-white" : "bg-secondary-0 text-secondary-800"}
                                `}
                            value={item.value}
                            key={item.value}
                            onClick={handleClick}
                        >
                            {item.label}
                        </button>
                    }

                    )
                }
            </div>
        </div >
    )
}

export default Filter
