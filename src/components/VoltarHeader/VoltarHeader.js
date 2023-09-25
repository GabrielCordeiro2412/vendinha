import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { Title, ViewHeader } from '../../styles/global';
import Arrowleft from '../../assets/Arrowleft.svg'

import { useNavigation } from '@react-navigation/native';

export default function VoltarHeader({ title }) {

    const navigator = useNavigation();

    return (
        <ViewHeader>
            <TouchableOpacity onPress={() => navigator.goBack()}>
                <Arrowleft height="30" width="30" />
            </TouchableOpacity>
            <Title style={styles.titlePersonalizado}>{title}</Title>
            <Text></Text>
        </ViewHeader>
    )
}

const styles = StyleSheet.create({
    titlePersonalizado: {
        marginBottom: 0,
        paddingRight: 50
    },
})