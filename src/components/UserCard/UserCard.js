import { Text, StyleSheet, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ViewValorDivida, ViewCard, TextBold, TitleCard, CommomText } from '../../styles/global';

import { useNavigation } from '@react-navigation/native';

import { getDividasAbertasByCliente } from '../../services/getDividasAbertasByCliente';

export default function UserCard(data) {

    const [valorTotal, setValorTotal] = useState();
    const [laoding, setLoading] = useState(false);

    useEffect(() => {
        async function loadValorDivida() {
            setLoading(true);
            try {
                const response = await getDividasAbertasByCliente(data.data.id);
                setValorTotal(response.valorTotal);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        loadValorDivida();
    }, [])

    const navigator = useNavigation();

    return (
        <ViewCard style={styles.cardContainer}>
            <TouchableOpacity onPress={() => navigator.navigate('PerfilCliente', { action: 'edit', id: data.data.id })}>
                <TitleCard>{data.data.nome}</TitleCard>
                <Text><TextBold>CPF: </TextBold><CommomText>{data.data.cpf}</CommomText></Text>
                <Text><TextBold>E-mail: </TextBold><CommomText>{data.data.email}</CommomText></Text>
                <ViewValorDivida>
                    <TitleCard>Valor da Dívida</TitleCard>
                    <TextBold>R$ {laoding ? <ActivityIndicator width="10" height="10" /> : valorTotal}</TextBold>
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
        borderRadius: 8,
        backgroundColor: 'white',
    },
})