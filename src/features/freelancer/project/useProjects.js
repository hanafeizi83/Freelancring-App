import { useQuery } from "@tanstack/react-query";
import { projectsApi } from "../../../services/projectsServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
    const {search}=useLocation();
    const queryObject=queryString.parse(search);
    console.log(queryObject);
    
    const { isLoading, data } = useQuery({
        queryKey: ['projects' , queryObject],
        queryFn: () => projectsApi(search)
    })

    const { projects } = data || {};

    return { isLoading, projects }

}