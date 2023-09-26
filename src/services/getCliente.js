import { api } from './baseApi';

const getCliente = async (idCliente) => {
    try {
        const response = await api.get(`/Cliente/${idCliente}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getCliente };