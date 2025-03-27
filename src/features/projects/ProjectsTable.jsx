import React from 'react'
import { HiPlus } from 'react-icons/hi'
import useOwnerProjects from './useOwnerProjects'
import Table from '../../ui/Table';
import ProjectsRow from './ProjectsRow';

function ProjectsTable() {
    const { isLoading, projects = [] } = useOwnerProjects();
    console.log(projects);


    return (
        <div className='overflow-x-auto'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-base'>لیست پروژه ها</h2>
                <button className='btn btn--primary flex items-center gap-3 font-bold'>
                    <HiPlus className='w-5 h-5 font-bold' />
                    <span>اضافه کردن پروژه</span>
                </button>
            </div>
            <Table>
                <Table.Header>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>توضیحات</th>
                    <th>ددلاین</th>
                    <th>بودجه</th>
                    <th>دسته بندی</th>
                    <th>تگ ها</th>
                    <th>فریلنسر</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </Table.Header>
                <Table.Body>
                    {
                        projects && projects.map((project, index) => (
                            <ProjectsRow key={project._id} project={project} index={index} />
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}

export default ProjectsTable

