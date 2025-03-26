import http from './httpServices'

export function ownerProjectsApi() {
    return http.get('/project/owner-projects').then(({ data }) => data.data)
}