import React from 'react'
import Table from './../../../ui/Table'
import useProjects from './useProjects'
import ProjectRow from './ProjectRow';
import Loader from './../../../ui/Loader'
import Empty from '../../../ui/Empty';
function ProjectsTable() {
    const { projects={}, isLoading } = useProjects();
    if (!projects.length) return <Empty resourceName={'پروژه ایی'} />
    if (isLoading) return <Loader />
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه </th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    projects && projects.map((project, index) => (
                        <ProjectRow key={project._id} project={project} index={index} />
                    ))
                }

            </Table.Body>
        </Table>
    )
}

export default ProjectsTable
