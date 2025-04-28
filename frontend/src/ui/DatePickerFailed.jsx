import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function DatePickerFailed({ label, value, onChange, name }) {
    return (
        <div className='flex flex-col'>
            <label className='text-secondary-800'>{label}</label>
            <DatePicker
                containerClassName='w-full'
                inputClass='textFailed'
                value={value}
                onChange={onChange}
                format='YYYY/MM/DD'
                calendar={persian}
                locale={persian_fa}
            />
        </div>
    )
}

export default DatePickerFailed
