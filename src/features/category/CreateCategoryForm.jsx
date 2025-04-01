import React from 'react'
import TextFailed from './../../ui/TextFailed'
import { useForm } from 'react-hook-form'
import useCreateCategory from './useCreateCategory';
import useCategoryEdit from './useCategoryEdit';

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
            editCategory({ id: categoryId, data }, {
                onSuccess: () => {
                    onClose()
                }
            })
        } else {
            createCategory(data, {
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
            <TextFailed
                label='نوع'
                name='type'
                register={register}
                errors={errors}
                required
                validationSkma={{
                    required: 'نوع ضروری است'
                }}
            />

            <button className='btn btn--primary w-full'>
                تایید
            </button>
        </form>
    )
}

export default CreateCategoryForm
