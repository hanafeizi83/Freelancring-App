import http from "./httpServices";

export function sendOtpApi(data) {
    http.post('/user/get-otp', data).then(({ data }) => data.data);
}