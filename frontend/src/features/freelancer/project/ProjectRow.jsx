import React, { useState } from 'react'
import Table from '../../../ui/Table';
import truncateText from '../../../utils/truncateText';
import { toPersianNumbersWithComma } from '../../../utils/toPresionNumbers';
import showDatetoLocal from '../../../utils/showDatetoLocal';
import { HiViewGridAdd } from 'react-icons/hi';
import Modal from './../../../ui/Modal'
import CreateProposalForm from '../../proposals/CreateProposalForm';

const statusStyle = {
    OPEN: { label: 'باز', className: 'badge--success' },
    CLOSED: { label: 'بسته', className: 'badge--danger' }
}

function ProjectRow({ project, index }) {
    const { title, budget, deadline, status } = project;
    const [isOpen, setIsopen] = useState(false)
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(title, 20)}</td>
            <td>{toPersianNumbersWithComma(budget)}</td>
            <td>{showDatetoLocal(deadline)}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
            </td>
            <td>
                <button onClick={() => setIsopen(true)}>
                    <HiViewGridAdd className='icon text-primary-800' />
                </button>
                <Modal onClose={() => setIsopen(false)} open={isOpen} title={'افزودن درخواست'}>
                    <CreateProposalForm onClose={() => setIsopen(false)} projectId={project._id} />
                </Modal>
            </td>
        </Table.Row>
    )
}

export default ProjectRow
