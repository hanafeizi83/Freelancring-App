import React from 'react'
import Table from './../../ui/Table'
import ProposalRow from './ProposalRow';
function ProposalTable({ proposals }) {
  console.log(proposals);

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>بودجه</th>
        <th>زمان تحویل</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {
          proposals && proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))
        }

      </Table.Body>
    </Table>
  )
}

export default ProposalTable
