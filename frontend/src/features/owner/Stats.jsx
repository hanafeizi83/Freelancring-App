import React from 'react'
import State from '../../ui/state';

function Stats({ projects = [] }) {
    const numOfProjects = projects.length;
    const numOfSuccessProjects = projects.filter(p => p.staus === 2).length;
    const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0)

    return (
        <div className='grid grid-cols-1 grid-rows-3 gap-5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 '>
            <State
                label='پروژه ها'
                value={numOfProjects}
                img='projects.png'
                color='purple'
            />
            <State
                label='پروژه های تایید شده'
                value={numOfSuccessProjects}
                img='project success.png'
                color='green'
            />
            <State
                label='درخواست ها'
                value={numOfProposals}
                img='proposals.png'
                color='pink'
            />
        </div>
    )
}

export default Stats
