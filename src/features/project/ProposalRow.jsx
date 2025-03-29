import React from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../utils/toPresionNumbers'

const statusStyle = [
    { label: 'رد شده ', className: 'badge--danger' },
    { label: 'در انتظار تایید ', className: 'badge--secondary' },
    { label: 'تایید شده', className: 'badge--success' }
]

function ProposalRow({ proposal, index }) {
    const { description, price, duration, user, status } = proposal
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(description, 20)}</td>
            <td>{toPersianNumbersWithComma(price)}</td>
            <td>{duration}روز</td>
            <td>{user?.name}</td>
            <td>
                {
                    <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
                }
            </td>
            <td>
                <button className='btn btn--secondary'>
                    تغییر وضعیت
                </button>
            </td>
        </Table.Row >
    )
}

export default ProposalRow
