import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatusApi } from "../../services/projectsServices";
import toast from "react-hot-toast";

export default function useChangeProjectStatus() {
    const queryClient = useQueryClient();
    const { isPending: isChanging, mutate: changeProjectStatus } = useMutation({
        mutationFn: changeProjectStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey:['owner-projects']
            })
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return { isChanging, changeProjectStatus }
}