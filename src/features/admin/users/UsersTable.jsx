import React from 'react'
import Table from './../../../ui/Table'
import useUsers from './useUsers'
import Loader from './../../../ui/Loader'
import UserRow from './UserRow';

function UsersTable() {
    const { users, isLoading } = useUsers();

    if (isLoading) return <Loader />
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>نام و نام خانوادگی</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    users && users.map((user, index) => (
                        <UserRow key={user._id} user={user} index={index} />
                    ))
                }

            </Table.Body>
        </Table>
    )
}

export default UsersTable
