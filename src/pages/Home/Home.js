import React, { useEffect, useState } from "react";;
import { StatusBar, ActivityIndicator } from 'react-native';

import { Container, Title, SubContainer } from '../../styles/global';

import DividasCard from "../../components/DividasCard/DividasCard";

import { getAllDividas } from '../../services/getAllDividas';
import { getDividasAbertas } from "../../services/getDividasAbertas";
import { getDividasPagas } from "../../services/getDividasPagas";

export default function Home() {

    const [loading, setLoading] = useState(false);

    const [dividas, setDividas] = useState();
    const [cadastradas, setCadastradas] = useState();
    const [abertas, setAbertas] = useState();
    const [pagas, setPagas] = useState();

    const [valorTotalCadastradas, setValorTotalCadastradas] = useState();
    const [valorTotalPagas, setValorTotalPagas] = useState();
    const [valorTotalAbertas, setValorTotalAbertas] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const dataAllDividas = await getAllDividas();
                const dataDividasPagas = await getDividasPagas();
                const dataDividasAbertas = await getDividasAbertas();
                console.log(dataAllDividas.valorTotal);
                setCadastradas(dataAllDividas.response.__count);
                setValorTotalCadastradas(dataAllDividas.valorTotal);
                setPagas(dataDividasPagas.response.__count);
                setValorTotalPagas(dataDividasPagas.valorTotal);
                setAbertas(dataDividasAbertas.response.__count);
                setValorTotalAbertas(dataDividasAbertas.valorTotal);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Title>Resumo de dívidas</Title>
            <SubContainer>
                {
                    loading ? (
                        <ActivityIndicator color="rgba(98, 168, 86, 1)" />
                    ) : (
                        <>
                            <DividasCard title="Dívidas em aberto" qtde={abertas} total={valorTotalAbertas} />
                            <DividasCard title="Dívidas pagas" qtde={pagas} total={valorTotalPagas} />
                            <DividasCard title="Dívidas cadastradas" qtde={cadastradas} total={valorTotalCadastradas} />
                        </>
                    )
                }


            </SubContainer>
        </Container>
    )
}