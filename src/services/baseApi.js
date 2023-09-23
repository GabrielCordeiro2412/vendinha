import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://modeloproxyapi.interfocus.com.br:4443/api',
    headers: {
        'User-Agent': 'insomnia/2023.5.8',
    },
});