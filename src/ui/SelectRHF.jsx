import React from 'react'

function SelectRHF({ label, required, name, errors, options ,register,validationSkma}) {
    return (
        <div className='space-y-2'>
            <label htmlFor={name} className='text-secondary-800'>
                {label} :
                {required && <span className='text-error'>*</span>}
            </label>
            <select name={name} className='textFailed' {...register(name ,validationSkma)}>
                {
                    options.map(item => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
            {errors && errors[name] && <p className='text-error'>{errors[name].message}</p>}
        </div>
    )
}

export default SelectRHF
