import React from 'react'
import SelectRHF from '../../ui/SelectRHF'
import { useForm } from 'react-hook-form'
import useChangeProposalStatus from '../../hook/useChangeProposalStatus';
import Loader from './../../ui/Loader'

const options = [
    { label: 'رد شده', value: 0 },
    { label: 'در انتظار تایید', value: 1 },
    { label: 'تایید شده', value: 2 }
]
function ChangeProposalsStatus({ proposalId, onClose }) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
    const onSubmit = (data) => {
        changeProposalStatus({ id: proposalId, data }, {
            onSuccess: () => {
                onClose()
            }
        })

    }
    return (
        <form className='text-right space-y-5' onSubmit={handleSubmit(onSubmit)}>
            <SelectRHF
                register={register}
                errors={errors}
                name={'status'}
                label={'وضعیت'}
                required
                validationSkma={{
                    required: 'این فیلد ضروری است'
                }}
                options={options}
            />
            {
                isUpdating ? <Loader /> :
                    <button className='btn btn--primary w-full'>تایید</button>
            }
        </form>
    )
}

export default ChangeProposalsStatus
