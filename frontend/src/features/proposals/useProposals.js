import { useQuery } from "@tanstack/react-query";
import { proposalsApi } from "../../services/proposalServices";

export default function useProposals() {
    const { data, isLoading } = useQuery({
        queryKey: ['proposals'],
        queryFn: proposalsApi
    })

    const { proposals } = data || {};

    return { proposals, isLoading }
}