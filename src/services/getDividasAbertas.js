import { api } from './baseApi';

const getDividasAbertas = async () => {
    try {
        const response = await api.get('/Divida/GetOData?%24filter=dataPagamento%20eq%20null');
        const valorTotal = response.data.d.results.reduce((total, divida) => total + divida.valor, 0);

        const resultado = {
            response: response.data.d,
            valorTotal: valorTotal
        };
        return resultado;
    } catch (error) {
        throw error;
    }
};

export { getDividasAbertas };