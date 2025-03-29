import React from 'react'
import useUser from '../features/ahtentication/useUser'
import HeaderAvatar from './HeaderAvatar';
import HeaderMenu from './HeaderMenu';

function Header() {
  const { isLoading } = useUser();


  return (
    <div className={`bg-secondary-0 col-span-1`}>
      <div className={`container flex items-center justify-between xl:max-w-screen-lg ${isLoading ? 'blur-sm opacity-70' : ''}`}>
        <HeaderAvatar />
        <HeaderMenu />
      </div>

    </div>
  )
}

export default Header
