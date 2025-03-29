import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../services/proposalServices";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useChangeProposalStatus() {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);

            queryClient.invalidateQueries({
                queryKey: ['project', id],
            })

        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isUpdating, changeProposalStatus }
}