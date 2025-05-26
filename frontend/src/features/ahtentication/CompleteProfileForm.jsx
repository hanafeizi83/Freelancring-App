import React from 'react'
import TextFailed from '../../ui/TextFailed'
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { compeleteProfileApi } from '../../services/authentication';
import toast from 'react-hot-toast';
import RadioGroup from '../../ui/RadioGroup';
import Loader from './../../ui/Loader'
import { Link } from 'react-router-dom';

function CompleteProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isPending, mutateAsync } = useMutation({
        mutationFn: compeleteProfileApi
    })
    const onSubmit = async (data) => {
        try {
            const { message } = await mutateAsync(data);
            toast.success(message);
            if (!user.isActive) return navigate('/compelete-profile');
            if (user.status !== 2) {
                navigate('/')
                toast('پروفایل شما در انتظار تایید است', { icon: '⚠' });
                return;
            }
            if (user.role === 'OWNER') return navigate('/owner')
            if (user.role === 'FREELANCER') return navigate('/freelancer')
            if (user.role === 'ADMIN') return navigate('/admin')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        <div className='w-full'>
            <form className='w-full space-y-5 mb-4' onSubmit={handleSubmit(onSubmit)}>
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
                        <RadioGroup
                            name='role'
                            validationSkma={{
                                required: 'انتخاب نقش ضروری است'
                            }}
                            register={register}
                            options={[
                                { label: 'کارفرما', value: 'OWNER' },
                                { label: 'فریلنسر', value: 'FREELANCER' }
                            ]}
                        />
                    </div>
                    {errors && errors['role'] && <p className='text-error'>{errors['role'].message}</p>}
                </div>
                {
                    isPending ? <Loader /> :
                        <button className='btn btn--primary w-full'>تایید </button>
                }
                
            </form>
            <Link to='/' className='text-primary-800 py-4'>بازگشت به خانه</Link>
        </div>
    )
}

export default CompleteProfileForm
