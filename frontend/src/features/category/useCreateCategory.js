import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryCreateApi } from "../../services/categoryServices";
import toast from "react-hot-toast";

export default function useCreateCategory() {
    const queryClient = useQueryClient();
    const { mutate: createCategory, isPending: isCreating } = useMutation({
        mutationFn: categoryCreateApi,
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

    return { createCategory, isCreating }
}