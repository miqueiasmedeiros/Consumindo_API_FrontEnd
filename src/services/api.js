import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/"
    // baseURL: "http://192.168.1.8:8000/api/"
});

export default api;