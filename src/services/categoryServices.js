import http from "./httpServices";

export function categoriesApi() {
    return http.get('/category/list').then(({ data }) => data.data)
}