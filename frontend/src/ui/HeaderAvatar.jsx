import React from 'react'
import useUser from '../features/ahtentication/useUser'

function HeaderAvatar() {
    const { user } = useUser();
    let role = '';
    switch (user?.role) {
        case 'OWNER': role = 'کارفرما'; break;
        case 'FREELANCER': role = 'فریلنسر'; break;
        case 'ADMIN': role = 'ادمین'; break;
    }
    return (
        <div className='flex items-center gap-x-2'>
            <img className='w-9 h-9 rounded-full' src="/images/user.jpg" alt="" />
            <div>
                <h2 className='font-bold text-secondary-800 m-0'>{user?.name}</h2>
                <p className='text-sm text-secondary-500 m-0'>{role}</p>
            </div>
        </div>
    )
}

export default HeaderAvatar
