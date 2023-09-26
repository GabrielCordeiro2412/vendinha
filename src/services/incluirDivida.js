import { api } from './baseApi';

const incluirDivida = async (dividaData) => {
    try {
        const response = await api.post('/Divida', dividaData);
        const resultado = {
            response: response.status,
            id: response.data.id
        }
        return resultado;
    } catch (error) {
        return error.response.status;
    }
};

export { incluirDivida };