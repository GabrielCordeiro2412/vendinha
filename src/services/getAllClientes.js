import { api } from './baseApi';

const getAllClientes = async () => {
    try {
        const response = await api.get('/Cliente/GetOData');
        return response.data.d;
    } catch (error) {
        throw error;
    }
};

export { getAllClientes };