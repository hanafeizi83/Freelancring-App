import React, { useState } from 'react'
import Table from '../../../ui/Table'
import Modal from './../../../ui/Modal'
import ChangeUserStatus from './ChangeUserStatus'

const statusStyle = [
    { label: 'رد شده', className: 'badge--danger' },
    { label: 'در انتظار تایید', className: 'badge--secondary' },
    { label: 'تایید شده', className: 'badge--success' },
]

function UserRow({ index, user }) {
    const [isOpen, setIsOpen] = useState(false)
    let role = '';
    switch (user.role) {
        case 'ADMIN': role = 'ادمین'; break;
        case 'OWNER': role = 'کارفرما'; break;
        case 'FREELANCER': role = 'فریلنسر'; break;
    }
    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{role}</td>
            <td>
                <span className={`badge ${statusStyle[user.status].className}`}>{statusStyle[user.status].label}</span>
            </td>
            <td>
                <button className='btn btn--secondary' onClick={() => setIsOpen(true)}>
                    تغییر وضعیت
                </button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} title={'تغییر وضعیت کاربر'}>
                    <ChangeUserStatus userId={user._id} onClose={() => setIsOpen(false)}/>
                </Modal>
            </td>
        </Table.Row>
    )
}

export default UserRow
