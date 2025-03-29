import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { projectApi } from "../../services/projectsServices";

export default function useProject() {
    const { id } = useParams();
    const { isLoading, data } = useQuery({
        queryKey: ['project', id],
        queryFn: () => projectApi(id)
    })

    const { project } = data || {}

    return { isLoading, project }

}