import React from 'react'
import TextFailed from './../../ui/TextFailed'
import { useForm } from 'react-hook-form'
import useCreateCategory from './useCreateCategory';
import useCategoryEdit from './useCategoryEdit';
import Loader from './../../ui/Loader'

function CreateCategoryForm({ onClose, category = {} }) {
    const categoryId = category._id;
    const isEdit = Boolean(categoryId);

    const { title, englishTitle, description, type } = category;
    let editValue = {};
    if (isEdit) {
        editValue = {
            title,
            englishTitle,
            description,
            type
        }
    }

    const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues: editValue });
    const { isCreating, createCategory } = useCreateCategory();
    const { isEditing, editCategory } = useCategoryEdit();
    const onSubmit = (data) => {
        if (isEdit) {
            const newCategory = {
                ...data,
                type: 'ticket'
            }
            editCategory({ id: categoryId, newCategory }, {
                onSuccess: () => {
                    onClose()
                }
            })
        } else {
            const newCategory = {
                ...data,
                type: 'project'
            }
            createCategory(newCategory, {
                onSuccess: () => {
                    onClose()
                }
            })
        }
    }
    return (
        <form className='space-y-4 text-right' onSubmit={handleSubmit(onSubmit)}>
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
                label='عنوان انگلیسی'
                name='englishTitle'
                register={register}
                errors={errors}
                required
                validationSkma={{
                    required: 'عنوان انگلیسی ضروری است'
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

            {
                isCreating || isEditing ? <Loader /> :
                    <button className='btn btn--primary w-full'>
                        تایید
                    </button>
            }
        </form>
    )
}

export default CreateCategoryForm
