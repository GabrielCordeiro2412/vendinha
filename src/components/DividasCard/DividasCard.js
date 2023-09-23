import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

import { DividaValues, ViewCard, TextBold, TitleCard, CommomText } from '../../styles/global';

export default function DividasCard({ title, qtde, total }) {
  return (
    <ViewCard style={styles.cardContainer}>
      <View>
        <TitleCard>{title}</TitleCard>
        <DividaValues>
          <TextBold>Qtde:</TextBold>
          <CommomText>{qtde}</CommomText>
        </DividaValues>
        <DividaValues>
          <TextBold>Valor Total:</TextBold>
          <CommomText>R${total}</CommomText>
        </DividaValues>
      </View>
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