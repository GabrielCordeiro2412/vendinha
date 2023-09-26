import { api } from './baseApi';

const getDividasAbertasByCliente = async (clienteId) => {
    try {
        const response = await api.get(`/Divida/GetOData?%24filter=cliente%2Fid%20eq%20${clienteId}%20and%20dataPagamento%20eq%20null`);
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

export { getDividasAbertasByCliente };