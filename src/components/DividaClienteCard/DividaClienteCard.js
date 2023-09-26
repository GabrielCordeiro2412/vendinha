import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import { TextSalvar, ViewCard, BtnPagar, TitleCard, ViewValorDividaCliente, Title } from '../../styles/global'
import Done from '../../assets/Done.svg'

export default function DividaClienteCard(data) {
    useEffect(() => {

    }, [])
    return (
        <ViewCard style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TitleCard>{data.data.descricao}</TitleCard>
                {
                    data.data.dataPagamento ? (
                        <Done height="25" width="25" />
                    ) : (
                        <BtnPagar>
                            <TextSalvar>Pagar</TextSalvar>
                        </BtnPagar>
                    )
                }

            </View>
            <ViewValorDividaCliente>
                <TitleCard style={{ color: 'rgba(64, 64, 64, 1)' }}>Valor da Dívida</TitleCard>
                <TitleCard style={{ color: 'rgba(112, 112, 112, 1)' }}>R${data.data.valor}</TitleCard>
            </ViewValorDividaCliente>

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