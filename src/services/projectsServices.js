import http from './httpServices'

export function ownerProjectsApi() {
    return http.get('/project/owner-projects').then(({ data }) => data.data)
}

export function deleteProjectApi(id) {
    return http.delete(`/project/${id}`).then(({ data }) => data.data)
}

export function createProjectApi(data) {
    return http.post(`/project/add`, data).then(({ data }) => data.data)
}

export function editProjectApi({ id, newProject }) {
    return http.patch(`/project/update/${id}`, newProject).then(({ data }) => data.data)
}