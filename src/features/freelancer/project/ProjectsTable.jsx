import React from 'react'
import Table from './../../../ui/Table'
import useProjects from './useProjects'
import ProjectRow from './ProjectRow';
function ProjectsTable() {
    const { projects, isLoading } = useProjects();
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
