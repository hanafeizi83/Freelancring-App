import React from 'react'
import Table from './../../ui/Table'
import useProposals from './useProposals'
import ProposalRow from './ProposalRow';
function ProposalsTable() {
    const {proposals , isLoading}=useProposals();
    console.log(proposals);
    
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
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

export default ProposalsTable
