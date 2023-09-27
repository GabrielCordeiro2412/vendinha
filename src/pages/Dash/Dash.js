import React, { useEffect, useState, useRef } from 'react';
import { TextInput, FlatList, ActivityIndicator, RefreshControl } from 'react-native';

import Search from '../../assets/Search.svg';
import AddWhite from '../../assets/AddWhite.svg';

import { Container, InputArea, Title, SubContainer, ViewInput, AddButton } from '../../styles/global';

import UserCard from '../../components/UserCard/UserCard';

import { getAllClientes } from '../../services/getAllClientes';

import { useNavigation } from '@react-navigation/native';


export default function Dash() {

    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState();

    const [refreshing, setRefreshing] = useState(false);

    const navigator = useNavigation();

    const scrollRef = useRef();

    useEffect(() => {
        const unsubscribe = navigator.addListener('focus', fetchData);
        fetchData();

        return () => {
            unsubscribe();
        };
    }, [])

    function handleUpdateView() {
        fetchData();
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const dataAllClientes = await getAllClientes();
            setClientes(dataAllClientes.results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Title>Clientes</Title>
            <ViewInput>
                <InputArea>
                    <TextInput
                        placeholder='Digite o nome do cliente'
                    />
                    <Search width="25" height="25" />
                </InputArea>
            </ViewInput>
            <SubContainer>
                {
                    loading ? (
                        <ActivityIndicator color="rgba(98, 168, 86, 1)" />
                    ) : (
                        <FlatList
                            data={clientes}
                            renderItem={({ item }) => <UserCard data={item} />}
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
                <AddButton onPress={() => navigator.navigate('PerfilCliente', { action: 'new' })}>
                    <AddWhite width="25" height="25" />
                </AddButton>
            </SubContainer>
        </Container>
    )
}