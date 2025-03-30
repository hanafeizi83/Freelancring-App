import { useQuery } from "@tanstack/react-query";
import { projectsApi } from "../../../services/projectsServices";

export default function useProjects() {
    const { isLoading, data } = useQuery({
        queryKey: ['projects'],
        queryFn: projectsApi
    })

    const { projects } = data || {};

    return { isLoading, projects }

}