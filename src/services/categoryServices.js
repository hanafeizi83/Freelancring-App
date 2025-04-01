import http from "./httpServices";

export function categoriesApi() {
    return http.get('/category/list').then(({ data }) => data.data)
}

export function categoryDeleteApi(id) {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data)
}

export function categoryCreateApi(data) {
    return http.post(`/admin/category/add`, data).then(({ data }) => data.data)
}