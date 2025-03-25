import React from 'react'
import RadioInput from './RadioInput'

function RadioGroup({ options, label, name, value, register, validationSkma }) {
    return (
        <div className='flex items-center gap-10'>
            {options.map(item => (
                <RadioInput
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    name={name}
                    register={register}
                    validationSkma={validationSkma}
                />
            ))}
        </div>
    )
}

export default RadioGroup

