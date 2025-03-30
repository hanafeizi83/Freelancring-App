import React from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../utils/toPresionNumbers'
import showDatetoLocal from '../../utils/showDatetoLocal'

const statusStyle = [
    { label: 'رد شده', className: 'badge--danger' },
    { label: 'در انتظار تایید', className: 'badge--secondary' },
    { label: 'تایید شده', className: 'badge--success' }
]
function ProposalRow({ proposal, index }) {
    const { description, price, duration, status } = proposal
    console.log(status);

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(description, 20)}</td>
            <td>{duration}روز</td>
            <td>{toPersianNumbersWithComma(price)}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
            </td>

        </Table.Row>
    )
}

export default ProposalRow
