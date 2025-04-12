import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import useLogout from './useLogout'
import Loader from './../../ui/Loader'

function Logout() {
    const { isLoading, logout } = useLogout();
    if (isLoading) return <Loader />
    return (
        <button onClick={logout}>
            <HiOutlineLogout className='w-6 h-10 text-error' />
        </button>
    )
}

export default Logout
