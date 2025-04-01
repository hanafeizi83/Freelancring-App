import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';

const app = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

app.interceptors.request.use(
    res => res,
    err => Promise.reject(err)
)

app.interceptors.response.use(
    res => res,
    err => {
        const OriginalConfig = err.config;
        if (err.response.status == 401 && !OriginalConfig._retry) {
            OriginalConfig._retry = true;
            try {
                const { data } = axios.get(`${BASE_URL}/user/refresh-token`, { withCredentials: true });
                if (data) return app(OriginalConfig);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(err)
    }
)


const http = {
    get: app.get,
    post: app.post,
    patch: app.patch,
    put: app.put,
    delete: app.delete
}

export default http