import React from 'react'

function TextFailed({ label, name, type = 'text', register, errors, validationSkma, required }) {

    return (
        <div className='flex flex-col space-y-2'>
            <label htmlFor={name} className='text-secondary-800'>
                {label} :
                {required && <span className='text-error'>*</span>}

            </label>
            <input
                type={type}
                className='textFailed'
                id={name}
                name={name}
                {...register(name, validationSkma)}
            />
            {errors && errors[name] && <p className='text-error'>{errors[name].message}</p>}
        </div>
    )
}

export default TextFailed
