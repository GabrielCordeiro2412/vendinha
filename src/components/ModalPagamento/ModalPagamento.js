import { View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ViewModal, TitleCard, BotaoCancelar, TextCancelar, BotaoSalvar, TextSalvar } from '../../styles/global'

import Modal from 'react-native-modal';
import { pagarDivida } from '../../services/pagarDivida';

import { useNavigation } from '@react-navigation/native';

export default function ModalPagamento({ isVisible, toggleModal, dividaId, valorTotal }) {

    async function handlePagarDivida() {
        if (valorTotal === 0) {
            Alert.alert("Não possuem dívidas a ser pagas!");
            toggleModal();
        } else {
            const body = {
                dividaId: dividaId
            }
            const response = await pagarDivida(body);

            if (response) {
                Alert.alert("Dívida paga com sucesso!")
                toggleModal();
            }
        }
    }

    return (
        <Modal
            isVisible={isVisible}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <ViewModal>
                <TitleCard style={{ color: 'rgba(0, 0, 0, 1)', textAlign: 'center' }}>Ao confirmar, essa dívida será quitada. Deseja realmente confirmar?</TitleCard>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <BotaoCancelar onPress={toggleModal}>
                            <TextCancelar>Cancelar</TextCancelar>
                        </BotaoCancelar>
                        <BotaoSalvar style={{ width: 110 }} onPress={handlePagarDivida}>
                            <TextSalvar>Confirmar</TextSalvar>
                        </BotaoSalvar>
                    </View>
                </TouchableOpacity>
            </ViewModal>
        </Modal>
    )
}