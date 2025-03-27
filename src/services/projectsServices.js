import http from './httpServices'

export function ownerProjectsApi() {
    return http.get('/project/owner-projects').then(({ data }) => data.data)
}

export function deleteProjectApi(id) {
    return http.delete(`/project/${id}`).then(({ data }) => data.data)
}