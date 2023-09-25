import { api } from './baseApi';

const incluirCliente = async (clienteData) => {
    try {
        const response = await api.post('/Cliente', clienteData);
        const resultado = {
            response: response.status,
            id: response.data.id
        }
        return resultado;
    } catch (error) {
        throw error;
    }
};

export { incluirCliente };