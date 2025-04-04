import React from 'react'
import useUser from '../features/ahtentication/useUser'
import HeaderAvatar from './HeaderAvatar';
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  console.log(user, isLoading);


  return (
    <div className={`bg-secondary-0 col-span-1`}>
      <div className={`container py-1 flex items-center justify-between xl:max-w-screen-lg ${!user && isLoading ? 'blur-sm opacity-70' : ''}`}>
        {
          user ? <HeaderAvatar /> :
            <button className='btn btn--primary w-24' onClick={() => navigate('/auth')}>
              ورود
            </button>
        }
        <HeaderMenu />
      </div>

    </div>
  )
}

export default Header
