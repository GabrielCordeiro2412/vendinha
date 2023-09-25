import React, { useEffect, useState } from 'react';
import { TextInput, FlatList, ActivityIndicator } from 'react-native';

import Search from '../../assets/Search.svg';
import AddWhite from '../../assets/AddWhite.svg';

import { Container, InputArea, Title, SubContainer, ViewInput, AddButton } from '../../styles/global';

import UserCard from '../../components/UserCard/UserCard';

import { getAllClientes } from '../../services/getAllClientes';

import { useNavigation } from '@react-navigation/native';


export default function Dash() {

    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState();

    const navigator = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const dataAllClientes = await getAllClientes();
                setClientes(dataAllClientes.results);
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