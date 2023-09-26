import { api } from './baseApi';

const getDividasByCliente = async (clienteId) => {
    try {
        const response = await api.get(`/Divida/GetOData?%24filter=cliente%2Fid%20eq%20${clienteId}`);
        const valorTotal = response.data.d.results.reduce((total, divida) => total + divida.valor, 0);

        const resultado = {
            response: response.data.d.results,
            valorTotal: valorTotal
        };

        return resultado;
    } catch (error) {
        throw error;
    }
};

export { getDividasByCliente };