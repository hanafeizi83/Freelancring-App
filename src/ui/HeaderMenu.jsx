import React from 'react'
import DarkMode from './DarkMode'
import Logout from '../features/ahtentication/Logout'
import { useNavigate } from 'react-router-dom'

function HeaderMenu() {
    const navigate=useNavigate();
    return (
        <>
            <ul className='flex items-center gap-x-10 list-none'>
                <li
                    className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
                    onClick={()=> navigate('/')}
                >خانه</li>
                <li
                    className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
                    onClick={()=> navigate('/about')}
                >درباره ما</li>
                <li
                    className='HeaderLi HeaderLiAfter HeaderLiAfterHover'
                    onClick={()=> navigate('/conect')}
                >تماس با ما</li>
            </ul>
            <ul className='flex items-center gap-x-4 list-none'>
                <li className='flex'>
                    <DarkMode />
                </li>
                <li className='flex'>
                    <Logout />
                </li>
            </ul>
        </>
    )
}

export default HeaderMenu
