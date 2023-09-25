import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import { ViewValorDivida, ViewCard, TextBold, TitleCard, CommomText } from '../../styles/global';

import { useNavigation } from '@react-navigation/native';

export default function UserCard(data) {

    const navigator = useNavigation();

    return (
        <ViewCard style={styles.cardContainer}>
            <TouchableOpacity onPress={() => navigator.navigate('PerfilCliente', { action: 'edit' })}>
                <TitleCard>{data.data.nome}</TitleCard>
                <Text><TextBold>CPF: </TextBold><CommomText>{data.data.cpf}</CommomText></Text>
                <Text><TextBold>E-mail: </TextBold><CommomText>{data.data.email}</CommomText></Text>
                <ViewValorDivida>
                    <TitleCard>Valor da Dívida</TitleCard>
                    <TextBold>000</TextBold>
                </ViewValorDivida>
            </TouchableOpacity>
        </ViewCard>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.16,
            },
            android: {
                elevation: 4,
            },
        }),
        borderRadius: 8, // Opcional: adicione borda ao contêiner externo para maior clareza
        backgroundColor: 'white', // Opcional: definir uma cor de fundo para o contêiner externo
    },
})