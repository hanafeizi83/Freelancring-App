import React from 'react'
import State from '../../ui/State'
import useProjects from './../freelancer/project/useProjects'
import useProposals from './../proposals/useProposals'
import { toPersianNumbersWithComma } from '../../utils/toPresionNumbers';
function Stats() {
    const { projects = [] } = useProjects();
    const { proposals = [] } = useProposals();
    const wallet = proposals.reduce((acc, curr) => curr.price + acc, 0)

    return (
        <div className='grid mt-4 grid-cols-1 grid-rows-3 gap-5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 '>
            <State
                label='پروژه ها'
                value={projects.length}
                img='projects.png'
                color='purple'
            />
            <State
                label='درخواست ها'
                value={proposals.length}
                img='project success.png'
                color='green'
            />
            <State
                label='کیف پول'
                value={toPersianNumbersWithComma(wallet)}
                img='wallet.png'
                color='pink'
            />
        </div>
    )
}

export default Stats
