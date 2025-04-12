import React from 'react'

function RadioInput({ label, name, register, validationSkma, value }) {
    return (
        <div className='flex items-center gap-2'>
            <input
                type="radio"
                name={name}
                {...register(name, validationSkma)}
                value={value}
                className='accent-primary-900 w-3 h-3'
            />
            <span>{label}</span>
        </div>
    )
}

export default RadioInput
