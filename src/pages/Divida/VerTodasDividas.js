import { FlatList, ActivityIndicator, View, RefreshControl } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import DividaClienteCard from '../../components/DividaClienteCard/DividaClienteCard'

import { Container, SubContainer, TitleCard, TotalAbertasFooter, BotaoSalvar, TextSalvar, BotaoCancelar, TextCancelar, ViewModal } from '../../styles/global'

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader'
import { getDividasByCliente } from '../../services/getDividasByCliente'
import { getDividasAbertasByCliente } from '../../services/getDividasAbertasByCliente'

import Modal from 'react-native-modal';
import ModalPagamento from '../../components/ModalPagamento/ModalPagamento'

export default function VerTodasDividas({ route }) {

    const [dividas, setDividas] = useState();
    const [loading, setLoading] = useState(false);
    const [valorTotalAbertas, setValorTotalAbertas] = useState();
    const [isModalVisible, setModalVisible] = useState(false);

    const [dividaAberta, setDividaAberta] = useState([]);

    const [refreshing, setRefreshing] = useState(false);

    const scrollRef = useRef();

    function handleUpdateView() {
        loadDividas();
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {

        loadDividas();
    }, [])

    async function loadDividas() {
        setLoading(true)
        const response = await getDividasByCliente(route.params.id);
        const responseAbertas = await getDividasAbertasByCliente(route.params.id)
        setValorTotalAbertas(responseAbertas.valorTotal)
        setDividaAberta(responseAbertas.response)
        if (response) {
            setDividas(response.response)
            setLoading(false);
        }
        setLoading(false)
    }

    return (
        <Container>
            <VoltarHeader title="Listagem de Dívidas" />
            <SubContainer>
                {
                    loading ? (
                        <ActivityIndicator color="rgba(98, 168, 86, 1)" />
                    ) : (
                        <FlatList
                            data={dividas}
                            renderItem={({ item }) => <DividaClienteCard data={item} />}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            ref={scrollRef}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={handleUpdateView}
                                />
                            }
                        />
                    )
                }
                <View style={{ justifyContent: 'center' }}>
                    <TotalAbertasFooter>
                        <TitleCard style={{ color: 'rgba(64, 64, 64, 1)' }}>Total</TitleCard>
                        <TitleCard style={{ color: 'rgba(64, 64, 64, 1)', fontWeight: '400', fontSize: 16 }}>R${valorTotalAbertas}</TitleCard>
                    </TotalAbertasFooter>
                    <BotaoSalvar style={{ alignSelf: 'center', marginTop: 16 }} onPress={toggleModal}>
                        <TextSalvar>Pagar</TextSalvar>
                    </BotaoSalvar>
                </View>
                <ModalPagamento isVisible={isModalVisible} toggleModal={toggleModal} dividaId={dividaAberta.length > 0 ?? dividaAberta[0].id} valorTotal={valorTotalAbertas} />
            </SubContainer>
        </Container>
    )
}