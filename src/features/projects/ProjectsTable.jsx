import React from 'react'
import { HiPlus } from 'react-icons/hi'
import useOwnerProjects from './useOwnerProjects'

function ProjectsTable() {
    const { isLoading, projects = [] } = useOwnerProjects();
    console.log(projects);


    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-base'>لیست پروژه ها</h2>
                <button className='btn btn--primary flex items-center gap-3 font-bold'>
                    <HiPlus className='w-5 h-5 font-bold'/>
                    <span>اضافه کردن پروژه</span>
                </button>
            </div>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    {
                        projects && projects.map((project, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{project.title}</td>
                                <td>{project.description}</td>
                                <td>{project.deadline}</td>
                                <td>{project.budget}</td>
                                <td>{project.category.title}</td>
                                <td>{'tags'}</td>
                                <td>{project.freelance?.name || '-'}</td>
                                <td>{project.status}</td>
                                <td>...</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ProjectsTable

