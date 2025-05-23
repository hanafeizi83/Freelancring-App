import React from 'react'

function Select({ name, options, onChange }) {
    return (
        <div className='w-52 flex items-center text-xs'>
            <select className='textFailed w-64 py-2' name={name} onChange={onChange}>
                {
                    options.map(item => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
        </div>

    )
}

export default Select
