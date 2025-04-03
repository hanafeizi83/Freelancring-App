import React from 'react'
import TextFailed from './../../ui/TextFailed'
import { useForm } from 'react-hook-form'
import useCreateProposal from './useCreateProposal'
import Loader from './../../ui/Loader'

function CreateProposalForm({ projectId, onClose }) {
    const { isCreating, createProposal } = useCreateProposal()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        createProposal({ ...data, projectId }, {
            onSuccess: () => {
                onClose()
            }
        })
    }
    return (
        <form className='text-right space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <TextFailed
                label='توضیحات'
                name='description'
                errors={errors}
                register={register}
                required
                validationSkma={{
                    required: 'توضیحات ضروری است'
                }}
            />
            <TextFailed
                label='هزینه'
                name='price'
                errors={errors}
                register={register}
                required
                validationSkma={{
                    required: 'هزینه ضروری است'
                }}
            /><TextFailed
                label='زمان تحویل'
                name='duration'
                errors={errors}
                register={register}
                required
                validationSkma={{
                    required: 'زمان تحویل ضروری است'
                }}
            />
            {
                isCreating ? <Loader /> :
                    <button className='btn btn--primary w-full'>
                        تایید
                    </button>
            }
        </form>
    )
}

export default CreateProposalForm
