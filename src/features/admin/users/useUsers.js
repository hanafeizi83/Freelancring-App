import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../../../services/authentication";
export default function useUsers() {
    const { isLoading, data } = useQuery({
        queryKey: ['users'],
        queryFn: usersApi
    })

    const { users } = data || {};

    return { users, isLoading }
}