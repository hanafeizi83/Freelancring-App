import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

function Logout() {
    return (
        <button>
            <HiOutlineLogout className='w-6 h-10 text-error'/>
        </button>
    )
}

export default Logout
