import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.19.128.1:3333'
});

export default api;