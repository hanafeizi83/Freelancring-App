import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextFailed from './../../ui/TextFailed'
import SelectRHF from '../../ui/SelectRHF';
import useCategories from '../../hook/useCategories';
import { TagsInput } from 'react-tag-input-component';
import DatePickerFailed from '../../ui/DatePickerFailed';
import useCreateProject from './useCreateProject';
import useEditProject from './useEditProject';
import Loader from './../../ui/Loader'
function CreeateProjectForm({ onClose, project = {} }) {
    const projectId = project._id;
    const isEdit = Boolean(projectId);
    const { title, description, budget, category, tags, deadline } = project;
    const [tag, setTag] = useState(tags || []);
    const [date, setDate] = useState(deadline || '');
    const { isLoading, categories } = useCategories();
    const { isCreating, createProject } = useCreateProject();
    const { isEditing, editProject } = useEditProject();
    let editValues = {};
    if (isEdit) {
        editValues = {
            title,
            description,
            budget,
            category,
            tags: tag,
            deadline: date
        }
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: editValues });
    const onSubmit = (data) => {
        const newProject = {
            ...data,
            tags: tag,
            deadline: new Date(date).toISOString()
        }
        if (isEdit) {
            console.log(projectId, newProject);

            editProject({ id: projectId, newProject }, {
                onSuccess: () => {
                    onClose()
                }
            })
        } else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose()
                }
            })
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 text-right'>
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
                name='category'
                required
                register={register}
                errors={errors}
                validationSkma={{
                    required: 'دسته بندی ضروری است'
                }}
                options={categories}
            />
            <div>
                <label htmlFor="" className='text-secondary-800'>تگ ها</label>
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
            {
                isCreating || isEditing ? <Loader /> :
                    <button className='btn btn--primary w-full'>
                        {
                            isEdit ?'ویرایش پروژه':'افزودن پروژه'
                        }
                     </button>
            }
        </form>
    )
}

export default CreeateProjectForm
