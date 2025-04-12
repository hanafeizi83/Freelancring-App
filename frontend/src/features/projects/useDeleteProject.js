import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../services/projectsServices";
import toast from "react-hot-toast";

export default function useDeleteProject() {
    const queryClient = useQueryClient();
    
    const { isPending: isDeleting, mutate: deleteProject } = useMutation({
        mutationFn: deleteProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ['owner-projects']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isDeleting, deleteProject }
}