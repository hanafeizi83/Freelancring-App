import React from 'react'
import useChangeProjectStatus from './useChangeProjectStatus'
import Toggle from '../../ui/Toggle';
import Loader from '../../ui/Loader';

function ToggleProjectStatus({ project }) {
    const enabled = project.status === 'OPEN' ? true : false;

    const { isChanging, changeProjectStatus } = useChangeProjectStatus();
    const handleChangeStatus = () => {
        const status = project.status === 'OPEN' ? 'CLOSED' : 'OPEN'
        changeProjectStatus({ id: project._id, data: { status } })
    }
    return (
        <>
            {
                isChanging ? <Loader width={40} height={40}/> :
                    <Toggle
                        label={enabled ? 'باز' : 'بسته'}
                        onChange={handleChangeStatus}
                        enabled={enabled}
                    />
            }
        </>

    )
}

export default ToggleProjectStatus
