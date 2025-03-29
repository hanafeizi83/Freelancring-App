import { useQuery } from "@tanstack/react-query";
import { userProfileApi } from "../../services/authentication";

export default function useUser() {
    const { isLoading, data } = useQuery({
        queryKey: ['user'],
        queryFn: userProfileApi
    })

    const { user } = data || {};

    return { user, isLoading }

}