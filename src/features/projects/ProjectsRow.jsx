import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText';
import showDatetoLocal from '../../utils/showDatetoLocal';
import { toPersianNumbersWithComma } from '../../utils/toPresionNumbers';
import { HiTrash } from 'react-icons/hi';
import { MdEditDocument } from 'react-icons/md';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import CreeateProjectForm from './CreeateProjectForm';
import ToggleProjectStatus from './ToggleProjectStatus';

function ProjectsRow({ project, index }) {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const { title, description, deadline, budget, category, freelancer, tags, status } = project;
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(title, 20)}</td>
            <td>{truncateText(description, 20)}</td>
            <td>{showDatetoLocal(deadline)}</td>
            <td>{toPersianNumbersWithComma(budget)}</td>
            <td>{category.title}</td>
            <td>
                <div className='flex flex-wrap items-center max-w-[115px] gap-2 p-1'>
                    {tags.map(tag => (
                        <span className='badge badge--secondary' key={tag}>{tag}</span>
                    ))}
                </div>
            </td>
            <td>{freelancer?.name || '-'}</td>
            <td>
                    <ToggleProjectStatus project={project}/>
            </td>
            <td>
                <div className='flex gap-x-3'>
                    <>
                        <button className='btn' onClick={() => setIsOpenDelete(true)}>
                            <HiTrash className='icon text-error' />
                        </button>
                        <Modal onClose={() => setIsOpenDelete(false)} open={isOpenDelete} title={`حذف پروژه ${project.title}`}>
                            <ConfirmDelete project={project} onClose={() => setIsOpenDelete(false)} />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsOpenEdit(true)} className='btn'>
                            <MdEditDocument className='icon text-primary-800' />
                        </button>
                        <Modal open={isOpenEdit} onClose={() => setIsOpenEdit(false)} title={`ویرایش پروژه ${project.title}`}>
                            <CreeateProjectForm project={project} onClose={() => setIsOpenEdit(false)} />
                        </Modal>
                    </>
                </div>

            </td>
        </Table.Row>
    )
}

export default ProjectsRow
