import React, { useState } from 'react'
import Modal from '../../ui/Modal'
import CreeateProjectForm from './CreeateProjectForm'
import { HiPlus } from 'react-icons/hi'

function ProjectsHeader() {
    const [isOpenCreate, setIsOpenCreeate] = useState(false);

    return (
        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-base text-secondary-800'>لیست پروژه ها</h2>
            <button
                className='btn btn--primary flex items-center text-secondary-0 gap-3 font-bold'
                onClick={() => setIsOpenCreeate(true)}>
                <HiPlus className='w-5 h-5 font-bold' />
                <span>اضافه کردن پروژه</span>
            </button>
            <Modal open={isOpenCreate} onClose={() => setIsOpenCreeate(false)} title={'افزودن پروژه جدید'}>
                <CreeateProjectForm onClose={() => setIsOpenCreeate(false)} />
            </Modal>
        </div>
    )
}

export default ProjectsHeader
