import React from 'react'

function Empty({ resourceName }) {
    return (
        <div className='flex items-center '>
            <h2 className='font-bold text-xl'>  {resourceName} یافت نشد  </h2>
        </div>
    )
}

export default Empty
