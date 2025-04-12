import React, { useRef } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import useOutsideClick from '../hook/useOutsideClick';

function Modal({ onClose, open, title, children }) {
    const ref = useOutsideClick(onClose)
    return (
        open &&
        <div className='backdrop-blur-md w-full z-10 h-screen flex items-center justify-center absolute top-0 left-0'>
            <div ref={ref} className='bg-secondary-0 rounded-md w-[40%] p-4 max-h-[calc(100vh-2rem)] overflow-y-auto'>
                <div className='flex items-center justify-between pb-2 border-b border-b-secondary-400'>
                    <h2 className='font-bold text-secondary-800'>{title}</h2>
                    <button onClick={onClose}>
                        <HiOutlineX className='icon text-secondary-800' />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
