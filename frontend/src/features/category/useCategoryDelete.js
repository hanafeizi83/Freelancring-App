import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryDeleteApi } from "../../services/categoryServices";
import toast from "react-hot-toast";

export default function useCategoryDelete() {
    const queryClient = useQueryClient();
    const { isPending: isDeleting, mutate: deleteCategory } = useMutation({
        mutationFn: categoryDeleteApi,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ['categories']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isDeleting, deleteCategory }
}