import { useQuery } from "@tanstack/react-query";
import { ownerProjectsApi } from "../../services/projectsServices";

export default function useOwnerProjects() {
    const { isLoading, data } = useQuery({
        queryKey: ['owner-projects'],
        queryFn: ownerProjectsApi
    })

    const { projects } = data || {}

    return { isLoading, projects }

}