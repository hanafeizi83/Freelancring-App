import React from 'react'

function Empty({ resourceName }) {
    return (
        <div className='flex items-center mt-5'>
            <h2 className='font-bold text-xl text-secondary-800'>  {resourceName} یافت نشد  </h2>
        </div>
    )
}

export default Empty
