import React from 'react'
import SelectRHF from '../../../ui/SelectRHF'
import { useForm } from 'react-hook-form'
import useChangeUserStatus from './useChangeUserStatus'
import { useQueryClient } from '@tanstack/react-query'
import Loader from './../../../ui/Loader'

const options = [
    { label: 'رد شده', value: 0 },
    { label: 'در انتظار تایید', value: 1 },
    { label: 'تایید شده', value: 2 }
]

function ChangeUserStatus({ userId, onClose }) {
    const queryClient = useQueryClient();
    const { isUpdating, changeUserStatus } = useChangeUserStatus()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        changeUserStatus({ id: userId, data }, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['users']
                })
                onClose();
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

export default ChangeUserStatus