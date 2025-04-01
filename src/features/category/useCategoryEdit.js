import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryEditApi } from "../../services/categoryServices";
import toast from "react-hot-toast";

export default function useCategoryEdit() {
    const queryClient = useQueryClient();

    const { isPending: isEditing, mutate: editCategory } = useMutation({
        mutationFn: categoryEditApi,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ['categories']
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })

    return { isEditing, editCategory }
}