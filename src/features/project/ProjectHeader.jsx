import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import useGoBack from '../../hook/useGoBack'

function ProjectHeader({ project = {} }) {
  const goBack = useGoBack();
  return (
    <div className='text-right flex items-center gap-x-6'>
      <button onClick={() => goBack()}>
        <HiArrowRight className='icon' />
      </button>
      <h2 className='font-bold text-base text-[1.1rem]'>در خواست های پروژه {project.title}</h2>
    </div>
  )
}

export default ProjectHeader

