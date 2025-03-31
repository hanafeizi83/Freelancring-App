import http from "./httpServices";

export function sendOtpApi(data) {
    return http.post('/user/get-otp', data).then(({ data }) => data.data);
}

export function checkOtpApi(data) {
    return http.post('/user/check-otp', data).then(({ data }) => data.data);
}

export function compeleteProfileApi(data) {
    return http.post('/user/complete-profile', data).then(({ data }) => data.data);
}

export function userProfileApi() {
    return http.get('/user/profile').then(({ data }) => data.data);
}

export function usersApi() {
    return http.get('/admin/user/list').then(({ data }) => data.data);
}