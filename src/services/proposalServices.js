import http from "./httpServices";

export function changeProposalStatusApi({ id, data }) {
    return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data)
}

export function proposalsApi() {
    return http.get(`/proposal/list`).then(({ data }) => data.data)
}