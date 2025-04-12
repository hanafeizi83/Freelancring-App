import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateText from '../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../utils/toPresionNumbers'
import Modal from '../../ui/Modal'
import ChangeProposalsStatus from './ChangeProposalsStatus'

const statusStyle = [
    { label: 'رد شده ', className: 'badge--danger' },
    { label: 'در انتظار تایید ', className: 'badge--secondary' },
    { label: 'تایید شده', className: 'badge--success' }
]

function ProposalRow({ proposal, index }) {
    const [isOpenStatus, setIsOpenStatus] = useState(false)
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
                <button className='btn btn--secondary' onClick={() => setIsOpenStatus(true)}>
                    تغییر وضعیت
                </button>
                <Modal open={isOpenStatus} onClose={() => setIsOpenStatus(false)} title={`تغییر وضعیت  ${proposal.description}`}>
                    <ChangeProposalsStatus onClose={() => setIsOpenStatus(false)} proposalId={proposal._id} />
                </Modal>
            </td>
        </Table.Row >
    )
}

export default ProposalRow
