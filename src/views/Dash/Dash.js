import React, { useEffect, useState } from 'react'
import { TextInput, FlatList } from 'react-native'
import axios from "axios";

import Search from '../../../assets/Search.svg'
import AddWhite from '../../../assets/AddWhite.svg'

import { Container, InputArea, Title, SubContainer, ViewInput, AddButton, CommomText } from '../../styles/global'
import UserCard from '../../components/UserCard';


export default function Dash() {

    const [clientes, setClientes] = useState();

    async function getUserData() {
        const options = {
            method: 'GET',
            url: 'https://modeloproxyapi.interfocus.com.br:4443/api/Cliente/GetOData',
            headers: { 'User-Agent': 'insomnia/2023.5.8' }
        };

        axios.request(options).then(function (response) {
            setClientes(response.data.d.results);
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getUserData();
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
                <FlatList
                    data={clientes}
                    renderItem={({ item }) => <UserCard data={item} />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
                <AddButton>
                    <AddWhite width="25" height="25" />
                </AddButton>
            </SubContainer>

        </Container>
    )
}