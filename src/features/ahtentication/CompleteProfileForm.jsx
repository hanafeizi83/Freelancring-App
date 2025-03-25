import React from 'react'
import TextFailed from '../../ui/TextFailed'
import { useForm } from 'react-hook-form';
import RadioInput from '../../ui/RadioInput';

function CompleteProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className='w-full'>
            <form className='w-full space-y-5' onSubmit={handleSubmit(onSubmit)}>
                <TextFailed
                    label={'نام و نام خانوادگی'}
                    name='name'
                    register={register}
                    errors={errors}
                    required
                    validationSkma={{
                        required: 'نام و نام خانوادگی ضروری است '
                    }}
                />
                <TextFailed
                    label={'ایمیل'}
                    name='email'
                    register={register}
                    errors={errors}
                    required
                    validationSkma={{
                        required: 'ایمیل ضروری است '
                    }}
                />
                <div className='space-y-2'>
                    <div className='flex items-center gap-10'>
                        <RadioInput
                            label='کارفرما'
                            value='owner'
                            name='role'
                            register={register}
                            validationSkma={{
                                required: 'انتخاب نقش ضروری است '
                            }}
                        />
                        <RadioInput
                            label='فرلنسر'
                            value='freelancer'
                            name='role'
                            register={register}
                            validationSkma={{
                                required: 'انتخاب نقش ضروری است '
                            }}
                        />
                    </div>
                    {errors && errors['role'] && <p className='text-error'>{errors['role'].message}</p>}
                </div>
                <button className='btn btn--primary w-full'>تایید </button>
            </form>
        </div>
    )
}

export default CompleteProfileForm
