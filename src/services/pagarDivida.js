import { api } from './baseApi';

const pagarDivida = async (dividaId) => {
    try {
        const response = await api.put('/Divida/Pagar', dividaId);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { pagarDivida };