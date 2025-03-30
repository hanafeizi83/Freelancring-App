import React from 'react'
import Table from '../../../ui/Table';
import truncateText from '../../../utils/truncateText';
import { toPersianNumbersWithComma } from '../../../utils/toPresionNumbers';
import showDatetoLocal from '../../../utils/showDatetoLocal';
import { HiViewGridAdd } from 'react-icons/hi';

const statusStyle = {
    OPEN: { label: 'باز', className: 'badge--success' },
    CLOSED: { label: 'بسته', className: 'badge--danger' }
}

function ProjectRow({ project, index }) {
    const { title, budget, deadline, status } = project;
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
                <button>
                    <HiViewGridAdd className='icon text-primary-800' />
                </button>
            </td>
        </Table.Row>
    )
}

export default ProjectRow
