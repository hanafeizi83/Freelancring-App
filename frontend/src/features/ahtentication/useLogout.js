import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUserApi } from "../../services/authentication";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { isPending: isLoading, mutate: logout } = useMutation({
        mutationFn: logoutUserApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/')
        }
    })
    return { isLoading, logout }
}