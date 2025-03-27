import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextFailed from './../../ui/TextFailed'
import SelectRHF from '../../ui/SelectRHF';
import useCategories from '../../hook/useCategories';
import { TagsInput } from 'react-tag-input-component';
import DatePickerFailed from '../../ui/DatePickerFailed';
function CreeateProjectForm() {
    const { isLoading, categories } = useCategories();
    const [tag, setTag] = useState([])
    const [date, setDate] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <TextFailed
                label='عنوان'
                name='title'
                register={register}
                errors={errors}
                required
                validationSkma={{
                    required: 'عنوان ضروری است'
                }}
            />
            <TextFailed
                label='توضیحات'
                name='description'
                register={register}
                errors={errors}
                required
                validationSkma={{
                    required: 'توضیحات ضروری است'
                }}
            />
            <TextFailed
                label='بودجه'
                name='budget'
                register={register}
                errors={errors}
                required
                validationSkma={{
                    required: 'بودجه ضروری است'
                }}
            />
            <SelectRHF
                label='دسته بندی '
                name='categoty'
                required
                register={register}
                errors={errors}
                validationSkma={{
                    required: 'دسته بندی ضروری است'
                }}
                options={categories}
            />
            <div>
                <label htmlFor="">تگ ها</label>
                <TagsInput
                    value={tag}
                    onChange={setTag}
                    name='tags'
                    classNames={TextFailed}
                />
            </div>
            <DatePickerFailed
                label='ددلاین'
                value={date}
                onChange={setDate}
                name='deadline'
            />
            <button className='btn btn--primary w-full'>تایید </button>
        </form>
    )
}

export default CreeateProjectForm
