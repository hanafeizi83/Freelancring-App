import React from 'react'
import useDeleteProject from '../features/projects/useDeleteProject'
import Loader from './Loader';


function ConfirmDelete({ title, onClose, cb ,isDeleting }) {
    const handleDleteProject = () => {
        cb();
    }
    return (
        <div className='space-y-4 mt-4' >
            <h2 className='text-right font-bold'>آیا از حذف پروژه {title} مطمئن هستید ؟</h2>
            <div className='flex items-center justify-between gap-x-4'>
                <button
                    onClick={onClose}
                    className='btn btn--primary flex-1'>لغو </button>
                {
                    isDeleting ? <Loader /> : <button
                        onClick={handleDleteProject}
                        className='border border-primary-800 flex-1 rounded-lg py-2 font-bold'
                    >تایید</button>
                }

            </div>
        </div>
    )
}

export default ConfirmDelete
