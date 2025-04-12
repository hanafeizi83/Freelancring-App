import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changUserStatusApi } from "../../../services/authentication";
import toast from "react-hot-toast";
export default function useChangeUserStatus() {
    const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
        mutationFn: changUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message)
        }
    })
    return { isUpdating, changeUserStatus }
}