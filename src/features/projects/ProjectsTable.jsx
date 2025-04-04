import React, { useState } from 'react'
import useOwnerProjects from './useOwnerProjects'
import Table from '../../ui/Table';
import ProjectsRow from './ProjectsRow';
import Loader from '../../ui/Loader';
import Empty from './../../ui/Empty'

function ProjectsTable() {
    const { isLoading, projects = [] } = useOwnerProjects();

    if (!projects.length) return <Empty resourceName='پروژه ایی' />
    if (isLoading) return <Loader />
    return (
        <div className='overflow-x-auto'>

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
                    <th>جزئیات</th>
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

