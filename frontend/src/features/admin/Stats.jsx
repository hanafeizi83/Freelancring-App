import React from 'react'
import State from './../../ui/State'
import useProjects from '../freelancer/project/useProjects';
import useProposals from '../proposals/useProposals';
import useUsers from './users/useUsers'

function Stats() {
    const { projects = [] } = useProjects();
    const { proposals = [] } = useProposals();
    const { users = [] } = useUsers();
    return (
        <div className='grid mt-4 grid-cols-1 grid-rows-3 gap-5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 '>
            <State
                label='کاربران'
                value={users.length}
                img='users.png'
                color='purple'
            />
            <State
                label='پروژه ها'
                value={projects.length}
                img='projects.png'
                color='green'
            />
            <State
                label='درخواست ها'
                value={proposals.length}
                img='project success.png'
                color='pink'
            />
        </div>
    )
}

export default Stats
