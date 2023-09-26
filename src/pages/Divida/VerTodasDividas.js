import { FlatList, ActivityIndicator, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import DividaClienteCard from '../../components/DividaClienteCard/DividaClienteCard'

import { Container, SubContainer, TitleCard, TotalAbertasFooter, BotaoSalvar, TextSalvar, BotaoCancelar, TextCancelar, ViewModal } from '../../styles/global'

import VoltarHeader from '../../components/VoltarHeader/VoltarHeader'
import { getDividasByCliente } from '../../services/getDividasByCliente'
import { getDividasAbertasByCliente } from '../../services/getDividasAbertasByCliente'

import Modal from 'react-native-modal';

export default function VerTodasDividas({ route }) {

    const [dividas, setDividas] = useState();
    const [loading, setLoading] = useState(false);
    const [valorTotalAbertas, setValorTotalAbertas] = useState()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        async function loadDividas() {
            setLoading(true)
            const response = await getDividasByCliente(route.params.id);
            const responseAbertas = await getDividasAbertasByCliente(route.params.id)
            setValorTotalAbertas(responseAbertas.valorTotal)
            if (response) {
                setDividas(response.response)
                setLoading(false);
            }
            setLoading(false)
        }
        loadDividas();
    }, [])

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
                <Modal
                    isVisible={isModalVisible}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <ViewModal>
                        <TitleCard style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'center' }}>Ao confirmar, essa dívida será quitada. Deseja realmente confirmar?</TitleCard>
                        <TouchableOpacity onPress={toggleModal}>
                            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                                <BotaoCancelar onPress={() => setModalVisible(!isModalVisible)}>
                                    <TextCancelar>Cancelar</TextCancelar>
                                </BotaoCancelar>
                                <BotaoSalvar>
                                    <TextSalvar>Salvar</TextSalvar>
                                </BotaoSalvar>
                            </View>
                        </TouchableOpacity>
                    </ViewModal>
                </Modal>
            </SubContainer>
        </Container>
    )
}